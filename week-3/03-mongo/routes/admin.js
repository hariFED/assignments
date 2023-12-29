const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const express = require('express');
const app = express();


// Admin Routes
app.post('/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username: req.body.username,
        password: req.body.username
    })
    res.status(200).json({
        "msg": "Profile Created"
    })
});

app.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink

    })
});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then(courses => {
        res.json({
            courses
        })
    })
});

module.exports = router;