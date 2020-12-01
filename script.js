const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '18',
        c: '26',
        d: '110',
        correct: 'c'
    }, {
    question: 'Who is the president of the U.S?',
    a: 'Obama',
    b: 'Trump',
    c: 'Biden',
    d: 'Bush',
    correct: 'c'
    }, {
question: 'What is the most popular programming language?',
a: 'CSS',
b: 'Python',
c: 'JavaScript',
d: 'Java',
correct: 'd'
    }, {
    question: 'What is my name?',
        a: 'John',
        b: 'James',
        c: 'Peter',
        d: 'Brad',
        correct: 'a'
    }, 
];
const answerE1s = document.querySelectorAll 
(".answer");
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');



let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
   
    answerE1s.forEach((answerE1) => {
        if(answerE1.checked){
        answer = answerE1.id;
        }
    });
    return answer;
    }

    function deselectAnswers() {
        answerE1s.forEach((answerE1) => {
            answerE1.checked = false;
        })
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }


        currentQuiz++;
        
    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        alert("You finished!! Go grab a snack")
    }
}

});