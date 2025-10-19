export const particledrift = (wallpaperconfig) => {
    // Get particle colors from config or use default values
    const possibleColors = Array.isArray(wallpaperconfig.possibleColors) && wallpaperconfig.possibleColors.length > 0
        ? wallpaperconfig.possibleColors
        : ["#181818", "#3c3c3c", "#606060"];
    possibleColors.forEach((color, index) => {
        document.documentElement.style.setProperty(`--particle${index + 1}`, color);
    });

    // Inject keyframes for animation
    if (!document.getElementById("particledrift-move-keyframes")) {
        const styleSheet = document.createElement("style");
        styleSheet.id = "particledrift-move-keyframes";
        styleSheet.innerHTML = `
            @keyframes particledrift-move {
                100% { transform: translate3d(0, 0, 1px) rotate(360deg); }
            }`;
        document.head.appendChild(styleSheet);
    }
    const wallpaper = document.createElement("div");
    for (let i = 0; i < (wallpaperconfig.amount || 15); i++) {
        const particle = document.createElement("span");
        const size = `${Math.random() * 8 + 5}vmin`;
        const randomColor = possibleColors[Math.floor(Math.random() * possibleColors.length)];
        // CSS properties
        Object.assign(particle.style, {
            animation: `particledrift-move ${Math.random() * 120 + 30}s linear ${-Math.random() * 200}s infinite`,
            backgroundColor: randomColor,
            borderRadius: "50%",
            filter: `blur(${(Math.random() * 0.7 + 2.5).toFixed(2)}vmin)`,
            height: size,
            left: `${Math.random() * 100}%`,
            position: "absolute",
            top: `${Math.random() * 100}%`,
            transformOrigin: `${Math.floor(Math.random() * 40 - 20)}vw ${Math.floor(Math.random() * 40 - 20)}vh`,
            width: size
        });
        // Add the particle to the document
        wallpaper.appendChild(particle);
    }
    return wallpaper;
};