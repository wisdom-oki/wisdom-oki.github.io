// static data
const bonusQuestions = ["9 + 10", "(The purpose of Life and the Universe) * 0"];
const bonusAnswers = [21, 0];
const winMessages = ["You Did It!", "Correct!", "Way To Go!", "Woohoo!", "Let's Goooooo!", "The GOAT!"];

// dynamic data
var generatorMin = 1;
var generatorMax = 30;
var expectedAnswer;
var currentScore = 0;

// DOM References
var equasionElement = document.getElementById("equasionText");
var inputElement = document.getElementById("answerInput");
var resultElement = document.getElementById("resultText");
var scoreElement = document.getElementById("scoreText");

scoreElement.innerHTML = "Score: " + currentScore;

generateQuestion();

function validateAnswer() {
    var input = inputElement.value;
    if (input == expectedAnswer) {
        currentScore += 1;
        scoreElement.innerHTML = "Score: " + currentScore;
        resultElement.className = "result-success";
        resultElement.innerHTML = winMessages[Math.floor(Math.random() * (winMessages.length - 0.001))];
    } else {
        resultElement.className = "result-fail";
        resultElement.innerHTML = "Nope. Correct answer: \"" + expectedAnswer + "\". You have lost 3'500'000 Social Credit";
    }
    inputElement.value = "";
    generateQuestion();
}

function generateQuestion() {
    // small chance to pick a bonus question
    if (Math.random() < 0.1) {
        var bonusIndex = Math.floor(Math.random() * (Math.min(bonusQuestions.length, bonusAnswers.length) - 0.001));
        equasionElement.innerHTML = bonusQuestions[bonusIndex];
        expectedAnswer = bonusAnswers[bonusIndex];
        return;
    }

    var firstNumber = Math.floor(Math.random() * (generatorMax - generatorMin)) + generatorMin;
    var secondNumber = Math.floor(Math.random() * (generatorMax - generatorMin)) + generatorMin;

    /*
    0 -> addittion
    1 -> subtraction
    2 -> multiplication
    3 -> division
    */
    var sign = Math.floor(Math.random() * 4);
    switch (sign) {
        case 0:
            expectedAnswer = firstNumber + secondNumber;
            equasionElement.innerHTML = firstNumber + " + " + secondNumber;
            break;
        case 1:
            expectedAnswer = firstNumber - secondNumber;
            equasionElement.innerHTML = firstNumber + " - " + secondNumber;
            break;
        case 2:
            expectedAnswer = firstNumber * secondNumber;
            equasionElement.innerHTML = firstNumber + " * " + secondNumber;
            break;
        case 3:
            // reduces complexity to be more in line with other question types
            firstNumber = Math.floor(firstNumber / 5);
            secondNumber = Math.floor(secondNumber / 5);

            //prevents answers with decimals
            expectedAnswer = firstNumber;
            firstNumber = expectedAnswer * secondNumber;

            equasionElement.innerHTML = firstNumber + " / " + secondNumber;
            break;
    }
}