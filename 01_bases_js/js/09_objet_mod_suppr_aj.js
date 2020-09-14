var chevalier = {
    "force": 15,
    "vitesse": 5,
    "faiblesse": ["mage", "ninja"],
    // objet ds un objet
    "compagnon": {
        "animal": "chien",
        "aide": "écuyer"
    }
};

//mise à jour d'un paramètre
 chevalier.force = 20;

console.log(chevalier.force);

// ajouter un paramètre
chevalier.arme = "épée";
// vérifier si objet a une propriété
console.log(chevalier.hasOwnProperty("arme"));

console.log(chevalier);

delete chevalier.arme;
console.log(chevalier);

// vérifier si objet a une propriété
console.log(!chevalier.hasOwnProperty("arme"));
if(!chevalier.hasOwnProperty("arme")){
    console.log("le chevalier n'est pas armé");
}

console.log(chevalier.compagnon.aide);

var recettes = {
    "recette1": {
        "ingrédients": [],
        "nom": "ma première recette",
        "cuisson": 15
    },
    "recette2": {
        "ingrédients": [],
        "nom": "ma deuxième recette",
        "cuisson": 20
    }
};

console.log(recettes.recette1);

var recettes2 = {
    "recette1": {
        "ingredients": [],
        "nom": "ma première recette",
        "cuisson": 15
    },
    "recette2": {
        "ingredients": [],
        "nom": "ma deuxième recette",
        "cuisson": 20
    }
}