/**
 * QuizMania - Application Logic
 * Built with vanilla Javascript, incorporating Web Audio API synth sounds,
 * keyboard controls, and responsive UX states.
 */

// ==========================================================================
// SOUND SYNTHESIS UTILITY (Web Audio API)
// ==========================================================================
const SoundFX = {
    ctx: null,
    muted: false,

    init() {
        if (!this.ctx) {
            // Lazy load AudioContext on user interaction
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    },

    playClick() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        const now = this.ctx.currentTime;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);

        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

        osc.start(now);
        osc.stop(now + 0.1);
    },

    playCorrect() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        const now = this.ctx.currentTime;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.setValueAtTime(0.1, now + 0.24);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

        osc.start(now);
        osc.stop(now + 0.45);
    },

    playIncorrect() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        const now = this.ctx.currentTime;
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(90, now + 0.35);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.start(now);
        osc.stop(now + 0.35);
    },

    playTimeOut() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        const now = this.ctx.currentTime;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(147, now + 0.15);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        osc.start(now);
        osc.stop(now + 0.4);
    }
};

// ==========================================================================
// APP STATE & SELECTORS
// ==========================================================================
const state = {
    userName: "Jugador",
    questionsList: [],
    currentQuestionIndex: 0,
    score: 0,
    answersLog: [], // Stores user choice, correct index, response time
    timeLeft: 30,
    timerInterval: null,
    isAnswered: false,
    timerTotalDuration: 30 // seconds per question
};

// DOM Elements
const el = {
    // Screens
    get startScreen() { return document.getElementById('start-screen'); },
    get quizScreen() { return document.getElementById('quiz-screen'); },
    get resultsScreen() { return document.getElementById('results-screen'); },
    
    // Theme
    get themeToggle() { return document.getElementById('theme-toggle'); },
    get sunIcon() { return this.themeToggle?.querySelector('.sun-icon'); },
    get moonIcon() { return this.themeToggle?.querySelector('.moon-icon'); },

    // Start Screen Inputs
    get usernameInput() { return document.getElementById('username'); },
    get startBtn() { return document.getElementById('start-btn'); },

    // Quiz Screen
    get progressFill() { return document.getElementById('quiz-progress-fill'); },
    get currentQuestionNum() { return document.getElementById('current-question-num'); },
    get totalQuestionsNum() { return document.getElementById('total-questions-num'); },
    get timerProgress() { return document.getElementById('timer-progress'); },
    get timerText() { return document.getElementById('timer-text'); },
    get questionText() { return document.getElementById('question-text'); },
    get optionsContainer() { return document.getElementById('options-container'); },
    get feedbackMsg() { return document.getElementById('feedback-msg'); },
    get nextBtn() { return document.getElementById('next-btn'); },
    get nextBtnText() { return document.getElementById('next-btn-text'); },

    // Results Screen
    get resultsUsername() { return document.getElementById('results-username'); },
    get scorePercentage() { return document.getElementById('score-percentage'); },
    get scoreFraction() { return document.getElementById('score-fraction'); },
    get statCorrect() { return document.getElementById('stat-correct-count'); },
    get statIncorrect() { return document.getElementById('stat-incorrect-count'); },
    get statPoints() { return document.getElementById('stat-points-score'); },
    get reviewToggle() { return document.getElementById('review-toggle'); },
    get reviewList() { return document.getElementById('review-list'); },
    get restartBtn() { return document.getElementById('restart-btn'); }
};

// ==========================================================================
// CORE INITIALIZER & EVENTS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupEventHandlers();
});

