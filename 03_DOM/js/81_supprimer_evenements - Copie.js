// écouter un évenement une seule fois 
// => supprimer évênement

const lien = document.querySelector('a');

//lien.addEventListener("click", function(){
//    console.log("clic");
//});

function clic() {
    console.log("clic");
    lien.removeEventListener("click", clic);
}

lien.addEventListener("click", clic);
