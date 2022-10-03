const showVerb = document.getElementById('showVerb');
const showImage = document.getElementById('showImage');
const showAudio = document.getElementById('showAudio');

const next = document.getElementById('next');
const verbsCounter = document.getElementById('verbs-counter');
const allRightCounter = document.getElementById('all-right-answers');
const verbsContainer = document.getElementById('verbs-container');

const first = document.getElementById('first-verb');
const second = document.getElementById('second-verb');
const third = document.getElementById('third-verb');
const fourth = document.getElementById('fourth-verb');

const numberOfVerbs = verbs.length;

let answerRoullete = [0,1,1,1];
let positionsOfVerbs = [];
let rightAnswer;
let allRightAnswers;

next.addEventListener('click', function() {
    next.style.display = 'none';
});

makeRandomList();

let lastPosition = positionsOfVerbs = length-1;

function makeRandomList() {
    for(let i=0; i<numberOfVerbs; i++) {
        positionsOfVerbs.push(i);
    }
    positionsOfVerbs = positionsOfVerbs.sort(() => Math.random()-0.5);
}

function buttonEffect(itsRight, button) {
    if(itsRight) {
        button.classList.add('rightAnswer');
        setTimeout(function() {
            button.classList.remove('rightAnswer');
        }, 1000);
        rightAnswerCounter = rightAnswerCounter + 1;
    } else {
        button.classList.add('wrongAnswer');
        setTimeout(function() {
            button.classList.remove('wrongAnswer');
        }, 1000);
    }
    setTimeout( function() {
        ponerVerbo();
    }, 1000);
}

