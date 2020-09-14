const perso = {
    nom: "Jon Snow",
    force: 15,
    arme: "épée"
};

const texte = perso.nom + " a une force de " +
              perso.force +
              " et une " + perso.arme + ".";
// altgr 96 
const texteAvecTemplateString = `${perso.nom} a une force de ${perso.force} et une ${perso.arme}`;

console.log(texte);
console.log(texteAvecTemplateString);