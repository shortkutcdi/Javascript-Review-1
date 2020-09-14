function estTuFort (force) {
    if (force >= 15) {
        return "Tu est très fort";
    } else if (force >= 10) {
        return "Tu es fort";
    } else if (force >= 5) {
        return "Tu es faible";
    } else {
        return "Tu manque d'énergie";
    }
}

console.log(estTuFort(10));
console.log(estTuFort(16));
console.log(estTuFort(2));