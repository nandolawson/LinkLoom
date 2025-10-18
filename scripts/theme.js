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