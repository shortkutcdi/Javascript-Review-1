function plusUn(...args) {
    console.log(args);
    const arr = [...args];
    return arr.map(num => num + 1);
}

// rest opérator dans les fonctions
console.log(plusUn(1, 2, 3, 4, 5, 6, 45, 55));
