let timeLimit = prompt("Enter a time limit in seconds:", "10");
timeLimit = isNaN(timeLimit) || timeLimit <= 0 ? 10 : Math.floor(Number(timeLimit));
let timeRemaining = timeLimit;
function updateClock() {
  const clockDiv = document.getElementById("clock");

  if (timeRemaining > 0) {
    clockDiv.textContent = `${timeRemaining} seconds remaining`;
    timeRemaining--;
  } else {
    clearInterval(timerInterval);
    clockDiv.classList.remove("green"); 
    clockDiv.classList.add("red");
    clockDiv.textContent = "Time's up!"; 
  }
}
const timerInterval = setInterval(updateClock, 1000);
updateClock(); 