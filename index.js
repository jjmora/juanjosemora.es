/* FORM POP UP MODAL BOX */

let modal = document.getElementById('modalBox');
let btn = document.getElementById('contact-link');
let btnFooter = document.getElementById('contact-link-footer');
let span = document.getElementById('close');

btn.onclick = function(){
    modal.style.display = "flex";
}

btnFooter.onclick = function(){
    modal.style.display = "flex";
}

span.onclick = function(){
    modal.style.display = "none";
}

/* MESSAGE POP UP MODAL BOX */
aboutMeBtn = document.getElementById('contact-link-about');
aboutMeBtn.onclick = function(){
    let el = document.getElementById('modal-box-gallery-id');
    el.classList.toggle('hidden-el');
}

portfolioBtn = document.getElementById('contact-link-portfolio');
portfolioBtn.onclick = function(){
    let el = document.getElementById('modal-box-gallery-id');
    el.classList.toggle('hidden-el');
}

closeMainModal = document.getElementById('main-modal-box-close');
closeMainModal.onclick = function(){
    let el = document.getElementById('modal-box-gallery-id');
    el.classList.toggle('hidden-el');
}

/* LANGUAGE CONFIG */

let language;
// window.onload = function (){
//     language = document.getElementById("language").textContent;
//     profTitle = document.getElementById("prof-title").textContent;
//     console.log("language: " + language);
//     console.log("prof title: " + profTitle);
//     if(language == "EN"){
//         profTitle = "Web developer";
//     } else if (language == "ES"){
//         profTitle = "Desarrollo Web";
//         console.log("español");
//     } else if (language === "FR"){
//         profTitle = "Développeur -Web";
//         console.log("español");
//     }
// }

window.onload = function(){
    language = document.getElementById("language").textContent;
    
    if(language == "EN"){
        document.getElementById("prof-title").textContent = "Web developer";
        document.getElementById("main-title-hide").textContent = "Hello I'm Juanjo";
        document.getElementById("sub-title").textContent = "Welcome to my website";
        document.getElementById("contact-link-about").textContent = "About me";
        document.getElementById("contact-link-portfolio").textContent = "My Portfolio";
        document.getElementById("contact-link").textContent = "Contact";
        document.getElementById("skills-title").textContent = "SKILLS";
        // document.getElementById("home-link").textContent = "Home";
        document.getElementById("gallery-link").textContent = "Gallery";
        document.getElementById("contact-link-footer").textContent = "Contact";
        
        
    } else if (language == "ES"){
        document.getElementById("prof-title").textContent = "Desarrollo Web";
        document.getElementById("main-title-hide").textContent = "Hola soy Juanjo";
        document.getElementById("sub-title").textContent = "Bienvenido a mi web";
        document.getElementById("contact-link-about").textContent = "Sobre mi";
        document.getElementById("contact-link-portfolio").textContent = "Mi Portafolio";
        document.getElementById("contact-link").textContent = "Contacto";
        document.getElementById("skills-title").textContent = "COMPETENCIAS";
        // document.getElementById("home-link").textContent = "Inicio";
        document.getElementById("gallery-link").textContent = "Galería";
        document.getElementById("contact-link-footer").textContent = "Contacto";

    } else if (language === "FR"){
        document.getElementById("prof-title").textContent = "Développeur Web";
        document.getElementById("main-title-hide").textContent = "Salut c'est Juanjo";
        document.getElementById("sub-title").textContent = "Bienvenu(e) à mon site";
        document.getElementById("contact-link-about").textContent = "Moi";
        document.getElementById("contact-link-portfolio").textContent = "Mon Portfolio";
        document.getElementById("contact-link").textContent = "Contact";
        document.getElementById("skills-title").textContent = "COMPETENCES";
        // document.getElementById("home-link").textContent = "Accueil";
        document.getElementById("gallery-link").textContent = "Galerie";
        document.getElementById("contact-link-footer").textContent = "Contact";
    }

    //type writer effect
    var text;

    hideText = document.getElementById("main-title-hide");
    text = document.getElementById("main-title");
    let str = hideText.textContent;

    let speed = 200;
    let i = 0;

    function typeWriter(){
        if(i< str.length){
            text.innerHTML += str.charAt(i);
            i++;
            setTimeout(typeWriter,speed);
        } else {
            document.getElementById('sub-title').style.color = "black";
        }
    }
    setTimeout(typeWriter(),speed)
}




