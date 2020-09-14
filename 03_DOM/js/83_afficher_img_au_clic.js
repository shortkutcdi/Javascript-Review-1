addEventListener("click", function (event) {
    const image = document.createElement("img");
    const size = 150;
    image.setAttribute("src", `http://lorempixel.com/${size}/${size}/`);

    // positionner l'image
    image.style.position = "absolute";
    image.style.left = event.x - size / 2 + "px";
    image.style.top = event.y - size / 2 + "px";

    document.body.appendChild(image);


    // affiche un objet MouseEvent avec props
    console.log(event);
    // avec prop clientX, clientY (position du clic)
    console.log(event.clientX, event.clientY);
    console.log(event.x, event.y);
});
// récurer un event au clic sur la page
/*addEventListener("click", function(event){
    // affiche un objet MouseEvent avec props
    console.log(event);
    // avec prop clientX, clientY (position du clic)
    console.log(event.clientX, event.clientY);
    console.log(event.x, event.y);
});*/

// http://lorempixel.com/100/100/
