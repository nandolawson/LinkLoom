/*
LinkLoom
Copyright 2024 Nando Lawson

Licensed under the GPL, Version 3 <https://github.com/nandolawson/LinkLoom/blob/main/LICENSE>.
This file may not be copied, modified, or distributed except according to those terms.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Fetch all links from links.json
    fetch('config/links.json')
        .then(response => response.json())
        .then(config => {
            config.forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.target = '_blank';
                a.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
                document.getElementById('links').appendChild(a);
            });
        });
});