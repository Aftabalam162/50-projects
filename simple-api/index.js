var main_content = document.querySelector(".content").innerHTML;
var content_id = document.querySelector(".main-heading").innerHTML;

document.addEventListener('click', () =>{
    main_content = quote;
    content_id = quote_id;
    findSomeQuotes();
})

async function findSomeQuotes (){
    fetch('api.adviceslip.com/advice')
    .then((response) => {
        return response.json(); })
    .then(async (data) =>{
        let quote = await data.advice;
        let quote_id = await data.slip_id;
    });
}

