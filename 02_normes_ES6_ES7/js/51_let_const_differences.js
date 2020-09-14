let arme = "épée";
const nom = "Jon Snow";
//nom = "Bousin"; // génère une erreur; une constante ne peut être modifiée

const perso = {
    nom: "Jon Snow",
    force: 15,
    arme: "épée"
};

//perso = {
//    nom: "Peter",
//    force: 15,
//    arme: "épée"
//};
perso.nom = "Peter";
//l'objet n'est pas modifiable dans sa globalité
// mais ses propriétés sont mutables
perso.prenom = "Bob";
console.log(perso);
delete perso.nom;
console.log(perso);

//let arme = "lance"; // génère une erreur ne peut déclarer qu'une seule fois

if (arme == "épée") {
    const force = 15;
    let arme = "lance"; // vu que le scope est différent 
    //on peut déclarer arme une autre fois sans avoir de confusion car scope différent
    console.log(arme); // lance
}

console.log(arme); // épée