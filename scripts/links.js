/*
LinkLoom
Copyright 2024 Nando Lawson

Licensed under the GPL, Version 3 <https://github.com/nandolawson/LinkLoom/blob/main/LICENSE>.
This file may not be copied, modified, or distributed except according to those terms.
*/

// Fetch all links from links.json
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