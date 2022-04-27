    
    document.addEventListener("keydown", function (event) {
        
        var keystroke = event.key;
        if (keystroke == "w"){
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        } else if (keystroke == "a") {
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        } else if (keystroke == "s"){
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        } else if (keystroke == "d"){
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        } else if (keystroke == "j"){
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        } else if (keystroke == "k"){
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        } else if (keystroke == "l"){
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        } else {
            console.log("This key got pressed : " + keystroke);
        }
        
        activeKey(keystroke);
        setTimeout(function(){
            document.querySelector("." + keystroke).classList.remove("flash");
        }, 100);

    });

    function activeKey(currentKey){
        document.querySelector("." + currentKey).classList.add("flash");
    }

    if (screen.width < 768) {
        document.querySelector('body').innerHTML = "<h1 style={color:white;}>Please use this site on Laptop/Desktop screen</h1>";
    }