const project = `LinkLoom`;

/* Translations */

const creditstranslations = {
    arabic: `تم الإنشاء باستخدام ${project}`,
    basque: `Sortu ${project}-rekin`,
    bengali: `${project} দিয়ে তৈরি`,
    bosnian: `Stvoreno s ${project}`,
    bulgarian: `Създадено с ${project}`,
    catalan: `Creat amb ${project}`,
    chinese: `使用 ${project} 创建`,
    croatian: `Stvoreno s ${project}`,
    czech: `Vytvořeno s ${project}`,
    danish: `Oprettet med ${project}`,
    dutch: `Gemaakt met ${project}`,
    english: `Created with ${project}`,
    estonian: `Loodud ${project} abil`,
    filipino: `Nilikha gamit ang ${project}`,
    finnish: `Luotu ${project} avulla`,
    french: `Créé avec ${project}`,
    galician: `Creado con ${project}`,
    german: `Mit ${project} erstellt`,
    greek: `Δημιουργήθηκε με ${project}`,
    hebrew: `נוצר עם ${project}`,
    hindi: `${project} के साथ बनाया गया`,
    hungarian: `Készült: ${project}`,
    icelandic: `Búið til með ${project}`,
    indonesian: `Dibuat dengan ${project}`,
    irish: `Cruthaithe le ${project}`,
    italian: `Creato con ${project}`,
    japanese: `${project}で作成`,
    korean: `${project}으로 만들어졌습니다`,
    latvian: `Izveidots ar ${project}`,
    lithuanian: `Sukurtas naudojant ${project}`,
    malay: `Dicipta dengan ${project}`,
    norwegian: `Opprettet med ${project}`,
    persian: `ایجاد شده با ${project}`,
    polish: `Stworzono z ${project}`,
    portuguese: `Criado com ${project}`,
    romanian: `Creat cu ${project}`,
    russian: `Создано с помощью ${project}`,
    slovak: `Vytvorené s ${project}`,
    slovenian: `Ustvarjeno z ${project}`,
    spanish: `Creado con ${project}`,
    swedish: `Skapad med ${project}`,
    tamil: `${project} பயன்படுத்தி உருவாக்கப்பட்டது`,
    telugu: `${project} తో రూపొందించారు`,
    thai: `สร้างด้วย ${project}`,
    turkish: `${project} ile oluşturuldu`,
    ukrainian: `Створено з ${project}`,
    urdu: `${project} کے ساتھ بنایا گیا`,
    vietnamese: `Tạo ra với ${project}`
};

/* CSS properties */

const style = document.createElement("style");
style.textContent = `
    #about {
        color: var(--accent);
        filter: drop-shadow(0 0 1rem black);
        font-size: 1rem;
        line-height: 1.5;
        opacity: .75;
        padding: 0% 10%;
        text-align: center;
    }

    #credits {
        display: block;
        font-family: var(--font);
        font-size: .75rem;
        padding: 15px;
        pointer-events: auto;
        position: relative;
        text-align: center;
    }
    #credits a {
        color: var(--accent);
        opacity: .25;
        pointer-events: auto;
        text-decoration: none;
        transition: all .5s cubic-bezier(.08, .59, .29, .99);
    }
    #credits a:hover {
        cursor: pointer;
        opacity: 1;
    }
    
    #name {
        color: var(--accent);
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.25;
        text-align: center;
        filter: drop-shadow(0 0 1rem black);
    }
    #picture:empty+#name {
        margin: 40px auto 20px;
    }
    #picture img {
        border-radius: 50%;
        display: block;
        height: 128px;
        margin: 40px auto 20px;
        width: 128px;
    }
`;
document.head.appendChild(style);


/* Code */

// Fetch all data from meta.json
fetch("config/meta.json").then(response => response.json()).then(config => {
    // Websites title
    document.title = config.title || `LinkLoom`;

    // Name, picture & credits
    const elements = Object.fromEntries(
    ["name", "picture", "about", "credits"].map(id => [id, document.getElementById(id)])
    );

    [
    { el: elements.name, property: "textContent", value: config.name },
    { el: elements.picture, property: "innerHTML", value: config.picture ? `<img src="${config.picture}" aria-hidden="true">` : "" },
    { el: elements.about, property: "textContent", value: config.about },
    { el: elements.credits, property: "innerHTML", value: `<a href="https://github.com/nandolawson/LinkLoom" target="_blank">${creditstranslations[config.language] || creditstranslations.english}</a>` }
    ].forEach(({ el, property, value }) => {el[property] = value;});

    // Favicon
    const favicon = document.createElement("link");
    Object.assign(favicon, {
        href: config.favicon || "",
        rel: "icon"
    });
    document.head.appendChild(favicon);
});