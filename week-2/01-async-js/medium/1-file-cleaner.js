// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// hello     world    my    name   is       raman
// After the program runs, the output should be
// hello world my name is raman

const fs = require("fs");

function fileCleaner(path) {
    const readedFile = fs.readFileSync(path, "utf-8");
    const modifiedContent = readedFile.replace(/\s+/g, " ")

    fs.writeFileSync(path, modifiedContent, 'utf-8')
}

fileCleaner('newtxt.txt')