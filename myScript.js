function myFunction() {
    document.getElementById("demo").innerHTML="Biruk is a bot at basketball"
}

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("changeColorBtn");
  const body = document.body;

  button.addEventListener("click", function() {
    const randomColor = generateRandomColor();
    body.style.backgroundColor = randomColor;
  });

  function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const clickBtn = document.getElementById("clickBtn");
  const scoreDisplay = document.getElementById("score");
  let score = 0;
  const gameDurationSeconds = 30; // Adjust game duration in seconds
  let timeLeft = gameDurationSeconds;

  clickBtn.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = score;
  });

  // Timer function
  function startTimer() {
    const timerDisplay = document.createElement("p");
    timerDisplay.textContent = `Time left: ${timeLeft} seconds`;
    document.body.appendChild(timerDisplay);

    const timerInterval = setInterval(function() {
      timeLeft--;
      timerDisplay.textContent = `Time left: ${timeLeft} seconds`;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
      }
    }, 1000);
  }

  // Function to end the game
  function endGame() {
    clickBtn.removeEventListener("click", incrementScore);
    alert(`Game Over! Your final score is ${score}.`);
  }

  // Start the game when the page loads
  startTimer();
});
