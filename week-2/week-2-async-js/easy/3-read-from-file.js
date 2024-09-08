const fs = require('fs');

function sum (n)
{
    let calculatedSum = 0;
    for (let i = 1; i <= n; ++i)
    {
        calculatedSum += i;
    }
    return calculatedSum;
}

fs.readFile ('3-read-from-file.md', 'utf8',
    (err, data) =>
    {
        if (err)
        {
            console.error('Error reading the file:', err);
            return;
        }
        console.log('File content:', data);
    });


const n = 100000000;
console.log (sum (n));