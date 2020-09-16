const titre = document.getElementById("titre");
const texte = document.body.getElementsByTagName("p");


const lien = document.body.getElementsByTagName("a")[0];

lien.setAttribute("href","http://www.google.fr");

console.log(lien.getAttribute("href")); // http://www.google.fr
