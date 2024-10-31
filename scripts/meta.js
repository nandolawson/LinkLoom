document.addEventListener("DOMContentLoaded", () => {
    // Fetch all data from meta.json
    fetch('./config/meta.json')
        .then(response => response.json())
        .then(metadata => {
            // Name
            document.getElementById("name")
                .textContent = metadata.name;
            // Picture
            document.getElementById("picture")
                .innerHTML = metadata.picture ? `<img src="${metadata.picture}">` : '';
            // Websites title
            document.title = metadata.title || "LinkLoom";
            // Favicon
            const favicon = document.createElement('link');
            favicon.rel = 'icon';
            favicon.href = metadata.favicon || "";
            document
                .head
                .appendChild(favicon);
        });
});