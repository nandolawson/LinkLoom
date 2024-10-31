document.addEventListener("DOMContentLoaded", () => {
    // Fetch all links from links.json
    fetch('config/links.json')
        .then(response => response.json())
        .then(links => {
            links.forEach(link => {
                const a = document.createElement("a");
                a.href = link.url;
                a.target = "_blank";
                a.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
                document.getElementById("links").appendChild(a);
            });
        });
});