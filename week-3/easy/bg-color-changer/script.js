document.addEventListener('DOMContentLoaded', () =>
{
    const buttons = document.querySelectorAll('.changer-button');

    buttons.forEach(button =>
    {
        button.addEventListener('click', () =>
        {
            const color = button.getAttribute('color-data');
            document.body.style.backgroundColor = color;
        });
    });
});