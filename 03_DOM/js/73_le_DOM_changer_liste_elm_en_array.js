const titre = document.getElementById("titre");
const texte = document.body.getElementsByTagName("p");

// tranformation de l'objet HTMLCollection en Array
const texteArray = Array.from(texte);


console.log(texte); // [p, p] dans proto on a pas de map
                    // ce n'est pas un array mais un HTMLCollection(plus pauvre en méthodes)
// la fonction map est intéressante pour les array
// comment transformer une collection en array
// Array.from(collection)

texteArray.map(paragraphe => paragraphe.innerHTML += ` Hahhhaaha je t'ai hacké`);
console.log(texteArray);