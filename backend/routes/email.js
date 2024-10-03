const { Router } = require('express');
const { Resend } = require('resend');

const router = Router();
const resend = new Resend("re_123456789");

router.post("/welcome", async (req, res) => {
    const customerData = req.body; 
    console.log(customerData);
    const { data, error } = await resend.emails.send({
        from: "mackhack0705@gmail.com",
        to: customerData.email,
        subject: "Welcome to Mackhack",
        text: "Welcome to the Mackhack Best education platform",
    })

    if (error) {
        return res.status(400).json({ error });
      }
    
    res.status(200).json({ data });
})

module.exports = router;