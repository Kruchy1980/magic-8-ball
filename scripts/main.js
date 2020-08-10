// I. Variables
const ball = document.querySelector('.ball-img img');
const questionInput = document.querySelector('.typed-text');
const answerDisplay = document.querySelector('.answer');
const errorDisplay = document.querySelector('.error');
const answers = [
    'Yes',
    'No',
    'Maybe',
    'It is really hard to say...',
    'You do not want to know answer for that question... :/'
];

// II. Functions
const inputValidation = () => {
    if (questionInput.value === '') {
        errorDisplay.textContent = 'You need to ask a question!';
        answerDisplay.textContent = '';
    } else if (questionInput.value.slice(-1) !== '?') {
        errorDisplay.textContent = 'The question should have question mark "?" at the end!';
        answerDisplay.textContent = '';
    } else {
        showAnswer();
        errorDisplay.textContent = '';
    };
    ball.classList.remove('shake-animation');
};

// C. Animation on click
const ballAnimation = () => {
    ball.classList.add('shake-animation');
};

// IV. Help functions
const showAnswer = () => {
    let index = Math.round(Math.random() * (answers.length - 1));
    answerDisplay.innerHTML = `<span>My prediction is:</span> ${answers[index]}`;
};


// IV. Event listeners
ball.addEventListener('click', ballAnimation);
document.addEventListener('animationend', inputValidation);