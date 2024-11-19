/*
LinkLoom
Copyright 2024 Nando Lawson

Licensed under the GPL, Version 3 <https://github.com/nandolawson/LinkLoom/blob/main/LICENSE>.
This file may not be copied, modified, or distributed except according to those terms.
*/

const project = "LinkLoom";

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

// Fetch all data from meta.json
fetch("config/meta.json").then(response => response.json()).then(config => {
    // Websites title
    document.title = config.title || `LinkLoom`;

    // Name, picture & credits
    [
        { id: "name", property: "textContent", value: config.name },
        { id: "picture", property: "innerHTML", value: config.picture ? `<img src="${config.picture}" alt="picture">` : "" },
        { id: "about", property: "textContent", value: config.about },
        { id: "credits", property: "innerHTML", value: `<a href="https://github.com/nandolawson/LinkLoom" target="_blank">${creditstranslations[config.language] || creditstranslations.english}</a>` }
    ].forEach(({ id, property, value }) => {
        document.getElementById(id)[property] = value;
    });

    // Favicon
    const favicon = document.createElement("link");
    Object.assign(favicon, {
        href: config.favicon || "",
        rel: "icon"
    });
    document.head.appendChild(favicon);
});