const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers['username']
    const password = req.headers['password']
    if (username !== Admin.username && password !== Admin.password) {
        res.status(404).json({
            "msg": "Type the correct username and password"
        })

    }
    else {
        next()
    }
}

module.exports = adminMiddleware;