const perso = {
//    nom: "Jon Snow",
    force: 15,
    arme: "épée"
};

const texte = `${perso.nom ? perso.nom: "Antho"} est mon nom.`;

const duHTML = `
   <h1>Que choisir entre var, let et const</h1>
   <h2>Trois règles</h2>
    <ol>
        <li>const par défaut ${perso.nom? perso.nom: "Fernand"}</li>
        <li>let si besoin de MAJ ${perso.force}</li>
        <li>plus jamais le var ${perso.arme}</li>
    </ol>
`;

console.log(texte);
console.log(duHTML);