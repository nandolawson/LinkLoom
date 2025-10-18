export const brokenglass = (wallpaperconfig) => {
    const wallpaper = document.createElement("div");
    wallpaper.style.position = "relative"; // damit absolute Kinder richtig positioniert werden
    wallpaper.style.filter = "blur(1vmin)";

    const colors = wallpaperconfig.possible_colors && wallpaperconfig.possible_colors.length
        ? wallpaperconfig.possible_colors
        : ["#ffffff"]; // Fallback, falls keine Farben definiert sind

    for (let amount = 0; amount < wallpaperconfig.amount; amount++) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const polygon = document.createElementNS(svg.namespaceURI, "polygon");
        const wrapper = document.createElement("div");

        // SVG Attribute korrekt setzen
        svg.setAttribute("height", `${wallpaperconfig.size}vh`);
        svg.setAttribute("width", `${wallpaperconfig.size}vw`);
        svg.setAttribute("viewBox", "0 0 100 100");

        // Wrapper Position & Rotation
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const rot = Math.random() * 360;
        wrapper.style.position = "absolute";
        wrapper.style.left = `${x}%`;
        wrapper.style.top = `${y}%`;
        wrapper.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;

        // Polygonfarbe
        polygon.style.fill = colors[Math.floor(Math.random() * colors.length)];

        // Punkte für Polygon
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
