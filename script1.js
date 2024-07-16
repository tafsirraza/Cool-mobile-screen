document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.getElementById('actionButton');
    const message = document.getElementById('message');

    const messages = [
        "Welcome!",
        "Hello, World!",
        "You clicked the button!",
        "Have a great day!",
        "Stay Awesome!"
    ];
    let messageIndex = 0;

    actionButton.addEventListener('click', () => {
        messageIndex = (messageIndex + 1) % messages.length;
        message.style.opacity = 0;
        setTimeout(() => {
            message.innerText = messages[messageIndex];
            message.style.opacity = 1;
        }, 300);
    });
});