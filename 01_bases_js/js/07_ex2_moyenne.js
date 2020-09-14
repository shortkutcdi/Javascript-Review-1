// calcul moyenne 
// si >= 15 très bien
// > 10 bien
// autre convocation des parents

function calculMoyenne(arr) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    var nbrNotes = arr.length;
    var total = 0;
    for (var i = 0; i < nbrNotes; i++) {
        total += arr[i];
    }
    return (total / nbrNotes);
}

function decision(moyenne) {
    if (isNaN(moyenne)) {
        return "veuillez renseigner un nombre pour la moyenne";
    }
    var commentaire;
    if (moyenne >= 15) {
        commentaire = "Très bien";
    } else if (moyenne >= 10) {
        commentaire = "Correct";
    } else {
        commentaire = "convocation des parents";
    }
    return moyenne + ' - ' + commentaire;
}

var moyenne = calculMoyenne([12, 2, 5, 16]);
console.log(moyenne);
console.log(decision(moyenne));


function calculMoyenneArr(arr){
//    vérifier si arr est un tableau
    if(!Array.isArray(arr)){
       return NaN; // la moyenne n'est pas calculée
    }
    var sum=0;
    var nbreNotes = arr.length;
    
    for(var i=0;i<nbreNotes;i++ ){
        sum+=arr[i];
    }
    return sum/nbreNotes;
}




function decision2(note){
    // vérifier si la note est un NaN
    if(isNaN(note)){
        return "Veuillez renseigner un nombre pour la note";   
    }
    
    var commentaire="";
    if(note > 15){
       commentaire= "très bien continuez";
    } else if(note > 10){
        commentaire= "correct";
    } else {
        commentaire= "Convocation des parents";
    }
    return note + " - " + commentaire;
}

console.log(decision2(calculMoyenneArr(10)));