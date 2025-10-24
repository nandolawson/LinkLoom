const links = document.getElementById("links");
Object.assign(links.style, {
    display: "block",
    margin: "27px auto",
    maxWidth: "400px",
    width: "auto"
});

fetch("config/links.json")
    .then(response => response.json())
    .then(config => {
        config.forEach(link => {
            const linkItem = document.createElement("linkItem");
            linkItem.href = link.url;
            linkItem.target = "_blank";
            linkItem.innerHTML = `<i class="${link.icon}" aria-hidden="true"></i> ${link.text}`;

            Object.assign(linkItem.style, {
                backgroundColor: "var(--button)",
                borderRadius: "30px",
                color: "var(--accent)",
                cursor: "pointer",
                display: "block",
                fontSize: "1rem",
                margin: "0 50px 10px",
                opacity: "0.75",
                padding: "10px",
                pointerEvents: "auto",
                position: "relative",
                textAlign: "center",
                textDecoration: "none",
                transition: "all .5s cubic-bezier(.08, .59, .29, .99)"
            });

            linkItem.addEventListener("mouseenter", () => {
                linkItem.style.backgroundColor = "var(--accent)";
                linkItem.style.color = "var(--button)";
                linkItem.style.opacity = "1";
            });
            linkItem.addEventListener("mouseleave", () => {
                linkItem.style.backgroundColor = "var(--button)";
                linkItem.style.color = "var(--accent)";
                linkItem.style.opacity = ".75";
            });

            links.appendChild(linkItem);
        });
    });
