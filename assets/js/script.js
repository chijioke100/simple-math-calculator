// Add Event Listener to the button element
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'calculate') {
                alert('You clicked calculate'); 
            } else {
                let calcType = this.getAttribute('data-type');
                alert(`You clicked ${calcType}`);
            }
        });
    }
});

function executeCalc() {
    Math.floor(Math.random() * 100) + 1; // random numbers bewteen 1 and 100
}

function verifyAnswers() {

}

function solveTrueAnswers() {

}

function trueIncrease() {

}

function falseIncrease() {

}

function showPlusQuestions() {

}

function showMinusQuestions() {

}

function showTimesQuestions() {

}

function showDivideQuestions() {
    
}