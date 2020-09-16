const titres = document.querySelectorAll("h1");

function goToTitre (titre) {
    const distance = titre.offsetTop;
    console.log(titre.offsetTop);
    window.scrollTo(0, distance);
}

//exécuter cette fonction dans la console
goToTitre(titres[8]);

