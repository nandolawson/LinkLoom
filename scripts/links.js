const linksContainer = document.getElementById("links");
Object.assign(linksContainer.style, {
    display: "block",
    margin: "27px auto",
    maxWidth: "400px",
    width: "auto"
});

fetch("config/links.json")
    .then(response => response.json())
    .then(config => {
        config.forEach(link => {
            const object = document.createElement("a");
            Object.assign(object, {
                href: link.url,
                innerHTML: `<i class="${link.icon}"></i> ${link.text}`,
                target: "_blank"
            });

            Object.assign(object.style, {
                backgroundColor: "var(--button)",
                borderRadius: "30px",
                color: "var(--accent)",
                display: "block",
                fontSize: "1rem",
                marginBottom: "10px",
                marginLeft: "50px",
                marginRight: "50px",
                opacity: ".75",
                padding: "10px",
                pointerEvents: "auto",
                position: "relative",
                textAlign: "center",
                textDecoration: "none",
                transition: "all .5s cubic-bezier(.08, .59, .29, .99)"
            });

            // Hover-Effekt
            object.addEventListener("mouseenter", () => {
                object.style.backgroundColor = "var(--accent)";
                object.style.color = "var(--button)";
                object.style.opacity = "1";
                object.style.cursor = "pointer";
            });
            object.addEventListener("mouseleave", () => {
                object.style.backgroundColor = "var(--button)";
                object.style.color = "var(--accent)";
                object.style.opacity = ".75";
                object.style.cursor = "auto";
            });

            linksContainer.appendChild(object);
        });
    });
