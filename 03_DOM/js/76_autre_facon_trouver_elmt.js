const titre = document.querySelector("h1");
// retourne le premier element
const para = document.querySelector(".para");
// retourne tous les éléments de type nodeListe
const paras = document.querySelectorAll(".para");

// remarque les nodeliste ont mions de méthodes que les array
// tranformer en Array
const parasArrayFrom = Array.from(paras);

console.log(titre);
console.log(para);
console.log(paras); // type nodeliste
console.log(parasArrayFrom); // type array
