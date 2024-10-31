import { particledrift } from 'scripts/wallpaper/particledrift.js';
document.addEventListener("DOMContentLoaded", () => {
    // Fetch all data from theme.json
    fetch('config/theme.json')
        .then(response => response.json())
        .then(theme => {
            document.documentElement.style.setProperty('--accent', theme.accent || '#ffffff');
            document.documentElement.style.setProperty('--background', theme.background || '#000000');
            document.documentElement.style.setProperty('--button', theme.button || '#333333');
            if (theme.wallpaper = "particledrift") {
                fetch('.config/wallpaper/particledrift.json')
                    .then(response => response.json())
                    .then(wallpaper => {particledrift(wallpaper);});
            }
        });
});