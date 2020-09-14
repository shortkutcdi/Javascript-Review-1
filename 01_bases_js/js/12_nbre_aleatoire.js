// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
var random = 0;

function getRandom() {
    return Math.floor(Math.random() * 6 + 1);
}

console.log(getRandom());

// générer un nombre aléatoire compris entre un minimum et un maximum
function ranRandom(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}
//for (i = 0; i < 50; i++) {
//    console.log(ranRandom(5, 10));
//}

function randomize(arr) {
    var arrLength = arr.length;
    var rand = Math.floor(Math.random() * arrLength);
    return arr[rand];
}

for (var i = 0; i < 20; i++) {
    console.log(randomize([1,2,3,4,5]));
}
