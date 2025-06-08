const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Who is known as the Father of the Nation?",
    options: ["Nehru", "Gandhi", "Ambedkar", "Subhas Bose"],
    answer: "Gandhi"
  }
];

let current = 0;

function loadQuestion() {
  const quiz = quizData[current];
  document.getElementById("question").innerText = quiz.question;

  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";
  quiz.options.forEach(opt => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="radio" name="option" value="${opt}" /> ${opt}`;
    optionsList.appendChild(li);
  });

  document.getElementById("result").innerText = "";
}

function submitAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option!");
    return;
  }

  const answer = quizData[current].answer;
  if (selected.value === answer) {
    document.getElementById("result").innerText = "✅ Correct!";
  } else {
    document.getElementById("result").innerText = `❌ Wrong! Correct Answer: ${answer}`;
  }

  current = (current + 1) % quizData.length;
  setTimeout(loadQuestion, 2000); // 2 sec delay for next
}

loadQuestion();
