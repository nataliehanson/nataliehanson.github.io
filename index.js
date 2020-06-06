//Reduces opacity on self-destruct until message is gone. 
//Natalie Hanson June 5 2020 
var myVar = setInterval(colorInit, 500);
var fade = 1;

function colorInit() {
    var destruct = document.getElementById("flashy-text");
    fade = fade - 0.05;
    destruct.style.opacity = fade;

    if (fade == 0){
      clearInterval(myVar);
    }
    }


colorInit();