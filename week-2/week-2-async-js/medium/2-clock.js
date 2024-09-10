const second = 1000;

function updateTime()
{
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const time24 = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    const time12 = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${amPm}`;

    console.clear();
    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
}

function pad(number)
{
    return number < 10 ? '0' + number : number;
}

setInterval(updateTime, 1 * second);
updateTime();