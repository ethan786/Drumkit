
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

function clicked() {

    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    
}

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clicked);
}

document.addEventListener("keypress",function(event){

   makeSound(event.key);

   buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var soundOfButton = new Audio("sounds/tom-1.mp3");
            soundOfButton.play();
            break;
        case "a":
            var soundOfButton = new Audio("sounds/tom-2.mp3");
            soundOfButton.play();
            break;
        case "s":
            var soundOfButton = new Audio("sounds/tom-3.mp3");
            soundOfButton.play();
            break;
        case "d":
            var soundOfButton = new Audio("sounds/tom-4.mp3");
            soundOfButton.play();
            break;
        case "j":
            var soundOfButton = new Audio("sounds/snare.mp3");
            soundOfButton.play();
            break;
        case "k":
            var soundOfButton = new Audio("sounds/crash.mp3");
            soundOfButton.play();
            break;
        case "l":
            var soundOfButton = new Audio("sounds/kick-bass.mp3");
            soundOfButton.play();
            break;

        default:
            console.log(this.innerHTML);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}