function setupEventHandlers() {
    // Theme Toggle
    el.themeToggle.addEventListener('click', toggleTheme);



    // Start Button
    el.startBtn.addEventListener('click', startQuiz);

    // Username Enter key triggers start
    el.usernameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            startQuiz();
        }
    });

    // Next Question Button
    el.nextBtn.addEventListener('click', () => {
        SoundFX.playClick();
        goToNextQuestion();
    });

    // Results Restart Button
    el.restartBtn.addEventListener('click', () => {
        SoundFX.playClick();
        resetQuiz();
    });

    // Detailed Review Toggle
    el.reviewToggle.addEventListener('click', () => {
        SoundFX.playClick();
        el.reviewToggle.classList.toggle('active');
        el.reviewList.classList.toggle('collapsed');
    });

    // Keyboard Shortcuts Listener for Quiz
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// ==========================================================================
// THEME MANAGER
// ==========================================================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleUI(savedTheme);
}

function toggleTheme() {
    SoundFX.playClick();
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleUI(newTheme);
}

function updateThemeToggleUI(theme) {
    if (theme === 'light') {
        el.sunIcon.style.display = 'none';
        el.moonIcon.style.display = 'block';
    } else {
        el.sunIcon.style.display = 'block';
        el.moonIcon.style.display = 'none';
    }
}

// ==========================================================================
// QUIZ CONTROL FLOW
// ==========================================================================
function normalizeQuestion(q) {
    if (!q) return null;
    
    // Normalizar texto de la pregunta (soporta 'question' y 'pregunta')
    const questionText = q.question || q.pregunta || "";
    
    // Normalizar opciones (soporta 'options' y 'opciones')
    const options = q.options || q.opciones || [];
    
    // Normalizar respuesta correcta (soporta índice numérico 'correct' e incisos de letras 'respuestaCorrecta' like 'a', 'b', 'c', 'd')
    let correct = q.correct;
    if (correct === undefined && q.respuestaCorrecta !== undefined) {
        const val = q.respuestaCorrecta;
        if (typeof val === 'number') {
            correct = val;
        } else if (typeof val === 'string') {
            const cleanVal = val.trim().toLowerCase();
            const letterIndices = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4 };
            correct = letterIndices[cleanVal] !== undefined ? letterIndices[cleanVal] : parseInt(cleanVal);
        }
    }
    
    return {
        id: q.id,
        question: questionText,
        options: options,
        correct: typeof correct === 'number' && !isNaN(correct) ? correct : 0
    };
}

function startQuiz() {
    SoundFX.playClick();

    // Set Username
    const inputVal = el.usernameInput.value.trim();
    state.userName = inputVal !== "" ? inputVal : "Jugador";

    // Cargar y normalizar todas las preguntas del examen (soporta formatos antiguos y nuevos)
    state.questionsList = quizQuestions.map(normalizeQuestion).filter(q => q !== null);

    // Mezclar las preguntas para que salgan en orden aleatorio (descomentar/comentar si se prefiere un orden fijo)
    shuffleArray(state.questionsList);

    if (state.questionsList.length === 0) {
        alert("No hay preguntas disponibles en el banco de datos en este momento.");
        return;
    }

    // Initialize State variables
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.answersLog = [];

    // Update UI elements for total numbers
    el.totalQuestionsNum.textContent = padZero(state.questionsList.length);

    // Transition Screens
    switchScreen(el.startScreen, el.quizScreen);

    // Load First Question
    loadQuestion(state.currentQuestionIndex);
}

