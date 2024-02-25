var testQuestions = [
  {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    text: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    text: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    text: "What is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    text: "Which of the following is not a primary color?",
    options: ["Red", "Yellow", "Green", "Blue"],
    answer: "Green"
  },
  {
    text: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra"
  },
  {
    text: "How many continents are there in the world?",
    options: ["Five", "Six", "Seven", "Eight"],
    answer: "Seven"
  },
  {
    text: "Which bird is known for its ability to mimic human speech?",
    options: ["Penguin", "Parrot", "Sparrow", "Ostrich"],
    answer: "Parrot"
  },
  {
    text: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    text: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest"
  }
];


// Function to start the test
function startTest() {
  var testSection = document.getElementById("testSection");
  
  // Generate test questions
  testQuestions.forEach(function(question, index) {
    var questionHtml = `
      <div class="question">
        <p>${index + 1}. ${question.text}</p>
        <form id="question${index}">
          ${question.options.map(option => `
            <label>
              <input type="radio" name="question${index}" value="${option}">
              ${option}
            </label>
          `).join('')}
        </form>
      </div>
    `;
    testSection.innerHTML += questionHtml;
  });
  
  // Add button to submit the test
  testSection.innerHTML += '<button onclick="calculateScore()" style="cursor: pointer;">Submit Test</button>';
}

// Function to calculate the score
function calculateScore() {
  var correctAnswers = 0;
  var totalAttempted = 0; // Variable to store total attempted questions

  testQuestions.forEach(function(question, index) {
    var selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedAnswer) {
      totalAttempted++; // Increment total attempted questions
      if (selectedAnswer.value === question.answer) {
        correctAnswers++;
      }
    }
  });

  // Redirect to score page with query parameters
  window.location.href = `score.html?correct=${correctAnswers}&total=${totalAttempted}`;
}
