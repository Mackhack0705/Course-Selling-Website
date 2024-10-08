// inputValidation for handling input validation
const zod = require('zod');

const inputSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    username: zod.string().email(),
    password: zod.string().min(6),
    provider: zod.string(),
    isAdmin: zod.boolean()
})

function inputValidation(req, res, next) {
    const body = req.body;
    console.log(body);
    const response = inputSchema.safeParse(body);
    console.log(response);
    if(!response.success) {
        return res.status(411).json({
            msg: "Incorrect type of input"
        })
    }
    next();
}

module.exports = inputValidation;