function loadQuestion(index) {
    state.isAnswered = false;
    el.nextBtn.style.visibility = 'hidden';
    el.feedbackMsg.className = 'feedback-msg'; // Clear previous states
    el.feedbackMsg.innerHTML = '';

    const currentQuestion = state.questionsList[index];

    // Update Text & Meta Headers
    el.currentQuestionNum.textContent = padZero(index + 1);
    el.questionText.textContent = currentQuestion.question;

    // Update general progress fill bar
    const progressPercent = ((index) / state.questionsList.length) * 100;
    el.progressFill.style.width = `${progressPercent}%`;

    // Render Options
    el.optionsContainer.innerHTML = '';
    
    // Make a copy of options with their original indices
    const optionsWithIndices = currentQuestion.options.map((opt, optIndex) => ({
        text: opt,
        originalIndex: optIndex
    }));
    
    // Optional: We can shuffle options to prevent positional memorization!
    shuffleArray(optionsWithIndices);

    const keyBadges = ['A', 'B', 'C', 'D'];
    optionsWithIndices.forEach((optData, idx) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.setAttribute('data-index', optData.originalIndex);
        optionBtn.id = `option-${idx}`;
        optionBtn.setAttribute('aria-label', `Opción ${keyBadges[idx]}: ${optData.text}`);

        // Build option HTML
        optionBtn.innerHTML = `
            <div class="option-badge">${keyBadges[idx]}</div>
            <span class="option-text">${optData.text}</span>
        `;

        optionBtn.addEventListener('click', () => {
            selectOption(optData.originalIndex, optionBtn);
        });

        el.optionsContainer.appendChild(optionBtn);
    });

    // Reset and Start Timer
    resetTimer();
    startTimer();
}

function selectOption(selectedIdx, selectedElement) {
    if (state.isAnswered) return;
    
    // Stop Timer
    clearInterval(state.timerInterval);
    state.isAnswered = true;

    const currentQuestion = state.questionsList[state.currentQuestionIndex];
    const correctIdx = currentQuestion.correct;
    const isCorrect = (selectedIdx === correctIdx);
    const timeTaken = state.timerTotalDuration - state.timeLeft;

    // Log user answer
    state.answersLog.push({
        question: currentQuestion.question,
        options: currentQuestion.options,
        userAnswerIdx: selectedIdx,
        correctAnswerIdx: correctIdx,
        isCorrect: isCorrect,
        timeTaken: timeTaken
    });

    // Disable all options
    const allOptionButtons = el.optionsContainer.querySelectorAll('.option-btn');
    allOptionButtons.forEach(btn => {
        btn.disabled = true;
    });

    if (isCorrect) {
        // Success Sound and style
        SoundFX.playCorrect();
        selectedElement.classList.add('correct');
        
        // Speed bonus points logic: Max 20 points, min 10 points.
        const speedRatio = state.timeLeft / state.timerTotalDuration; // 1 at start, 0 at end
        const speedBonus = Math.round(speedRatio * 10);
        const questionPoints = 10 + speedBonus;
        state.score += questionPoints;

        // Show Feedback
        el.feedbackMsg.className = 'feedback-msg success-msg show';
        el.feedbackMsg.innerHTML = `
            <svg class="feedback-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>¡Excelente! +${questionPoints} pts</span>
        `;
    } else {
        // Error Sound and style
        SoundFX.playIncorrect();
        
        // Highlight chosen as incorrect
        selectedElement.classList.add('incorrect');

        // Highlight correct option in green as requested
        const correctElement = Array.from(allOptionButtons).find(btn => 
            parseInt(btn.getAttribute('data-index')) === correctIdx
        );
        if (correctElement) {
            correctElement.classList.add('correct');
        }

        // Show Feedback
        el.feedbackMsg.className = 'feedback-msg error-msg show';
        el.feedbackMsg.innerHTML = `
            <svg class="feedback-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span>Incorrecto</span>
        `;
    }

    // Set up button label and reveal button
    if (state.currentQuestionIndex === state.questionsList.length - 1) {
        el.nextBtnText.textContent = "Ver Resultados";
    } else {
        el.nextBtnText.textContent = "Siguiente";
    }
    el.nextBtn.style.visibility = 'visible';
    el.nextBtn.focus();
}

