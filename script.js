let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");
let playagain = document.querySelector(".playbtn");

let answer = Math.floor(Math.random() * 100) + 1;
let no_of_guesses = 0;
let guessed_numbers = [];

function play(){
    let user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        alert("Please enter a number between 1 and 100.");
    }else{
        no_of_guesses += 1;
        guessed_numbers.push(user_guess);

        if(user_guess < answer){
            msg1.textContent = "Your guess is too low";
            msg3.textContent = "No of Guesses" + no_of_guesses;
            msg2.textContent = "Guessed numbers:" + guessed_numbers;
        }else if(user_guess > answer){
            msg1.textContent = "Your guess is too high";
            msg3.textContent = "No of Guesses" + no_of_guesses;
            msg2.textContent = "Guessed numbers:" + guessed_numbers;
        }else if(user_guess == answer){
            msg1.textContent = "Yippie! You Win";
            msg3.textContent = "The number was:" + answer;
            msg2.textContent = "Guessed numbers:" + guessed_numbers;
            playagain.classList.toggle("playbtn");
        }
    }
}

playagain.addEventListener("click", () => {
    location.reload();
})