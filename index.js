var buttons = document.querySelectorAll("button");

for(var i=0; i< buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", (event) => {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    if(key == "w"){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }

    else if(key == "a"){
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }

    else if(key == "s"){
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }

    else if(key == "d"){
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }

    else if(key == "j"){
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    }

    else if(key == "k"){
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    }

    else if(key == "l"){
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){ 
        activeButton.classList.remove("pressed");
    }, 300);
}