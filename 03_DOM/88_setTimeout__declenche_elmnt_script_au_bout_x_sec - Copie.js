const titre = document.querySelector('h1');

const texte = setTimeout(function(){
    titre.textContent = "Le Javascript s'apprend avec patience";
    titre.style.opacity = 1;
    document.body.style.background = "#FB1";
    
}, 2000);