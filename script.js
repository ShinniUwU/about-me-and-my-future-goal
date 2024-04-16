document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('discord-link').addEventListener('click', function(event) {
        event.preventDefault();
        copyToClipboard('shinni_');
    });

    document.getElementById('color-switcher').addEventListener('click', function() {
        toggleColor();
    });

    // Set initial notification box color
    setNotificationBoxColor();
    
    




    document.getElementById('profile-pic').addEventListener('click', function() {
        // Show the image
        var image = document.createElement('img');
        image.src = 'https://i.ibb.co/MBsTSxH/sharky.png';
        image.alt = 'Image';
        image.classList.add('spinning-image');
        document.body.appendChild(image);

        // Randomize initial position
        var startX = Math.random() * window.innerWidth;
        var startY = Math.random() * window.innerHeight;
        image.style.left = startX + 'px';
        image.style.top = startY + 'px';

        // Randomize animation properties
        var animationDuration = Math.random() * 3000 + 2000; // Duration between 2s and 5s
        var randomAngle = Math.random() * 360;
        var randomDistance = Math.random() * 200 + 100; // Distance between 100px and 300px
        var randomDirection = Math.random() * 360;

        // Apply animation
        image.style.animation = `spin ${animationDuration}ms linear forwards`;
        image.style.transform = `rotate(${randomAngle}deg) translate(${randomDistance}px, ${randomDirection}px)`;

        // Remove the image after animation ends
        setTimeout(function() {
            document.body.removeChild(image);
        }, animationDuration);
    });
});

function toggleColor() {
    var currentColor = document.body.style.backgroundColor;
    if (currentColor === '' || currentColor === 'rgb(26, 26, 26)') {
        document.body.style.transition = 'background-color 0.5s ease-in-out';
        document.body.style.backgroundColor = 'rgba(113, 42, 84, 0.9)';
        document.getElementById('icon').classList.remove('fa-sun');
        document.getElementById('icon').classList.add('fa-moon');
    } else {
        document.body.style.transition = 'background-color 0.5s ease-in-out';
        document.body.style.backgroundColor = '';
        document.getElementById('icon').classList.remove('fa-moon');
        document.getElementById('icon').classList.add('fa-sun');
    }
    
    // Update notification box color after color switch
    setNotificationBoxColor();
}

function setNotificationBoxColor() {
    var bodyColor = document.body.style.backgroundColor;
    var notification = document.getElementById('notification');
    notification.style.backgroundColor = bodyColor;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    showNotification('Discord username copied to clipboard: ' + text);
}

function showNotification(message) {
    var notification = document.getElementById('notification');
    notification.innerHTML = message;
    notification.classList.add('show');

    setTimeout(function () {
        notification.classList.remove('show');
    }, 3000); // Hide the notification after 3 seconds
}
