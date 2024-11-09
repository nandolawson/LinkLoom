/*
LinkLoom
Copyright 2024 Nando Lawson

Licensed under the GPL, Version 3 <https://github.com/nandolawson/LinkLoom/blob/main/LICENSE>.
This file may not be copied, modified, or distributed except according to those terms.
*/

/* Wallpapers */

const wallpapers = {
    brokenglass: (wallpaperconfig) => {
        const wallpaper = document.createElement("div");
        for (let amount = 0; amount < wallpaperconfig.amount; amount++) {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                polygon = document.createElementNS(svg.namespaceURI,'polygon'),
                wrapper = document.createElement("div");
            Object.assign(svg.setAttribute, {
                height: `${wallpaperconfig.size}vh`,
                viewBox: "0 0 100 100",
                width: `${wallpaperconfig.size}vw`
            });

            Object.assign(wrapper.style, {
                left: `${Math.random() * 100}%`,
                position: "absolute",
                rotate: `${Math.random() * 360}deg`,
                top: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%)",
            });

            polygon.style.fill = wallpaperconfig.possible_colors[parseInt(Math.random() * wallpaperconfig.possible_colors.length, 10)];

            // Generate random polygon points - min of 3, max of 5 
            let points = "0,0"
            for (let pointCount = 0; pointCount < 2 + Math.random() * 2; pointCount++) { 
                points += ` ${Math.random()*100},${Math.random()*100}`
            }
            polygon.setAttribute("points", points);

            svg.appendChild(polygon);
            wrapper.append(svg);
            wallpaper.appendChild(wrapper);
        }

        wallpaper.style = "filter: blur(1vmin);"
        return wallpaper;
    },

    characterdrift: (wallpaperconfig) => { 
        // Inject keyframes for animation - same as particledrift
        const styleSheet = document.createElement("style");
        styleSheet.id = "characterdrift-move-keyframes";
        styleSheet.innerHTML = `@keyframes characterdrift-move {100% { transform: translate3d(0, 0, 1px) rotate(360deg); }}`;
        document.head.appendChild(styleSheet);

        const randomElementFrom = (array) => array[parseInt(Math.random() * array.length, 10)],
            wallpaper = document.createElement("div");
            wallpaper.style = "filter: drop-shadow(0 0 1rem black);"
        

        for (let amount = 0; amount < (wallpaperconfig.amount || 15); amount++) {
            const character = document.createElement("span"),
                fontSize = `${Math.random() * wallpaperconfig.size + 1}rem`;

            character.textContent = randomElementFrom(wallpaperconfig.characters);

            // CSS properties
            Object.assign(character.style, {
                animation: `characterdrift-move ${Math.random() * 120 + 30}s linear ${-Math.random() * 200}s infinite`,
                backgroundColor: wallpaperconfig[`character${Math.floor(Math.random() * 3) + 1}`],
                borderRadius: "50%",
                color: randomElementFrom(wallpaperconfig.possible_colors),
                fontSize,
                left: `${Math.random() * 100}%`,
                position: "absolute",
                top: `${Math.random() * 100}%`,
                transformOrigin: `${Math.floor(Math.random() * 40 - 20)}vw ${Math.floor(Math.random() * 40 - 20)}vh`,
            });

            // Add the character to the newly created div
            wallpaper.appendChild(character);
        }
        return wallpaper
    },

    gradient: (wallpaperconfig) => { 
        const wallpaper = document.createElement("div");
        const colors = wallpaperconfig.colors.join(", ")
        wallpaper.style = `background: linear-gradient(${wallpaperconfig.rotation}deg, ${colors})`
        return wallpaper;
    },

    particledrift: (wallpaperconfig) => {
        // Get particle colors from config or use default values
        [1, 2, 3].forEach(value => {
            document.documentElement.style.setProperty(
                `--particle${value}`, 
                wallpaperconfig[`particle${value}`] || ["#181818", "#3c3c3c", "#606060"][value - 1]
            );
        });

        // Inject keyframes for animation
        const styleSheet = document.createElement("style");
        styleSheet.id = "particledrift-move-keyframes";
        styleSheet.innerHTML = `@keyframes particledrift-move {100% { transform: translate3d(0, 0, 1px) rotate(360deg); }}`;
        document.head.appendChild(styleSheet);

        const wallpaper = document.createElement("div");

        for (let amount = 0; amount < (wallpaperconfig.amount || 15); amount++) {
            const particle = document.createElement("span"),
                size = `${Math.random() * 8 + 5}vmin`;

            // CSS properties
            Object.assign(particle.style, {
                animation: `particledrift-move ${Math.random() * 120 + 30}s linear ${-Math.random() * 200}s infinite`,
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
            wallpaper.appendChild(particle);
        }
        return wallpaper
    }
}


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

    // Support single wallpaper instead of the new array to allow old config files
    if (config.wallpaper) { config.wallpapers = [config.wallpaper]; }

    // Load wallpaper if one is set
    for (const wallpaper of config.wallpapers) {
        fetch(`config/wallpaper/${wallpaper}.json`).then(response => response.json()).then(wallpaperconfig => {
            document.querySelector("#wallpapers").appendChild(wallpapers[wallpaper](wallpaperconfig));
        });
    }
});