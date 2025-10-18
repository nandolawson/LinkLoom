export const brokenglass = (wallpaperconfig) => {
    const wallpaper = document.createElement("div");
    // Position absolute children correctly
    wallpaper.style.position = "relative";
    wallpaper.style.filter = "blur(1vmin)";

    const colors = wallpaperconfig.possible_colors && wallpaperconfig.possible_colors.length
        ? wallpaperconfig.possible_colors
        // Fallback if no colors are defined
        : ["#ffffff"];

    for (let amount = 0; amount < wallpaperconfig.amount; amount++) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const polygon = document.createElementNS(svg.namespaceURI, "polygon");
        const wrapper = document.createElement("div");

        // Set SVG attributes correctly
        svg.setAttribute("height", `${wallpaperconfig.size}vh`);
        svg.setAttribute("width", `${wallpaperconfig.size}vw`);
        svg.setAttribute("viewBox", "0 0 100 100");

        // Wrapper Position & Rotation
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const rot = Math.random() * 360;
        wrapper.style.position = "absolute";
        wrapper.style.left = `${posX}%`;
        wrapper.style.top = `${posY}%`;
        wrapper.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;

        // Polygon color
        polygon.style.fill = colors[Math.floor(Math.random() * colors.length)];

        // Points ffor polygon
        let points = "0,0";
        for (let pointCount = 0; pointCount < 2 + Math.random() * 2; pointCount++) { 
            points += ` ${Math.random() * 100},${Math.random() * 100}`;
        }
        polygon.setAttribute("points", points);

        svg.appendChild(polygon);
        wrapper.appendChild(svg);
        wallpaper.appendChild(wrapper);
    }

    return wallpaper;
};
