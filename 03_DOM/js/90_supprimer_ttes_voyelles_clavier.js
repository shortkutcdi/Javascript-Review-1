const textarea = document.querySelector('textarea');

const txt = [];
const voyelles = ["a", "e", "i", "o", "u", "y"];

textarea.addEventListener("keypress", function (event) {
    const key = event.key;
    // La méthode includes() permet de déterminer si un tableau contient un élément 
    // et renvoie true si c'est le cas, false sinon.
    if (!voyelles.includes(key)) {
        txt.push(key);
    }
    // La méthode join() réunit tous les éléments d'un tableau dans une chaine de caractères.
    console.log(txt.join(""));
});





// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join
var a = new Array("Vent","Pluie","Feu");
a.join();      // "Vent,Pluie,Feu"
a.join(", ");  // "Vent, Pluie, Feu"
a.join(" + "); // "Vent + Pluie + Feu"
a.join("");    // "VentPluieFeu"