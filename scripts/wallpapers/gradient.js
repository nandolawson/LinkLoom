export const gradient = (wallpaperconfig) => { 
    const wallpaper = document.createElement("div");
    const colors = wallpaperconfig.colors.join(", ")
    wallpaper.style = `background: linear-gradient(${wallpaperconfig.rotation}deg, ${colors})`
    return wallpaper;
}