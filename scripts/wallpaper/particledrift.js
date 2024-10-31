export function particledrift(wallpaper) {
    // Get particle colors
    document.documentElement.style.setProperty('--particle1', wallpaper.particle1 || '#181818');
    document.documentElement.style.setProperty('--particle2', wallpaper.particle2 || '#3c3c3c');
    document.documentElement.style.setProperty('--particle3', wallpaper.particle3 || '#606060');
    // Create particles and add them to the background
    const background = document.querySelector('.background');
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('span');
        const size = Math.random() * 8 + 5;
        const color = wallpaper[`particle${Math.floor(Math.random() * 3) + 1}`];
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = Math.random() * 120 + 30;
        const delay = -Math.random() * 200;
        const transformOriginX = `${Math.floor(Math.random() * 40 - 20)}vw`;
        const transformOriginY = `${Math.floor(Math.random() * 40 - 20)}vh`;
        particle.style.width = `${size}vmin`;
        particle.style.height = `${size}vmin`;
        particle.style.top = `${top}%`;
        particle.style.left = `${left}%`;
        particle.style.backgroundColor = color;
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.animation = `move ${duration}s linear ${delay}s infinite`;
        particle.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
        particle.style.filter = `blur(${(Math.random() * 0.7 + 2.5).toFixed(2)}vmin)`;
        background.appendChild(particle);
    }
}
