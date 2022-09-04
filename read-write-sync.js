const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./first.txt');
const second = readFileSync('./second.txt');

writeFileSync(
    './new.txt', `Welcome:${first},${second}`, { flag: 'a' }

)