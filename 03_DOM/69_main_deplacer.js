const titre = document.getElementById("titre");
const texte = document.body.getElementsByTagName("p");

console.log(texte[1]); // représente ici le p avec lien

//déplacer un élément ex texte[1] avant le titre
document.body.insertBefore(texte[1], titre);
console.log(texte[1]); // représente le p sans lien

//déplacer un élément à la fin de body ici titre
document.body.appendChild(titre);

// supprimer un élément ici le titre
document.body.removeChild(titre);

console.log(document.body);