var texte = "Coucou \n\"Antho\"";
var autreTexte = "Bonjour, \tje m'appelle...";

texte += texte + ' ' + autreTexte;
console.log("Hello " + texte);

var nom = "Anthony";
var age = 25;
var message = "Bonjour " + nom + ", tu as " + age + " ans.";
console.log(message.length);

console.log("été".length);
console.log(nom[0], nom[1], nom[2], nom[3]);
console.log(nom[nom.length - 1]); // o

var stats = ["attaque", "défense"];
var array = [nom, age, stats];
array[0] = "Toto";
array[2][1] = "puissance";
console.log(array);
console.log(array[2][1]);
console.log(array.length);
console.log(array[2][1].length);
console.log(array.lastIndexOf(age));

