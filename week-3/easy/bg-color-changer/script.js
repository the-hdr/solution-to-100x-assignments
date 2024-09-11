document.addEventListener('DOMContentLoaded', () => {
    // Get all buttons with the class 'changer-button'
    const buttons = document.querySelectorAll('.changer-button');

    // Add a click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the color from the data-color attribute
            const color = button.getAttribute('color-data');
            // Change the background color of the body
            document.body.style.backgroundColor = color;
        });
    });
});