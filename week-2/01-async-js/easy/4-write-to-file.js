

const fs = require('fs')

function writeaFile() {

    fs.writeFile("newTextfile.txt", "dfdsfewfsdfdsfsdfs", 'utf-8', function (err, data) {
        console.log("new file created")

    })
}
writeaFile()