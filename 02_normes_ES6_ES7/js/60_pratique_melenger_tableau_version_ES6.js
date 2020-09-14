function randomize(arr) {

    for (var i = 0; i < arr.length; i++) {
        // on utilise const car cette variable va garder sa valeur
        // dans ce bloc un fois définie
       const random = Math.floor(Math.random() * arr.length);
        // inversion des valeus du tableau
        [arr[i], arr[random]] = [arr[random], arr[i]];
//        temp = arr[i];
//        arr[i] = arr[random];
//        arr[random] = temp;
    }
    return arr;
}

console.log(randomize([1, 2, 3, 4, 5]));

/*
function randomize(arr) {
    let temp = 0;
    let random = 0;

    for (var i = 0; i < arr.length; i++) {
        random = Math.floor(Math.random() * arr.length);
        temp = arr[i];
        arr[i] = arr[random];
        arr[random] = temp;
    }
    return arr;
}
*/