function handleTimeOut() {
    state.isAnswered = true;
    clearInterval(state.timerInterval);
    SoundFX.playTimeOut();

    const currentQuestion = state.questionsList[state.currentQuestionIndex];
    const correctIdx = currentQuestion.correct;

    // Log timeout answer
    state.answersLog.push({
        question: currentQuestion.question,
        options: currentQuestion.options,
        userAnswerIdx: -1, // -1 means timeout/unanswered
        correctAnswerIdx: correctIdx,
        isCorrect: false,
        timeTaken: state.timerTotalDuration
    });

    // Disable all options
    const allOptionButtons = el.optionsContainer.querySelectorAll('.option-btn');
    allOptionButtons.forEach(btn => {
        btn.disabled = true;
        // Highlight correct index
        if (parseInt(btn.getAttribute('data-index')) === correctIdx) {
            btn.classList.add('correct');
        }
    });

    // Show Warning Feedback
    el.feedbackMsg.className = 'feedback-msg error-msg show';
    el.feedbackMsg.innerHTML = `
        <svg class="feedback-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" style="color: var(--warning-color)">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span style="color: var(--warning-color)">¡Tiempo Agotado!</span>
    `;

    // Next button adjustments
    if (state.currentQuestionIndex === state.questionsList.length - 1) {
        el.nextBtnText.textContent = "Ver Resultados";
    } else {
        el.nextBtnText.textContent = "Siguiente";
    }
    el.nextBtn.style.visibility = 'visible';
    el.nextBtn.focus();
}

function goToNextQuestion() {
    if (state.currentQuestionIndex < state.questionsList.length - 1) {
        state.currentQuestionIndex++;
        loadQuestion(state.currentQuestionIndex);
    } else {
        showResults();
    }
}

