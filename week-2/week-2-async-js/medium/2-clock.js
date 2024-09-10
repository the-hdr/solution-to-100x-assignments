function updateTime()
{
    const now = new Date();

    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format as HH:MM:SS (24-hour)
    const time24 = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    // Convert to 12-hour format
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;  // Convert 24-hour to 12-hour format
    const time12 = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${amPm}`;

    // Print the time
    console.clear();
    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

// Update every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately when the script starts
updateTime();
