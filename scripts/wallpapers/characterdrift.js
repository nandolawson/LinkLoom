export const characterdrift = (wallpaperconfig) => { 
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
            color: randomElementFrom(wallpaperconfig.possibleColors),
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
}