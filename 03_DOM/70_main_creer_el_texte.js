const titre = document.getElementById("titre");
const texte = document.body.getElementsByTagName("p");


const nouveauTexte = document.createTextNode("Hello c'est moi !");

//placer le nouveTexte à la fin de body
document.body.appendChild(nouveauTexte);

// remplacer un élément par un autre
// nouveautexte remplace texte[1]
document.body.replaceChild(nouveauTexte, texte[1]);

console.log(nouveauTexte);