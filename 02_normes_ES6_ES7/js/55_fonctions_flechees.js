const arr = [1, 2, 3, 4, 5];

//const arrPlusUn =  arr.map(function (nombre) {
//    return `${nombre} + 1 = ${nombre + 1}`;
//});

const arrFlechee =  arr.map((nombre) => {
    return `${nombre} + 1 = ${nombre + 1}`;
});


const arrflechhee2 = arr.map( nombre =>{
    return `${nombre} + 1 = ${nombre + 1}`;
});

const arrflechhee3 = arr.map(nombre => `${nombre} + 1 = ${nombre + 1}`);

const arrFlech = arr.map(() => `5`);

const maFonction = (un, deux) => console.log(`coucou ${un} et ${deux}`);
//maFonction();
maFonction(12, 6);
console.log(arrflechhee3);
