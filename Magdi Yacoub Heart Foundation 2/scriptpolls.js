const quizData = [
    {
        question: 'What is a healthy resting heart rate for adults?',
        options: ['60-100 beats per minute', '40-60 beats per minute', '100-120 beats per minute', 'Less than 40 beats per minute'],
        answer: '60-100 beats per minute'
    },
    {
        question: 'Which nutrient is beneficial for heart health?',
        options: ['Saturated fats', 'Trans fats', 'Omega-3 fatty acids', 'High-fructose corn syrup'],
        answer: 'Omega-3 fatty acids'
    },
    // Add more questions here...
];

const questionContainer = document.getElementById('question-container');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

let currentQuestionIndex = 0;

function displayQuestion(index) {
    const question = quizData[index];
    const optionsHtml = question.options.map(option =>
        `<input type="radio" name="answer" value="${option}">
        <label>${option}</label><br>`
    ).join('');
    questionContainer.innerHTML = `<div>${question.question}</div>${optionsHtml}`;
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const correctAnswer = quizData[currentQuestionIndex].answer;
        if (userAnswer === correctAnswer) {
            resultContainer.textContent = 'Correct!';
        } else {
            resultContainer.textContent = 'Incorrect!';
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            displayQuestion(currentQuestionIndex);
        } else {
            resultContainer.textContent = 'Quiz completed!';
            submitBtn.disabled = true; // Disable submit button after completing the quiz
        }
    } else {
        resultContainer.textContent = 'Please select an answer!';
    }
}

// Display the first question when the page loads
displayQuestion(currentQuestionIndex);

// Attach event listener to the submit button
submitBtn.addEventListener('click', checkAnswer);
// Event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for reaching out! We will get back to you soon.');
        });
    }
});
document.getElementById('donate-button').addEventListener('click', function() {
    // Redirect to the donations page
    window.location.href = 'Donate.html';
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Clear previous error messages
  document.querySelectorAll('.error').forEach(function(error) {
    error.textContent = '';
  });
  
  // Retrieve form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  // Validate name
  if (name.trim() === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    return;
  }
  
  // Validate email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email address';
    return;
  }
  
  // Validate message
  if (message.trim() === '') {
    document.getElementById('messageError').textContent = 'Message is required';
    return;
  }
  
  // If all validations pass, you can submit the form
  // For this example, let's just log the form data
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
});