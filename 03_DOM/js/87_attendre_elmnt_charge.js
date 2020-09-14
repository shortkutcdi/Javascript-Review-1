// load sur un élément complètement chargé
// ou sur l'ensemble de la page

const images = document.querySelectorAll("img");
// transformer un nodeList en Array pour utiliser les méthodes des arrays
// par exemple la méthode map pour les arrays
const imagesArray = Array.from(images);
// le deuxième paramètre de map est le n° d'index
imagesArray.map((image, index ) => image.addEventListener('load', 
              function(){
                    console.log(`Image n° ${index + 1} OK`)
}));