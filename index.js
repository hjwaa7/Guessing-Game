
//generate a random number between 0-100
let randomNum = (Math.floor(Math.random() * 100) + 1);

//define a variable to track the number of guesses
let count = 0;

//check validity of input
let numVal = document.getElementById('num');
let goButton = document.getElementById("go");
numVal.addEventListener('keyup', function (event) {
    isValidNum = numVal.checkValidity();
    //if the input is not valid, disable the "Go" button
    if(isValidNum) {
      goButton.disabled = false;
    } else {
      goButton.disabled = true;
    }
  });

//function to provide feedback
function checkNum(numGuess) {
    if(numGuess > randomNum){
        document.getElementById("hint").innerHTML = "Too high";
        document.querySelector("input").value = "";
    }
    if(numGuess < randomNum){
        document.getElementById("hint").innerHTML = "Too low";
        document.querySelector("input").value = "";
    }
    if(numGuess == randomNum){
        document.getElementById("hint").innerHTML = "Got it!";
        showImage();
    }

}

//when button is pushed, record input number & provide feedback
goButton.addEventListener("click", function(){
    count++;
    let numGuess = document.querySelector("input").value;
    if(count == 1){
        checkNum(numGuess);
        document.getElementById("guessOne").innerHTML = numGuess;
    }
    if(count == 2){
        checkNum(numGuess);
        document.getElementById("guessTwo").innerHTML = numGuess;
    }
    if(count == 3){
        checkNum(numGuess);
        document.getElementById("guessThree").innerHTML = numGuess;
    }
    if(count == 4){
        checkNum(numGuess);
        document.getElementById("guessFour").innerHTML = numGuess;
    }
    if(count == 5){
        let fifthGuess = document.querySelector("input").value;
        document.getElementById("guessFive").innerHTML = fifthGuess;
        if(fifthGuess !== randomNum){
            document.getElementById("hint").innerHTML = `The correct answer is ${randomNum}. Reset to try again.`;
            document.querySelector("input").value = "";
        }
        if(fifthGuess == randomNum){
            document.getElementById("hint").innerHTML = "Got it!";
            showImage();
        }
    } 
    });

//if guess is correct, add a trophy
function showImage() {
    let img = document.getElementById('trophy');
    img.style.visibility = 'visible';
}

//reset button
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(){
    randomNum = (Math.floor(Math.random() * 100) + 1);
    document.getElementById("guessOne").innerHTML = "-";
    document.getElementById("guessTwo").innerHTML = "-";
    document.getElementById("guessThree").innerHTML = "-";
    document.getElementById("guessFour").innerHTML = "-";
    document.getElementById("guessFive").innerHTML = "-";
    document.getElementById('trophy').style.visibility = "hidden";
    count = 0;
    document.getElementById("hint").innerHTML = "Try again!";
    document.querySelector("input").value = "";
});




