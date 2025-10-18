export const particledrift = (wallpaperconfig) => {
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