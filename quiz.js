const questions = [
    {
      question: "Who are the reigning Superbowl champions?",
      answers: ["49ers", "Ravens", "Chiefs", "Lions"],
      correct: 2 
    },
    {
      question: "Who are the reigning NBA champions?",
      answers: ["Warriors", "Lakers", "Celtics", "Mavericks"],
      correct: 2 
    },
    {
      question: "Who are the reigning World Series champions?",
      answers: ["Phillies", "Red Sox", "Yankees", "Dodgers"],
      correct: 3 
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const resultElement = document.getElementById("result");
  const restartButton = document.getElementById("restart");
  
  function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
      showResults();
      return;
    }
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    answersElement.innerHTML = ""; 
    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.onclick = () => handleAnswer(index);
      answersElement.appendChild(button);
    });
  }
  
  function handleAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedIndex === currentQuestion.correct) {
      score++;
    }
  
    currentQuestionIndex++;
    loadQuestion();
  }
  
  function showResults() {
    questionElement.textContent = "Quiz Complete!";
    answersElement.innerHTML = ""; 
    resultElement.textContent = `You scored ${score} out of ${questions.length}.`;
    restartButton.style.display = "block"; 
  }
  
  restartButton.onclick = () => {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.textContent = "";
    restartButton.style.display = "none";
    loadQuestion();
  };
  
  
  loadQuestion();