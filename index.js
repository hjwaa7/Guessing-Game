
//generate a random number between 0-100
let randomNum = Math.floor(Math.random() * 100);

//define a variable to track the number of guesses
let count = 0;

//when button is pushed, check input number
let goButton = document.getElementById("go");
goButton.addEventListener("click", function(){
    count++;
    if(count == 1){
        let firstGuess = document.querySelector("input").value;
        document.getElementById("guessOne").innerHTML = firstGuess;
        if(firstGuess > randomNum){
            document.getElementById("hint").innerHTML = "Too high";
        }
        if(firstGuess < randomNum){
            document.getElementById("hint").innerHTML = "Too low";
        }
        if(firstGuess == randomNum){
            document.getElementById("hint").innerHTML = "Got it!";
            showImage();
        }
    }
    if(count == 2){
        let secondGuess = document.querySelector("input").value;
        document.getElementById("guessTwo").innerHTML = secondGuess;
        if(secondGuess > randomNum){
            document.getElementById("hint").innerHTML = "Too high";
        }
        if(secondGuess < randomNum){
            document.getElementById("hint").innerHTML = "Too low";
        }
        if(secondGuess == randomNum){
            document.getElementById("hint").innerHTML = "Got it!";
            showImage();
        }
    }
    if(count == 3){
        let thirdGuess = document.querySelector("input").value;
        document.getElementById("guessThree").innerHTML = thirdGuess;
        if(thirdGuess > randomNum){
            document.getElementById("hint").innerHTML = "Too high";
        }
        if(thirdGuess < randomNum){
            document.getElementById("hint").innerHTML = "Too low";
        }
        if(thirdGuess == randomNum){
            document.getElementById("hint").innerHTML = "Got it!";
            showImage();
        }
    }
    if(count == 4){
        let fourthGuess = document.querySelector("input").value;
        document.getElementById("guessFour").innerHTML = fourthGuess;
        if(fourthGuess > randomNum){
            document.getElementById("hint").innerHTML = "Too high";
        }
        if(fourthGuess < randomNum){
            document.getElementById("hint").innerHTML = "Too low";
        }
        if(fourthGuess == randomNum){
            document.getElementById("hint").innerHTML = "Got it!";
            showImage();
        }
    }
    if(count == 5){
        let fifthGuess = document.querySelector("input").value;
        document.getElementById("guessFive").innerHTML = fifthGuess;
        if(fifthGuess !== randomNum){
            document.getElementById("hint").innerHTML = `The correct answer is ${randomNum}. Reset to try again.`;
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
    document.getElementById("guessOne").innerHTML = "-";
    document.getElementById("guessTwo").innerHTML = "-";
    document.getElementById("guessThree").innerHTML = "-";
    document.getElementById("guessFour").innerHTML = "-";
    document.getElementById("guessFive").innerHTML = "-";
    document.getElementById('trophy').style.visibility = "hidden";
    count = 0;
    document.getElementById("hint").innerHTML = "Try again!";
});




