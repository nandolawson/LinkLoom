/*
LinkLoom
Copyright 2024 Nando Lawson

Licensed under the GPL, Version 3 <https://github.com/nandolawson/LinkLoom/blob/main/LICENSE>.
This file may not be copied, modified, or distributed except according to those terms.
*/

document.addEventListener("DOMContentLoaded", () => {
    const projectname = "LinkLoom"
    // Fetch all data from meta.json
    fetch('config/meta.json')
        .then(response => response.json())
        .then(config => {
            // Name
            document.getElementById("name")
                .textContent = config.name;

            // Picture
            document.getElementById("picture")
                .innerHTML = config.picture ? `<img src="${config.picture}">` : '';

            // Websites title
            document.title = config.title || `${projectname}`;

            // Credits
            const creditstranslations = {
                arabic: `تم الإنشاء باستخدام ${projectname}`,
                basque: `Sortu ${projectname}-rekin`,
                bengali: `${projectname} দিয়ে তৈরি`,
                bosnian: `Stvoreno s ${projectname}`,
                bulgarian: `Създадено с ${projectname}`,
                catalan: `Creat amb ${projectname}`,
                chinese: `使用 ${projectname} 创建`,
                croatian: `Stvoreno s ${projectname}`,
                czech: `Vytvořeno s ${projectname}`,
                danish: `Oprettet med ${projectname}`,
                dutch: `Gemaakt met ${projectname}`,
                english: `Created with ${projectname}`,
                estonian: `Loodud ${projectname} abil`,
                filipino: `Nilikha gamit ang ${projectname}`,
                finnish: `Luotu ${projectname} avulla`,
                french: `Créé avec ${projectname}`,
                galician: `Creado con ${projectname}`,
                german: `Mit ${projectname} erstellt`,
                greek: `Δημιουργήθηκε με ${projectname}`,
                hebrew: `נוצר עם ${projectname}`,
                hindi: `${projectname} के साथ बनाया गया`,
                hungarian: `Készült: ${projectname}`,
                icelandic: `Búið til með ${projectname}`,
                indonesian: `Dibuat dengan ${projectname}`,
                irish: `Cruthaithe le ${projectname}`,
                italian: `Creato con ${projectname}`,
                japanese: `${projectname}で作成`,
                korean: `${projectname}으로 만들어졌습니다`,
                latvian: `Izveidots ar ${projectname}`,
                lithuanian: `Sukurtas naudojant ${projectname}`,
                malay: `Dicipta dengan ${projectname}`,
                norwegian: `Opprettet med ${projectname}`,
                persian: `ایجاد شده با ${projectname}`,
                polish: `Stworzono z ${projectname}`,
                portuguese: `Criado com ${projectname}`,
                romanian: `Creat cu ${projectname}`,
                russian: `Создано с помощью ${projectname}`,
                slovak: `Vytvorené s ${projectname}`,
                slovenian: `Ustvarjeno z ${projectname}`,
                spanish: `Creado con ${projectname}`,
                swedish: `Skapad med ${projectname}`,
                tamil: `${projectname} பயன்படுத்தி உருவாக்கப்பட்டது`,
                telugu: `${projectname} తో రూపొందించారు`,
                thai: `สร้างด้วย ${projectname}`,
                turkish: `${projectname} ile oluşturuldu`,
                ukrainian: `Створено з ${projectname}`,
                urdu: `${projectname} کے ساتھ بنایا گیا`,
                vietnamese: `Tạo ra với ${projectname}`,
            };
            document.getElementById('credits')
                .textContent = creditstranslations[config.language] || creditstranslations.english;

            // Favicon
            const favicon = document.createElement('link');
            favicon.rel = 'icon';
            favicon.href = config.favicon || "";
            document
                .head
                .appendChild(favicon);
        });
});