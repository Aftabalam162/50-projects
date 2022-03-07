var progress = document.getElementsByClassName("progress")[0];
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var circles = document.querySelectorAll(".circle");

var currentStage = 1;

next.addEventListener('click', () => {
    circles[currentStage].classList.add("active");
    currentStage++;
    console.log(currentStage);

    buttonDisable();
    progressBar();

});

prev.addEventListener('click', () => {
    circles[currentStage-1].classList.remove("active");
    currentStage--;
    console.log(currentStage);

    buttonDisable();
    progressBar();
    
});

function progressBar() {
    if (currentStage == 1){ 
        progress.style.width = "0%";
    } else if (currentStage == 2){
        progress.style.width = "33.33%";
    } else if (currentStage == 3){
        progress.style.width = "66.66%";
    } else {
        progress.style.width = "100%";
    }

}




function buttonDisable(){
    if (currentStage == 1){
        prev.disabled = true;
    } else if (currentStage == 4){
        next.disabled = true;
    } else{
        prev.disabled = false;
        next.disabled = false;
    }
}