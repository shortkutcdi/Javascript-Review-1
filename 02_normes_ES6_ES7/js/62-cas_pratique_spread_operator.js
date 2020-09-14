const listeAmis = ["cyril", "gael", "banjo", "kawa", "ekait"];
const listeFamille = ["jean-claude", "anne-sophie", "charles"];

const liste = [...listeAmis, "jo"];

liste.push(...listeFamille);

console.log(liste);

// destructuration
const [ami1, ami2, ...chiens] = listeAmis;

console.log(ami1); // cyril
console.log(ami2); // gael
console.log(chiens); //  ["banjo", "kawa", "ekait"]

