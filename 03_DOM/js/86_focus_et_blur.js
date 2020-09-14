const input = document.querySelector('input');

input.addEventListener("focus", function() {
    input.style.backgroundColor = "#c0ffee";
});
input.addEventListener("blur", function() {
    input.style.backgroundColor = "#fff";
});

