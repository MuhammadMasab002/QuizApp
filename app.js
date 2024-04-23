const questions = [
    {
        'que': "Which of the following is a markup language?",
        'a': "HTML",
        'b': "CSS",
        'c': "JavaScript",
        'd': "PHP",
        'correct': "a"
    },
    {
        'que': "What year JavaScript was launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of these",
        'correct': "b"
    },
    {
        'que': "What does CSS stands for?",
        'a': "Hyper Text Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "b"
    },
];

let index = 0;
let quesBox = document.getElementById("quesBox");
let optionInputs = document.querySelectorAll(".options");

let total = questions.length;
let right = 0,
    wrong = 0;

const loardQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    // console.log(data);
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    console.log(ans, data.correct);
    if (ans == data.correct) {
        right++;
    }else{
        wrong++;
    }
    if (index == total) {
        return endQuiz();
    }
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                index++;
                loardQuestion();
            }
        }
    );
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    );
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    );
}

const endQuiz = () => {
    var tryAgain = document.getElementById("box");
    tryAgain.innerHTML = `
    <div style="text-align: center;">
        <h3>Thank you for playing the Quiz </h3>
        <h2>${right} / ${total} are Correct </h2>
    </div>
    `
}

//// initial call
loardQuestion();