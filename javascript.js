var boxOG = document.getElementById("boxOG");

// Button 1 Details //

document.getElementById("button1").addEventListener("click", function () {
  boxOG.style.width = "350px";
  boxOG.style.height = "350px";
});

// Button 2 Details //

document.getElementById("button2").addEventListener("click", function () {
  boxOG.style.background = "blue";
});

// Button 3 Details //

document.getElementById("button3").addEventListener("click", function () {
  boxOG.style.opacity= .65;
});

// Button 4 Details // 
function resetCSS (){
    boxOG.style.width= '150px';
    boxOG.style.height= "150px";
    boxOG.style.background= "orange";
    boxOG.style.margin= '25px';
    boxOG.style.opacity= '1'
}
document.getElementById("button4").addEventListener("click", resetCSS)