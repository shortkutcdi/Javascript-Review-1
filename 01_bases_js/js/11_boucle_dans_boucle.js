function plusUn(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            arr[i][j]++;
        }
    }
    return arr;
}

console.log(plusUn([[1, 2], [3, 4], [5, 6]]));

function plusUN_(arr) {
    if (!Array.isArray(arr)) {
        return "veuillez renseigner un tableau";
    }
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            arr[i][j]++;
        }
    }
    return arr;
}

var arr = plusUN_([[1,1],[2,2],[3,3]]); // [2, 2], [3, 3],[4, 4]
