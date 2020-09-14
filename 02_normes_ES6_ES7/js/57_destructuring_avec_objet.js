const  joueur = {
    nom: "Jon",
    type: "Chevalier",
    arme: "Épée"
};

//const nom = joueur.nom;
// fait le lien des variable avec l'objet
const {nom, type: genre, arme = "Lance", autrevar = "toto"} = joueur;

console.log(joueur);
//console.log(nom, type, arme);
console.log(nom, genre, arme, autrevar);