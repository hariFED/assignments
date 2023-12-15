// // ## Reading the contents of a file

// // Write code to read contents of a file and print it
//  to the console. 
// // You can use the fs 
// library to as a black box, the goal is to understand async tasks. 
// // Try to do an expensive operation below the file read and 
// see how it affects the output. 
// // Make the expensive operation more and more
//  expensive and see how it affects the output. 

const fs = require('fs')

function readaFile() {

    fs.writeFile("newTextfile.txt", "fdfwefdsfefaefefef   fef ef fef ef e", 'utf-8', function (err, data) {
        console.log("new file created")

    })

    fs.readFile("newTextfile.txt", "utf-8", function (err, data) {
        console.log("The file has been read", data)
    })





}
readaFile()
