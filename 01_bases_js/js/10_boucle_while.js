var i = 0;
var triangle = [];

while (i < 10) {
    i++;
    triangle.push("#");
    console.log(triangle);
}

for (var j = 0; j < 10; j++) {
    console.log(j);
}

for (var k = 10; k > 0; k -= 2) {
    console.log(k);
}

// compter la somme des éléments d'un tableau
var arr = [20, 5, 15, 7];
var total = 0;
var tailleArr = arr.length;
for (var i = 0; i < tailleArr; i++) {
    total += arr[i];
}
console.log(total);

function moyenne(arr) {
    if (!Array.isArray(arr)) {
        return "Veuillez renseigner un tableau de chiffes";
    }
    var total = 0;
    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i++) {
        total += arr[i];
    }
    return total / arrLength;
}

console.log(moyenne([16, 13, 16, 14]));
