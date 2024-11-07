// Add Event Listener to the button element
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'calculate') {
                alert('You clicked calculate'); 
            } else {
                let calcType = this.getAttribute('data-type');
                //alert(`You clicked ${calcType}`);
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

}

function solveTrueAnswers() {

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