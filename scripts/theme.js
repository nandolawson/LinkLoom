/*
LinkLoom
Copyright 2024 Nando Lawson

Licensed under the GPL, Version 3 <https://github.com/nandolawson/LinkLoom/blob/main/LICENSE>.
This file may not be copied, modified, or distributed except according to those terms.
*/


/* Wallpapers */

const wallpapers = {
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

        let wallpaper = document.createElement("div");

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
    },

    brokenglass: (wallpaperconfig) => {
        let wallpaper = document.createElement("div");
        for (let amount = 0; amount < wallpaperconfig.amount; amount++) {
            let wrapper = document.createElement("div"),
               svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
               polygon = document.createElementNS(svg.namespaceURI,'polygon');
            
            svg.setAttribute("viewBox", `0 0 100 100`);  // needed for proper resizing
            svg.setAttribute("width", `${wallpaperconfig.size}vw`);
            svg.setAttribute("height", `${wallpaperconfig.size}vh`);
    
            Object.assign(wrapper.style, {
                position: "absolute",
                transform: "translate(-50%, -50%)",  // Center origin for top/left
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                rotate: `${Math.random() * 360}deg`,
            });
    
            Object.assign(polygon.style, {
                fill: randomElementFrom(wallpaperconfig.possible_colors),
            });
    
            // Generate random polygon points - min of 3, max of 5 
            let points = "0,0"
            for (let i = 0; i < 2 + Math.random() * 2; i++) { 
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

        let wallpaper = document.createElement("div");
        wallpaper.style = "filter: drop-shadow(0 0 1rem black);"

        for (let amount = 0; amount < (wallpaperconfig.amount || 15); amount++) {
            let particle = document.createElement("span"),
                fontSize = `${Math.random() * wallpaperconfig.size + 1}rem`;

            particle.textContent = randomElementFrom(wallpaperconfig.characters);

            // CSS properties
            Object.assign(particle.style, {
                animation: `characterdrift-move ${Math.random() * 120 + 30}s linear ${-Math.random() * 200}s infinite`,
                backgroundColor: wallpaperconfig[`particle${Math.floor(Math.random() * 3) + 1}`],
                borderRadius: "50%",
                fontSize: fontSize,
                color: randomElementFrom(wallpaperconfig.possible_colors),
                left: `${Math.random() * 100}%`,
                position: "absolute",
                top: `${Math.random() * 100}%`,
                transformOrigin: `${Math.floor(Math.random() * 40 - 20)}vw ${Math.floor(Math.random() * 40 - 20)}vh`,
            });

            // Add the particle to the newly created div
            wallpaper.appendChild(particle);
        }
        return wallpaper
    },

    gradient: (wallpaperconfig) => { 
        let wallpaper = document.createElement("div");
        const colors = wallpaperconfig.colors.join(", ")
        wallpaper.style = `background: linear-gradient(${wallpaperconfig.rotation}deg, ${colors})`
        return wallpaper;
    }
}


function randomElementFrom(array) {
    return array[parseInt(Math.random() * (array.length))]
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

    // Set background image if specified
    if (config.backgroundimage) {
        Object.assign(document.body.style, {
            backgroundImage: `url(${config.backgroundimage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        });
    }

    // Support single wallpaper instead of the new array to allow old config files
    if (config.wallpaper) { config.wallpapers = [config.wallpaper]; }

    // Load wallpaper if one is set
    for (let wallpaper of config.wallpapers) {
        fetch(`config/wallpaper/${wallpaper}.json`).then(response => response.json()).then(wallpaperconfig => {
            document.querySelector("#wallpapers").appendChild(wallpapers[wallpaper](wallpaperconfig));
        });
    }
});