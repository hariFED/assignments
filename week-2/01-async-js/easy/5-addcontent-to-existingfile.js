const fs = require("fs")

function addContent() {


    fs.appendFile("newTextfile.txt", " something new added", 'utf-8', function (err, data) {
        console.log("Added new Data: ", data)
    })
}

addContent()