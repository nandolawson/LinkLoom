/* Themes */

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
fetch("config/theme.json").then(response => response.json()).then(async config => {
    // Get colors from config or use default values
    [
        ["--accent", config.accent || "#ffffff"],
        ["--background", config.background || "#000000"],
        ["--button", config.button || "#333333"]
    ].forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
    });

    // Load all wallpapers from the array dynamically
const wallpaperPromises = config.wallpapers.map(async wallpaper => {
    const modulePromise = import(`./wallpapers/${wallpaper}.js`);
    const configPromise = fetch(`config/wallpaper/${wallpaper}.json`).then(response => response.json());

    const [module, wallpaperConfig] = await Promise.all([modulePromise, configPromise]);

    if (module[wallpaper]) {
        document.querySelector("#wallpapers").appendChild(module[wallpaper](wallpaperConfig));
    }
});

await Promise.all(wallpaperPromises);
});