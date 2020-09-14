/**/
function soustraction(a, b) {
    console.log(a - b);
}

//soustraction(8, 9);
//soustraction(3, 10);


//  Scope    
var varLocale = 5;
var varGlobale = 10;

function uneMethode() {
    // la variable varLocale est différente de celle ligne 11
    // ce qui est accessible dans ce bloc ne l'est pas ds son parent mais ds ses enfants
    var varLocale = 7;
    varGlobale += 5;
    console.log(varLocale);
    // test() est le bloc enfant de la fonction uneMethode()
    function test() {
        varLocale += 3;
        var testVar = "test";
        console.log(varLocale, testVar);
    }
    test();
}

uneMethode(); // 5
console.log("La valeur de varLocale est "+varLocale);
console.log("La valeur de la varGlobale est " + varGlobale);
