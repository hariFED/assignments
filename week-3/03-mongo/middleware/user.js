const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers['username']
    const password = req.headers['password']
    if (username !== User.username && password !== User.password) {
        res.status(404).json({
            "msg": "Type the correct username and password"
        })

    }
    else {
        next()
    }
}

module.exports = userMiddleware;