var chevalier = {
    "force": 15,
    "vitesse": 5,
    "faiblesse": ["mage", "ninja"]
};


console.log("chevalier - ", chevalier);
console.log("chevalier.force - ", chevalier.force);
console.log("chevalier[\"vitesse\"] - ",chevalier["vitesse"]);
console.log(chevalier.faiblesse[0]);

var requete = "force";
console.log(chevalier[requete]);

// modifier, ajouter, supprimer des paramètres
