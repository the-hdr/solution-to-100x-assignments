const second = 1000;
const goBackPreviousLineString = '\x1b[F';

let counter = 1;

function updateCounter()
{
    console.log (counter);
    ++counter;
    setTimeout (updateCounter, 1 * second);
    process.stdout.write (goBackPreviousLineString);
}

updateCounter();