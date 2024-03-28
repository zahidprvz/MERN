//File System library/module
const fs = require('fs');

//reading data from file
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

//writing data to file
fs.writeFile('./docs/blog1.txt', 'I am learning Nodejs for learning MERN', () => {
    console.log('File was written.');
});

//directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder was created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder was deleted!');
    })
}

//delete a file
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('File was deleted!');
    })
}
