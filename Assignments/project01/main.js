// Event Listener is attached to the reset button 

document.querySelector('#reset-btn').addEventListener('click', () => {
    let passTwo = document.getElementById('pass').value;
    let confirmpassTwo = document.getElementById('confirm-pass').value;   
    
    // if the passwords are same then this code snippet get injected
    if (passTwo == confirmpassTwo) {
        
        document.getElementsByTagName('main')[0].innerHTML = "<main><div><h1 id='main-heading' style='left:500px;'>Password Changed</h1> <p id='resetDone'> Your Password has been updated! Now get back in the driver seat, reacers are waiting for you!</p> <button id='join-btn'>JOIN A RACE</button></div></main>"
    }
});

// event listener attached to the confirm-pass input field
// whenever key is released this function will be fired

document.getElementById('confirm-pass').addEventListener('keyup', () => {
    let pass = document.getElementById('pass').value;
    let confirmPass = document.getElementById('confirm-pass').value;
    
    // if passwords are not same then styling of the page changes otherwise remains the same

    if (pass != confirmPass) {
        
        document.getElementById('notMatch').style.visibility = 'visible';
        document.getElementById('confirm-pass').style.border = "3px solid #EB5757";
    } else {
    
        document.getElementById('notMatch').style.visibility = 'hidden';
        document.getElementById('confirm-pass').style.border = "3px solid black";
    }
})

document.getElementById('pass').addEventListener('keyup', () => {
    let passVal = document.getElementById('pass').value;
    let patternOne = /[\W]{1,}|[0-9]{1,}/g
    let patternTwo = /[a-zA-Z0-9\W]{8,}/g

    let resultOne = patternOne.test(passVal);
    let resultTwo = patternTwo.test(passVal);
    
    if (resultOne == false) {
        document.getElementById('passneed').textContent = 'Password must have at least one symbol or digit';
        document.getElementById('passneed').style.visibility = 'visible';
        document.getElementById('pass').style.border = '3px solid #EB5757';
    }

    if (resultTwo == false) {
        document.getElementById('passneed').textContent = 'Password must have 8 or more characters';
        document.getElementById('passneed').style.visibility = 'visible';
        document.getElementById('pass').style.border = '3px solid #EB5757';
    }

    if (resultOne == true && resultTwo == true) {
        document.getElementById('passneed').style.visibility = 'hidden';
        document.getElementById('pass').style.border = '3px solid black';
    }
})
