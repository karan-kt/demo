const { readFile, writeFile } = require('fs');

readFile('./first.txt', 'utf8', (err, result) => {

    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    writeFile('./newasync', `Welcome:${first}`, (err, result) => {

        if (err) {
            console.log(err);
            return;
        }
    })
});