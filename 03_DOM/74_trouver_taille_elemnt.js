const titre = document.getElementById("titre");

const texte = document.body.getElementsByTagName("p");

const lien = document.body.getElementsByTagName("a")[0];

// retourne la taille avec border, m et p
console.log(titre.offsetHeight, titre.offsetWidth);
// retourne taille élmt sans bd, m et p
console.log(titre.clientHeight, titre.clientWidth);