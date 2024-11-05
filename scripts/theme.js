/*
LinkLoom
Copyright 2024 Nando Lawson

Licensed under the GPL, Version 3 <https://github.com/nandolawson/LinkLoom/blob/main/LICENSE>.
This file may not be copied, modified, or distributed except according to those terms.
*/


/* Wallpapers */

const particledrift = function particledrift(wallpaperconfig) {
    // Get particle colors from config or use default values
    [1, 2, 3].forEach(value => {
        document.documentElement.style.setProperty(
            `--particle${value}`, 
            wallpaperconfig[`particle${value}`] || ["#181818", "#3c3c3c", "#606060"][value - 1]
        );
    });

    // Inject keyframes for animation
    const styleSheet = document.createElement("style");
    styleSheet.id = "move-keyframes";
    styleSheet.innerHTML = `@keyframes move {100% { transform: translate3d(0, 0, 1px) rotate(360deg); }}`;
    document.head.appendChild(styleSheet);

    for (let amount = 0; amount < 15; amount++) {
        const particle = document.createElement("span"),
              size = `${Math.random() * 8 + 5}vmin`;

        // CSS properties
        Object.assign(particle.style, {
            animation: `move ${Math.random() * 120 + 30}s linear ${-Math.random() * 200}s infinite`,
            backgroundColor: wallpaperconfig[`particle${Math.floor(Math.random() * 3) + 1}`],
            borderRadius: "50%",
            filter: `blur(${(Math.random() * 0.7 + 2.5).toFixed(2)}vmin)`,
            height: `${size}`,
            left: `${Math.random() * 100}%`,
            position: "absolute",
            top: `${Math.random() * 100}%`,
            transformOrigin: `${Math.floor(Math.random() * 40 - 20)}vw ${Math.floor(Math.random() * 40 - 20)}vh`,
            width: `${size}`
        });

        // Add the particle to the document
        document.querySelector(".wallpaper").appendChild(particle);
    }
};


/* Code */

// Fetch all data from theme.json
fetch("config/theme.json").then(response => response.json()).then(config => {
    // Get colors from config or use default values
    [
        ["--accent", config.accent || "#ffffff"],
        ["--background", config.background || "#000000"],
        ["--button", config.button || "#333333"]
    ].forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
    });

    // Set background image if specified
    if (config.backgroundimage) {
        Object.assign(document.body.style, {
            backgroundImage: `url(${config.backgroundimage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        });
    }

    // Load wallpaper if one is set
    if (config.wallpaper === "particledrift") {
        fetch("config/wallpaper/particledrift.json").then(response => response.json()).then(wallpaperconfig => {
            particledrift(wallpaperconfig);
        });
    }
});