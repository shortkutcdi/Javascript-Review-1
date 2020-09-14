// soustraction de deux arguments
function soustraction (a, b) {
    return a - b;
}

var resultat = soustraction(1,4)
console.log(resultat);

// Calculer une moyenne

var note1 = 17;
var note2 = 14;
var moyenne = calculMoyenne(note1,note2);

// calcul de la myenne de deux nombres
function calculMoyenne (arg1, arg2) {
    return (arg1 + arg2)/2;
}
console.log("la moyenne de " + note1 +" et " +note2 + " est " + moyenne);

function calculMoyenneTab(arg){
    var sum=0;
    var long = arg.length;
    for(var i=0;i<long;i++){
        sum += arg[i];
    }
    return sum/long;
}

calculMoyenneTab([10,15,13,15,20]);