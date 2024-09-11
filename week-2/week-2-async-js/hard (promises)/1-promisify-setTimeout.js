/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const second = 1000;

function wait(n)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            resolve(`Resolved after ${n} seconds`);
        },
        n * second);
    });
}

wait(3).then((message) =>
{
    console.log(message);
});

module.exports = wait;