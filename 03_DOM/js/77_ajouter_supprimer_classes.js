const titre = document.querySelector("h1");

const liens = document.querySelectorAll("a");

liens[0].addEventListener("click", function(){
//    console.log(titre.classList);
    console.log(titre.classList.add("fbi"));
});

liens[1].addEventListener("click", function(){
    console.log(titre.classList.remove("fbi"));
});

liens[2].addEventListener("click", function(){
    console.log(titre.classList.toggle("fbi"));
});