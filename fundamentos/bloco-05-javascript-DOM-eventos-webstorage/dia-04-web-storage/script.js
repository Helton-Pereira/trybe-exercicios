window.onload = function() {

const button = document.getElementById('botao')

function changeBackGroundColor(color) {
    document.body.style.background = color;
    localStorage.setItem("backgroundColor", color)
}


function buttonColor() {
    changeBackGroundColor('yellow')
}


button.addEventListener("click", buttonColor);

}