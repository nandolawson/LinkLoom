export const particledrift = (wallpaperconfig) => {
    const possibleColors = Array.isArray(wallpaperconfig.possibleColors) && wallpaperconfig.possibleColors.length
        ? wallpaperconfig.possibleColors
        : ["#181818", "#3c3c3c", "#606060"];
    possibleColors.forEach((color, index) => {
        document.documentElement.style.setProperty(`--particle${index + 1}`, color);
    });
    if (!document.getElementById("particledrift-move-keyframes")) {
        const styleSheet = document.createElement("style");
        styleSheet.id = "particledrift-move-keyframes";
        styleSheet.textContent = `
            @keyframes particledrift-move {
                100% { transform: translate3d(0,0,1px) rotate(360deg); }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    const wallpaper = document.createElement("div");
    const amount = wallpaperconfig.amount || 15;
    const particles = Array.from({ length: amount }, () => {
        const size = Math.random() * 8 + 5;
        const color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
        const blur = (Math.random() * 0.7 + 2.5).toFixed(2);
        const animDelay = -Math.random() * 200;
        const animDuration = Math.random() * 120 + 30;
        const xOrigin = Math.floor(Math.random() * 40 - 20);
        const yOrigin = Math.floor(Math.random() * 40 - 20);
        const left = Math.random() * 100;
        const top = Math.random() * 100;

        const particle = document.createElement("span");
        Object.assign(particle.style, {
            animation: `particledrift-move ${animDuration}s linear ${animDelay}s infinite`,
            backgroundColor: color,
            borderRadius: "50%",
            filter: `blur(${blur}vmin)`,
            height: `${size}vmin`,
            left: `${left}%`,
            position: "absolute",
            top: `${top}%`,
            transformOrigin: `${xOrigin}vw ${yOrigin}vh`,
            width: `${size}vmin`
        });
        return particle;
    });
    particles.forEach(particle => wallpaper.appendChild(particle));
    return wallpaper;
};
