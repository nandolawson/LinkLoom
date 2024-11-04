/*
LinkLoom
Copyright 2024 Nando Lawson

Licensed under the GPL, Version 3 <https://github.com/nandolawson/LinkLoom/blob/main/LICENSE>.
This file may not be copied, modified, or distributed except according to those terms.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Fetch all data from theme.json
    fetch('config/theme.json')
        .then(response => response.json())
        .then(config => {
            // Default values
            document.documentElement.style.setProperty('--accent', config.accent || '#ffffff');
            document.documentElement.style.setProperty('--background', config.background || '#000000');
            document.documentElement.style.setProperty('--button', config.button || '#333333');

            // Load wallpaper if one is set
            if (config.wallpaper === 'particledrift') {
                fetch('config/wallpaper/particledrift.json')
                    .then(response => response.json())
                    .then(config => {
                        particledrift(config);
                    });
            }
        });
});

/* Backgrounds */

function particledrift(config) {
    // Default values
    document.documentElement.style.setProperty('--particle1', config.particle1 || '#181818');
    document.documentElement.style.setProperty('--particle2', config.particle2 || '#3c3c3c');
    document.documentElement.style.setProperty('--particle3', config.particle3 || '#606060');

    // Inject keyframes for animation
    const styleSheet = document.createElement('style');
    styleSheet.id = 'move-keyframes';
    styleSheet.innerHTML = `@keyframes move {100% { transform: translate3d(0, 0, 1px) rotate(360deg); }}`;
    document.head.appendChild(styleSheet);

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('span');

        // Set particle width and height based on a random size
        particle.style.width = particle.style.height = `${Math.random() * 8 + 5}vmin`;

        // Position particle randomly within the viewport
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;

        // Set particle color to one of the predefined colors in config
        particle.style.backgroundColor = config[`particle${Math.floor(Math.random() * 3) + 1}`];

        // Set particle style properties
        particle.style.position = 'absolute'; // Position particle absolutely within its container
        particle.style.borderRadius = '50%'; // Make particle circular
        particle.style.animation = `move ${Math.random() * 120 + 30}s linear ${-Math.random() * 200}s infinite`; // Apply infinite rotation animation with random duration and delay

        // Define the transform origin for particle rotation at a random offset
        particle.style.transformOrigin = `${Math.floor(Math.random() * 40 - 20)}vw ${Math.floor(Math.random() * 40 - 20)}vh`;

        // Apply a random blur effect to the particle
        particle.style.filter = `blur(${(Math.random() * 0.7 + 2.5).toFixed(2)}vmin)`;

        // Add the wallpaper to the document
        document.querySelector('.wallpaper').appendChild(particle);
    }
}