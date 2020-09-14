//console.log(arme);
//var arme = "épée";
//var arme = "lance";
//console.log(arme);

// on peut déclarer la même variable plusieurs fois (trop permissif)
// si on veut afficher une variable qui est déclarée par la suite
// => renvoie undefined 


// Block VS Function scope
// var a un scope de fonction

// ES6
// let et const à un scope de bloc

var arme = "épée";

if (arme == "épée") {
    let force = 15;
}


// let comme const a un scope de bloc
// or force est définit dans un bloc if donc n'est pas accessible à l'extérieur
// let est plus contraignant mais moins enclin aux erreurs
//console.log(force);

//function choixArme () {
//    var arme = "épée";
////    console.log(arme);
//}
//
//choixArme();

var arme = "épée";
console.log(arme);