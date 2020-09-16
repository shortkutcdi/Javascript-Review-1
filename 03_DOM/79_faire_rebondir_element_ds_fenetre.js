const titre = document.querySelector("h1");
const cadre = document.querySelector("div");

// offsetHeight retoune la hauteur avec bd 
const maxHeight = cadre.clientHeight; // taille interne sans les bordures
const maxWidth = cadre.clientWidth;
console.log(maxHeight, maxWidth);

// définr une propriété css - relative à son parent
titre.style.position = 'relative';
let topPos = 0;
let leftPos = 0;
let forceH = -2;
let forceW = -2;

// il faut faire changer de direction dès que on touche un des bords
function animation() {
    if (topPos == 0) {
        forceH *= -1;
    } else if (topPos == maxHeight - titre.offsetHeight) {
        forceH *= -1
    }
    
    if (leftPos == 0) { forceW *=-1 }
    else if (leftPos == maxWidth - titre.offsetWidth) { forceW *=-1 }
    
    leftPos += forceW;          
    topPos += forceH;

    titre.style.left = leftPos + "px";
    titre.style.top = topPos + "px";
    requestAnimationFrame(animation);
}

requestAnimationFrame(animation);
