var prenom = "Fernand";
var nom = "Martinez";
// tableau retournant le nom, prénom, initiales
var resultat = [];

var initial = prenom[0];
initial += '.' +nom[0] + '.';
console.log(initial);

resultat.push(nom,prenom,initial);
console.log(resultat);
