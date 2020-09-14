const titre = document.querySelector('h1');
let i = 3;

/*const compte = setInterval(function(){
    console.log(i);
    i++;
},1000);*/

titre.addEventListener("click", function(){
    const compte = setInterval(function(){
        if (i > 0) {
            titre.textContent = i;
            i--;
        } else  {
            titre.textContent = "Partez !!!";
            clearInterval(compte); // permet d'arrêter setInterval
        }
        console.log(i);
    },1000);
});

