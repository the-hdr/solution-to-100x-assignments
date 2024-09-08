const second = 1000;
const goBackPreviousLineString = '\x1b[F';

let currentTime = 1;

function printCurrentTime()
{
    console.log (currentTime);
    ++currentTime;
    process.stdout.write (goBackPreviousLineString);
}

setInterval (printCurrentTime, 1 * second);