import { quizData } from './data.js';

let currentScore = 0;
let currentQuestionNumber = 0;

let currentCorrectOption = '?';

const totalNumberOfQuestions = quizData.length;

function updateScore()
{
    currentCorrectOption = quizData[currentQuestionNumber].correct;
    const correctRadioButton = document.getElementById(currentCorrectOption);

    if (correctRadioButton.checked)
    {
        ++currentScore;
    }
    
    ++currentQuestionNumber;
    console.log (currentQuestionNumber);
    displayQuestion ();
}

function displayQuestion()
{
    if (currentQuestionNumber >= totalNumberOfQuestions)
    {
        const scoreString = 'Score: ' + currentScore.toString() + '/' + totalNumberOfQuestions.toString();
        alert (scoreString);
    }

    const questionDiv = document.querySelector('.question');
    let optionBoxes = document.querySelectorAll('.option');

    // set question:
    questionDiv.innerHTML = quizData[currentQuestionNumber].question;

    // set options:
    console.log (optionBoxes);
    optionBoxes[0].innerHTML = quizData[currentQuestionNumber].a;
    optionBoxes[1].innerHTML = quizData[currentQuestionNumber].b;
    optionBoxes[2].innerHTML = quizData[currentQuestionNumber].c;
    optionBoxes[3].innerHTML = quizData[currentQuestionNumber].d;
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', updateScore);

displayQuestion ();