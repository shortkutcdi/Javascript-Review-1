const lien = document.querySelector('a');


function clic() {
    console.log("clic");
    lien.removeEventListener("click", clic);
}

lien.addEventListener("click", clic);

// surveiller la page entière
addEventListener("keypress", function(event){
    // affiche un objet "KeyboardEvent" avec diff props comme key
    console.log(event);
    
    console.log(event.key);
});
