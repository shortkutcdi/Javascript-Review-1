var arr = [1, 2, 3];

// PUSH ajout à la fin du tableau
var newArrLength = arr.push("Salut mec");
console.log(arr, newArrLength); // [1, 2, 3, "Salut mec"]  4

// POP supprime le dernier élément d'un tableau
var remLastElmtArr = arr.pop();
console.log(arr, remLastElmtArr); //  [1, 2, 3]  "Salut mec"

// UNSHIFT Ajoute au debut du tableau
newArrLength = arr.unshift(-2, -1, 0);
console.log(arr, newArrLength); // [-2, -1, 0, 1, 2, 3]  6

// SHIFT supprime le premier élément d'un tableau
var remFirstElmtArr = arr.shift();
console.log(arr, remFirstElmtArr); // [-1, 0, 1, 2, 3]  -2


var arr1 = ['a', 'b', 'c'];
var arr2 = ['d', 'e', 'f'];

arr1 = arr1.concat(arr2);
console.log(arr1); //  ["a", "b", "c", "d", "e", "f"]
