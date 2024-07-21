let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
function checkGuess(){
  while(attempts > 0){
  attempts--;
  let inputElement = document.getElementById("guess");
  let feedbackElement = document.getElementById("feedback");
  let guess = inputElement.value;
  if(guess == randomNumber){
    feedbackElement.innerHTML = "success";
    feedbackElement.style.color = "green";
    attempts = 0;
    break;
  }
  else if(guess < randomNumber){
    feedbackElement.innerHTML = "Too low! Try again.";
    break;
  }
  else{
    feedbackElement.innerHTML = "Too high! Try again.";
    break;
  }
  }
  if (attempts == 0 && guess != randomNumber) {
  feedbackElement.innerHTML = `Sorry, you're out of attempts! The correct number was ${randomNumber}.`;
  feedbackElement.style.color = "red";
}
}