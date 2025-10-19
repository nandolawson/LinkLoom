/* Themes */

import { brokenglass } from "./wallpapers/brokenglass.js";
import { characterdrift } from "./wallpapers/characterdrift.js";
import { gradient } from "./wallpapers/gradient.js";
import { particledrift } from "./wallpapers/particledrift.js";

const wallpapers = {
    brokenglass,
    characterdrift,
    gradient,
    particledrift
};

/* CSS properties */

const style = document.createElement("style");
style.textContent = `
#wallpapers > * {
    animation: fadein 1s ease-out .5s forwards;
    opacity: 0;
    left: 0;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 0;
}
`;
document.head.appendChild(style);

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