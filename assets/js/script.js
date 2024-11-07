// Add Event Listener to the button element
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'calculate') {
                verifyAnswers();
            } else {
                let calcType = this.getAttribute('data-type');
                executeCalc(calcType);
            }
        });
    }
    executeCalc('add');
});

function executeCalc(calcType) { 
     let number1 = Math.floor(Math.random() * 100) + 1; // random numbers bewteen 1 and 100
     let number2 = Math.floor(Math.random() * 100) + 1;

     if (calcType === 'add') {
        showPlusQuestions(number1, number2);
     } else {
        alert(`Incorrect: ${calcType}`);
        throw `Incorrect: ${calcType}. End!`;
     }
}

function verifyAnswers() {
    let userAnswer = parseInt(document.getElementById('answer-area').value);
    let solvedAnswer = solveTrueAnswers();
    let correct = userAnswer === solvedAnswer[0];

    if (correct) {
        alert('Right!');
    } else {
        alert(`Wrong.... you answered ${userAnswer}. The correct answer was ${solvedAnswer[0]}`);
    }

    executeCalc(solvedAnswer[1]);

}

function solveTrueAnswers() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, 'add'];
    } else {
        alert(`Wrong operator ${operator}`);
        throw `Wrong operator ${operator}. End!`;
    }
}

function trueIncrease() {

}

function falseIncrease() {

}

function showPlusQuestions(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';

}

function showMinusQuestions() {

}

function showTimesQuestions() {

}

function showDivideQuestions() {
    
}