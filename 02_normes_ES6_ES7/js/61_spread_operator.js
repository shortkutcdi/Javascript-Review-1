const listeAmis = ["cyril", "gael", "floriant"];
const listeFamille = ["jean-claude", "anne-sophie", "charles"];

const liste = [...listeAmis, "banjo",...listeFamille];

// quand un tableau égal autre, 
// le changement ds l'un entraine changements ds l'autre
// const copieListe = liste; 

// pour éviter la copie (clone), prendre le contenu de liste (...liste)
const copieListe = [...liste];

copieListe.push("kawa"); // n'affecte que copieListe (et pas liste)

console.log(...listeAmis, ...listeFamille);
console.log(...liste);


console.log(copieListe);
console.log(liste);