// Add Event Listener to the button element and allow the calculator to load before running
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'Calculate') {
                verifyAnswers();
            } else {
                let calcType = this.getAttribute('data-type');
                executeCalc(calcType);
            }
        });
    }

    document.getElementById('answer-area').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            verifyAnswers();
        }
    })



    executeCalc('add');
});
/***
 * Function called when the script is loaded 
 * and after the answer of the user is processed. 
 */
function executeCalc(calcType) {
    
    document.getElementById('answer-area').value = "";
    
    document.getElementById('answer-area').focus();

     // random numbers bewteen 1 and 100
     let number1 = Math.floor(Math.random() * 100) + 1; 
     let number2 = Math.floor(Math.random() * 100) + 1;

     if (calcType === 'add') {
        showPlusQuestions(number1, number2);
     } else if (calcType === 'multiply') {
        showTimesQuestions(number1, number2);
     } else if (calcType === 'subtract') {
        showMinusQuestions(number1, number2);   
     } else if (calcType === 'divide') {
        showDivideQuestions(number1, number2);   
     } else {
        alert(`Incorrect: ${calcType}`);
        throw `Incorrect: ${calcType}. End!`;
     }
}

/**
 * Verify the answers against the first element in
 * the returned solveTrueAnswers
*/
function verifyAnswers() {
    let userAnswer = parseInt(document.getElementById('answer-area').value);
    let solvedAnswer = solveTrueAnswers();
    let isCorrect = userAnswer === solvedAnswer[0];

    if (isCorrect) {
        alert('Right!');
        trueIncrease();
    } else {
        alert(`Wrong.... you answered ${userAnswer}. The correct answer was ${solvedAnswer[0]}`);
        falseIncrease();
    }

    executeCalc(solvedAnswer[1]);

}

/**
 * Gets the numbers or operands and the operators from the dom 
 * and return the the right answer.
 */
function solveTrueAnswers() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, 'add'];
    } else if (operator === '*') {
        return [operand1 * operand2, 'multiply'];
    } else if (operator === '-') {
        return [operand1 - operand2, 'subtract'];       
    } else if (operator === '/') {
        return [operand1 / operand2, 'divide'];    
    } else {
        alert(`Wrong operator ${operator}`);
        throw `Wrong operator ${operator}. End!`;
    }
}

/**
 * Gets the right answer and increase it by 1
 */
function trueIncrease() {
    oldScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++oldScore;
}

/**
 * Gets the wrong answer and increase it by 1
 */
function falseIncrease() {
    oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

/***
 * Function that show addition questions
 */
function showPlusQuestions(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

/***
 * Function that show substaction questions
 */

function showMinusQuestions(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}

/***
 * Function that show multiplication questions
 */
function showTimesQuestions(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '*';
}

/***
 * Function that show division questions
 */
function showDivideQuestions(operand2, operand1) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '/';
}
