const fs = require('fs');

const data = 'Hello, this is some text to write to the file.';

try
{
    fs.writeFileSync('output.txt', data, 'utf8');
    console.log('File written successfully!');
}
catch (err)
{
    console.error('Error writing to the file:', err);
}