var dice = document.getElementById('dice');
var heading = document.getElementById("slipId");
var content = document.getElementById("content");

dice.addEventListener('click', () => {
    getQuote();
});


function getQuote(){
    var request = new XMLHttpRequest();
    var string; var quote;

    request.addEventListener('readystatechange', () => {
        string = request.responseText;

        try{
            quote = JSON.parse(string);

        } catch(err){
            console.log(err);
        }

        try {
            heading.innerText = quote.slip.id;
            content.innerText = quote.slip.advice;
        } catch (error) {
            console.log(error);
        }

    });

    request.open("GET", "https://api.adviceslip.com/advice");
    request.send();


}

getQuote();

if (screen.width < 768) {
    document.querySelector("body").innerHTML = "<h1 style={color: white;}> Please switch to your Laptop or PC. This site is compatible with wider screens.</h1>";
}
