const formulaire = document.querySelector('form');
const button = document.querySelector('button');

// REMARQUE : au submit la page est rechargée
// on ne voit pas l'affichage du console.log("ok")
// pour éviter le chargement => e.preventDefault() se prévenir de l'utilisation par défaut
// il faudrait que le formulaire se vide -- avec reset()
formulaire.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("ok");
    formulaire.reset();
});