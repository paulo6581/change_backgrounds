function background(buttonbg) {
    const show = document.getElementById("show");
    show.classList.toggle("hide");
    let contentColors = document.getElementById("content-colors");
    if(buttonbg.innerHTML === "Background") {
        buttonbg.innerHTML = "Fechar";        
    }
    else {
        buttonbg.innerHTML = "Background";
    }
}
let body = document.getElementById("body");
body.classList.add("background-image");
function image() {
    body.classList.add("hide-image");
}
function preto() { 
    removeColor();
    image();
    body.classList.toggle("preto");
}
function rosa() {
    removeColor();
    image();
    body.classList.toggle("rosa");
}
function verde() {
    removeColor();
    image();
    body.classList.toggle("verde");
}
function removeColor() {
    body.classList.remove("preto");
    body.classList.remove("rosa");
    body.classList.remove("verde");
    body.classList.remove("hide-image");

}
