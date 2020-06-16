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





//ALPINE.JS

function main(){
    return{
        portfopen: false,
        aboutopen: false,
        giuropen: false,
        tastyopen: false,
        notasopen: false,
        sudoku4x4open: false,
        puzzlespdfopen: false,
        artgalopen: false,
    
        about: "About me",
        portfolio: "Portfolio",
        mainTitle: "Hello I'm Juanjo",
        mainSubTitle: "Welcome to my website",
        webDev: "Web developer",
        skills: "SKILLS",
        gallery: "Gallery",
        contact: "Contact",
        visit: "Visit",
        spanish: function(){
            this.about = "Sobre mí";
            this.portfolio = "Portafolio";
            this.mainTitle = "Hola soy Juanjo";
            this.mainSubTitle = "Bienvenido a mi web";
            this.webDev = "Desarrollo Web";
            this.skills = "COMPETENCIAS";
            this.gallery = "Galería";
            this.contact = "Contacto";
            this.visit = "Visitar";
        },
        french: function(){
            this.about = "Moi";
            this.portfolio = "Portfolio";
            this.mainTitle = "Salut, c'est Juanjo";
            this.mainSubTitle = "Bienvenue à mon site";
            this.webDev = "Développeur Web";
            this.skills = "COMPETENCES";
            this.gallery = "Gallerie";
            this.contact = "Contact";
            this.visit = "Visiter";
        },
        english: function(){
            this.about = "About me";
            this.portfolio = "Portfolio";
            this.mainTitle = "Hello I'm Juanjo";
            this.mainSubTitle = "Welcome to my website";
            this.webDev = "Web developer";
            this.skills = "SKILLS";
            this.gallery = "Gallery";
            this.contact = "Contact";
            this.visit = "Visit";

        }
    }
}


