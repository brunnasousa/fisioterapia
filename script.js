
let currentQuestionIndex = 0;
let correctAnswers = 0;

const questions = [
    {
        question: "O que significa a palavra 'Watsu'?",
        options: ["Water Study", "Water Therapy", "Water Shiatsu", "Water Stretch"],
        answer: "C"
    },
    {
        question: "Qual é a temperatura ideal da água para a prática de Watsu?",
        options: ["Aproximadamente 22°C", "Aproximadamente 28°C", "Aproximadamente 35°C", "Aproximadamente 40°C"],
        answer: "C"
    },
    {
        question: "Quais são os principais benefícios do Watsu?",
        options: ["Relaxamento muscular e redução de estresse", "Melhora da capacidade cardiorespiratória", "Fortalecimento muscular", "Melhora da flexibilidade articular"],
        answer: "A"
    },
    {
        question: "Em que ano e onde o Watsu foi desenvolvido?",
        options: ["1980, Estados Unidos", "1970, Japão", "1990, Alemanha", "1985, França"],
        answer: "A"
    },
    {
        question: "Quem pode se beneficiar das sessões de Watsu?",
        options: ["Apenas pacientes com lesões musculares", "Apenas pacientes neurológicos", "Pessoas de todas as idades e condições", "Apenas atletas"],
        answer: "C"
    },
    {
        question: "Qual técnica não é comumente usada na Watsu Terapia?",
        options: ["Acupressão", "Massagem profunda nos tecidos", "Alongamento passivo", "Mobilização articular"],
        answer: "B"
    },
    {
        question: "O Watsu é considerado eficaz para qual condição?",
        options: ["Tensão muscular", "Fraturas ósseas", "Cortes e abrasões", "Problemas de visão"],
        answer: "A"
    },
    {
        question: "Qual profissional está qualificado para aplicar a terapia Watsu?",
        options: ["Fisioterapeuta", "Quiroprático", "Dermatologista", "Oftalmologista"],
        answer: "A"
    },
    {
        question: "Watsu é uma prática associada a qual tipo de medicina?",
        options: ["Medicina tradicional chinesa", "Medicina ocidental moderna", "Ayurveda", "Homeopatia"],
        answer: "A"
    },
    {
        question: "O movimento na água durante o Watsu ajuda a promover o que?",
        options: ["Maior resistência muscular", "Relaxamento do sistema nervoso", "Hidratação da pele", "Melhoria da visão"],
        answer: "B"
    }
];

function showQuestion(questionIndex) {
    const questionData = questions[questionIndex];
    const questionContainer = document.querySelector('.question-text');
    const answerButtons = document.querySelectorAll('.answer-section button');

    document.querySelector('.question-count span').textContent = `Questão ${questionIndex + 1}`;
    questionContainer.textContent = questionData.question;

    answerButtons.forEach((button, index) => {
        button.textContent = `${String.fromCharCode(65 + index)}. ${questionData.options[index]}`;
        button.setAttribute('data-answer', String.fromCharCode(65 + index));
        button.style.backgroundColor = '';
        button.onclick = () => handleAnswerClick(button, questionData.answer);
    });
}

function handleAnswerClick(button, correctAnswer) {
    const selectedAnswer = button.getAttribute('data-answer');
    const isCorrect = selectedAnswer === correctAnswer;
    if (isCorrect) {
        correctAnswers++;
        button.style.backgroundColor = 'lightgreen';
    } else {
        button.style.backgroundColor = 'lightcoral';
    }
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            showFinalScore();
        }
    }, 1000);
}

function showFinalScore() {
    const gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = `
        <div class='end-title'>Fim do Jogo!</div>
        <div class='result-text'>Você acertou ${correctAnswers} de ${questions.length} perguntas.</div>
        <button class='restart-button' onclick="restartGame()">Reiniciar Jogo</button>`;
}


function restartGame() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    const gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = `
        <div class="question-section">
            <p>FISIOTERAPIA</p>
            <div class="question-count">
                <span>Questão 1</span>/10
            </div>
            <div class="question-text">Aqui vai a pergunta?</div>
        </div>
        <div class="answer-section">
            <button>A. Opção 1</button>
            <button>B. Opção 2</button>
            <button>C. Opção 3</button>
            <button>D. Opção 4</button>
        </div>`;
    showQuestion(currentQuestionIndex);
}

// Iniciar o jogo com a primeira pergunta
showQuestion(currentQuestionIndex);