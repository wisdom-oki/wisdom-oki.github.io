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

// Sets the initial values for some elements
scoreElement.innerHTML = "Score: " + currentScore;
resultElement.innerHTML = "";

generateQuestion();

// called by the button on the website. compares the user input to the expected answer. if the answers match, the user gets a point.
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
    //a new question is generated after every answer attempt, correct or not
    generateQuestion();
}

//function to generate and display a new maths question. also changes the expected answer
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
            equasionElement.innerHTML = firstNumber + " x " + secondNumber;
            break;
        case 3:
            // reduces complexity to be more in line with other question types
            firstNumber = Math.max(Math.floor(firstNumber / 5), 1);
            secondNumber = Math.max(Math.floor(secondNumber / 5), 1);

            //prevents answers with decimals
            expectedAnswer = firstNumber;
            firstNumber = expectedAnswer * secondNumber;

            equasionElement.innerHTML = firstNumber + " / " + secondNumber;
            break;
    }
}