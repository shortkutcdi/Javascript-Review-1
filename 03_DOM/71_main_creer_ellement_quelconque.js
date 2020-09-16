const titre = document.getElementById("titre");
const texte = document.body.getElementsByTagName("p");

function ajouterTexte (pseudo, monTexte) {
    const nouveauTexte = document.createElement("p");
    nouveauTexte.innerHTML = `<strong>${pseudo}</strong> : ${monTexte}`;
    // placer l'élément créé à la fin du body
    document.body.appendChild(nouveauTexte);
}

ajouterTexte("Antho", "hgig oih baal");
ajouterTexte("Antho", "jioc ijzae pçuirdg");
ajouterTexte("Peter", "ljknf121 klj ljoiojoj");
ajouterTexte("Georges", "hiuh hiih ld,nf iio");
