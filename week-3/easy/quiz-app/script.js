import { quizData } from './data.js';

let currentScore = 0;
let currentQuestionNumber = 0;

let currentCorrectOption = '?';
let currentSelectedOption = '?';

const totalQuestions = quizData.length;

function updateScore()
{
    if (currentCorrectOption == currentSelectedOption)
    {
        ++score;
    }

    displayQuestion (currentQuestionNumber);
}

function displayQuestion ()
{
    if (currentQuestionNumber >= totalQuestions)
    {
        return;
    }

    const questionDiv = document.querySelector('.question');

    questionDiv.innerText = quizData[currentQuestionNumber].question;
}

displayQuestion ();