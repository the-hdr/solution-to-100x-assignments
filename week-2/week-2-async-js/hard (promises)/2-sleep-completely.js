/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep (sleepDuration)
{
    return new Promise ((resolve) =>
    {
        const startTime = Date.now();

        let passedTime = 0;
        do
        {
            let currentTime = Date.now();
            passedTime = currentTime - startTime;
        }
        while (passedTime < sleepDuration);

        resolve();
    })
}

module.exports = sleep;