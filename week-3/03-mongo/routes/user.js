const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const express = require('express');
const app = express();

// User Routes
app.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username: req.body.username,
        password: req.body.username
    })
    res.status(200).json({
        "msg": "Profile Created"
    })

});

app.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then(courses => {
        res.json({
            courses
        })
    })
});

app.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic

});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});