// ==========================================================================
// TIMER FUNCTIONS
// ==========================================================================
function startTimer() {
    state.timerInterval = setInterval(() => {
        state.timeLeft--;
        updateTimerUI();

        if (state.timeLeft <= 0) {
            handleTimeOut();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(state.timerInterval);
    state.timeLeft = state.timerTotalDuration;
    updateTimerUI();
}

function updateTimerUI() {
    // Update numeric indicator
    el.timerText.textContent = state.timeLeft;

    // SVG dashoffset recalculation
    // Radius of svg stroke is 34. Total perimeter = 2 * Math.PI * 34 = ~213.6
    const perimeter = 213.6;
    const progressRatio = state.timeLeft / state.timerTotalDuration;
    const dashOffset = perimeter * (1 - progressRatio);
    el.timerProgress.style.strokeDashoffset = dashOffset;

    // Color shifting transitions
    if (state.timeLeft > 15) {
        el.timerProgress.style.stroke = 'var(--correct-color)';
    } else if (state.timeLeft > 5) {
        el.timerProgress.style.stroke = 'var(--warning-color)';
    } else {
        el.timerProgress.style.stroke = 'var(--incorrect-color)';
        // Pulsate timer text when time is low
        el.timerText.style.animation = 'pulseText 0.5s infinite alternate';
    }

    if (state.timeLeft > 5) {
        el.timerText.style.animation = 'none';
    }
}

// ==========================================================================
// RESULTS & STATS COMPILATION
// ==========================================================================
function showResults() {
    // Stop all background clocks
    clearInterval(state.timerInterval);

    // Math Calculations
    const totalQuestions = state.questionsList.length;
    const correctCount = state.answersLog.filter(a => a.isCorrect).length;
    const incorrectCount = totalQuestions - correctCount;
    const finalPercentage = Math.round((correctCount / totalQuestions) * 100);

    // Apply stats to interface
    el.resultsUsername.textContent = `Buen trabajo, ${state.userName}`;
    el.scorePercentage.textContent = `${finalPercentage}%`;
    el.scoreFraction.textContent = `${correctCount} de ${totalQuestions} correctas`;
    el.statCorrect.textContent = correctCount;
    el.statIncorrect.textContent = incorrectCount;
    el.statPoints.textContent = state.score;

    // Animate the circular graph outline
    animateScoreCircle(finalPercentage);

    // Generate detailed review
    renderDetailedReview();

    // Close review collapse by default
    el.reviewToggle.classList.remove('active');
    el.reviewList.classList.add('collapsed');

    // Switch View
    switchScreen(el.quizScreen, el.resultsScreen);
}

function renderDetailedReview() {
    el.reviewList.innerHTML = '';
    
    state.answersLog.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'review-item';

        const userOptionText = item.userAnswerIdx !== -1 
            ? item.options[item.userAnswerIdx] 
            : 'Sin responder (Tiempo agotado)';
        const correctOptionText = item.options[item.correctAnswerIdx];

        itemDiv.innerHTML = `
            <div class="review-question">Pregunta ${index + 1}: ${item.question}</div>
            <div class="review-details">
                <div class="review-stat ${item.isCorrect ? 'stat-user-val-correct' : 'stat-user-val-incorrect'}">
                    <span class="review-stat-label">Tu respuesta:</span>
                    <span class="review-stat-value">${userOptionText}</span>
                </div>
                ${!item.isCorrect ? `
                <div class="review-stat stat-correct-val">
                    <span class="review-stat-label">Respuesta correcta:</span>
                    <span class="review-stat-value">${correctOptionText}</span>
                </div>
                ` : ''}
                <div class="review-stat">
                    <span class="review-stat-label">Tiempo empleado:</span>
                    <span class="review-stat-value">${item.timeTaken}s</span>
                </div>
            </div>
        `;

        el.reviewList.appendChild(itemDiv);
    });
}

function animateScoreCircle(percentage) {
    const circle = document.querySelector('.score-circle');
    // Animate borders or colors dynamically
    let hue = 240; // Default Indigo hue
    if (percentage >= 80) hue = 140; // Emerald hue
    else if (percentage >= 50) hue = 35; // Orange hue
    else hue = 0; // Red hue

    circle.style.borderColor = `hsla(${hue}, 80%, 50%, 0.4)`;
    circle.style.boxShadow = `0 10px 30px hsla(${hue}, 80%, 50%, 0.15), var(--glow-shadow)`;
}

function resetQuiz() {
    // Go to first screen
    switchScreen(el.resultsScreen, el.startScreen);
    el.usernameInput.value = '';
    el.usernameInput.focus();
}

// ==========================================================================
// SYSTEM ACCESSORIES & HELPER UTILITIES
// ==========================================================================
function switchScreen(fromScreen, toScreen) {
    fromScreen.style.opacity = '0';
    fromScreen.style.transform = 'translateY(-15px)';
    
    setTimeout(() => {
        fromScreen.classList.remove('active');
        toScreen.classList.add('active');
        
        // Wait minor delay to trigger reflow
        setTimeout(() => {
            toScreen.style.opacity = '1';
            toScreen.style.transform = 'translateY(0)';
        }, 50);
    }, 300); // matches style transition values
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

// Keyboard shortcuts handlers for accessible gameplay
function handleKeyboardShortcuts(e) {
    // Only capture when quiz screen is active
    if (!el.quizScreen.classList.contains('active')) return;

    // Keys 1, 2, 3, 4 map to options index
    const numericalKeys = ['1', '2', '3', '4'];
    const letterKeys = ['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'];

    if (!state.isAnswered) {
        let selectedBtnIndex = -1;

        if (numericalKeys.includes(e.key)) {
            selectedBtnIndex = parseInt(e.key) - 1;
        } else if (letterKeys.includes(e.key)) {
            const letter = e.key.toUpperCase();
            selectedBtnIndex = ['A', 'B', 'C', 'D'].indexOf(letter);
        }

        if (selectedBtnIndex >= 0 && selectedBtnIndex < el.optionsContainer.children.length) {
            const targetBtn = document.getElementById(`option-${selectedBtnIndex}`);
            if (targetBtn) {
                targetBtn.click();
            }
        }
    } else {
        // Space or Enter key moves to next question
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault(); // Prevents page scrolling on spacebar
            el.nextBtn.click();
        }
    }
}
