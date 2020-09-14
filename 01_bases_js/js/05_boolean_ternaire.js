var age = 18;
var majeur = 18;

console.log(age >= majeur ? "Ok entre !" : "Sors de là !");

console.log(age == "18"); // test de la valeur seulement

console.log(age === "18"); // test de la valeur et type
console.log(age !== "18"); // test de la valeur et type

function testMajeur(age){
return (age >= 18)? "Ok entre!" : "Sors de là";
}

testMajeur(10);
testMajeur(18);