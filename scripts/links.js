fetch("config/links.json").then(response => response.json()).then(config => {
        config.forEach(link => {
        const object = document.createElement("a");
        Object.assign(object, {
            href: link.url,
            innerHTML: `<i class="${link.icon}"></i> ${link.text}`,
            target: "_blank"
        });

        // Add link to the document
        document.getElementById("links").appendChild(object);
    });
});