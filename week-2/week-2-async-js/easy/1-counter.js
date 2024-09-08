const second = 1000;
let currentTime = 1;

function printCurrentTime ()
{
    console.clear();
    console.log (currentTime);
    currentTime++;
}

setInterval (printCurrentTime, 1 * second);