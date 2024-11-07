
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