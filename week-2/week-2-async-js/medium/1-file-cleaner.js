const fs = require('fs');

const data = fs.readFileSync('example.txt', 'utf8');

// printing data just for fun lol:
console.log(data);

// sanitizing data:
const sanitizedData = data.split(/\s+/).join(' ').trim();

fs.writeFile ('example.txt', sanitizedData,
    (err) =>
    {
        if (err) throw err;
        console.log('File written successfully.');
    });  

console.log (sanitizedData);