
let currentQuestionIndex = 0;
let correctAnswers = 0;

const questions = [
    {
        question: "O que significa a palavra 'Watsu'?",
        options: ["Water Study", "Water Therapy", "Water Shatsu", "Water Stretch"],
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
        // Adicionando um atributo data-answer para verificar a resposta
        button.setAttribute('data-answer', String.fromCharCode(65 + index));
        button.style.backgroundColor = ''; // Reset background color
    });
}

document.querySelectorAll('.answer-section button').forEach(button => {
    button.addEventListener('click', (event) => {
        const selectedAnswer = event.target.getAttribute('data-answer');
        const isCorrect = selectedAnswer === questions[currentQuestionIndex].answer;
        if (isCorrect) {
            correctAnswers++;
            event.target.style.backgroundColor = 'lightgreen';
        } else {
            event.target.style.backgroundColor = 'lightcoral';
        }
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            } else {
                showFinalScore();
            }
        }, 1000);
    });
});

function showFinalScore() {
    const gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = `<h1>Fim do Jogo!</h1>
                               <p>Você acertou ${correctAnswers} de ${questions.length} perguntas.</p>`;
    // Aqui você pode adicionar um botão para reiniciar o jogo se desejar
}

// Iniciar o jogo com a primeira pergunta
showQuestion(currentQuestionIndex);