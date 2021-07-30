const gameColour = document.querySelectorAll(".gameProps")
let whiteColour = "white"
let blackColour = "black"

const gameHeaders = document.querySelectorAll(".gameHeader")
const gameButtons = document.querySelectorAll(".gameButton")

gameColour.forEach(element => {
    element.style.backgroundColor = blackColour;
});

gameHeaders.forEach(element=>{
    element.style.fontSize = "1.2em";
    element.style.color = "cornflowerblue";
    element.style.marginBottom = "5px";3
});

gameButtons.forEach(element =>{
    element.style.border = "1px solid blue";
    element.style.borderRadius = "10px";
    element.style.color = "white";
    element.style.textDecoration = "none";
    element.textAlign = "center";
    element.style.width = "4em";
    element.style.fontSize = "1.1em";
    element.style.letterSpacing = "1.5px";
    element.style.backgroundColor = "#242943";

});