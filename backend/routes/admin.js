const { Router } = require('express');
const adminMiddleware = require('../middlewares/admin');
const router = Router();
const signupValidation = require('../middlewares/signupValidation');
const courseValidation = require('../middlewares/courseValidation');
const { Admin, Course } = require('../db/index');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

router.post('/signup',signupValidation, async (req, res) => {
    const body = req.body;
    try {
        const admin = await Admin.findOne(body);
        if(!admin) {
            const response = await Admin.create(body);
            res.json({
                msg: "Admin created successfully"
            })
        } else {
            res.json({
                msg: "An Admin account is already exist with this username and password"
            })
        }
    } catch(err) {
        res.status(403).json({
            msg: "Something went wrong"
        })
    }
})

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const admin = await Admin.findOne({ username, password });
        if(user) {
            const token = jwt.sign({
                username
            }, JWT_SECRET);
            res.json({
                token
            })
        } else {
            res.status(404).json({
                msg:"User not found"
            })
        }
    } catch (err) {
        res.status(403).json({
            msg: "Something went wrong"
        })
    }
})


router.post('/courses/add', adminMiddleware, courseValidation, async (req, res) => {
    const body = req.body;
    try {
        const course = await Course.findOne(body);
        if(!course) {
            await Course.create(body);
            res.json({
                msg: "Course created successfully"
            })
        } else {
            res.json({
                msg: "Course already exists"
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find({});
        res.json({
            courses
        })
    } catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

router.delete('/courses/remove/:courseId', adminMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const course = await Course.findOneAndDelete({ _id:courseId });
        res.json({
            msg: "Course removed successfully"
        })
    } catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

router.put('/courses/update/:courseId', adminMiddleware, async (req, res) => {
    const body = req.body;
    const courseId = req.params.courseId;
    try {
        const course = await Course.findByIdAndUpdate({ _id:courseId }, body);
        console.log(course);
        res.json({
            msg: "Course updated successfully"
        })
    } catch (err) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

module.exports = router;