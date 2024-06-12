const quizData = [
    { question: "What does CPU stand for?", a: "Central Process Unit", b: "Central Processing Unit", c: "Computer Personal Unit", d: "Central Processor Unit", correct: "b" },
    { question: "What is the most common input device?", a: "Monitor", b: "Mouse", c: "Keyboard", d: "Printer", correct: "c" },
    { question: "What is RAM short for?", a: "Random Access Memory", b: "Read Access Memory", c: "Run Access Memory", d: "Random Active Memory", correct: "a" },
    { question: "Which type of memory is non-volatile?", a: "RAM", b: "ROM", c: "Cache", d: "Register", correct: "b" },
    { question: "What is the primary function of a GPU?", a: "Audio processing", b: "Video processing", c: "Data storage", d: "Network communication", correct: "b" },
    { question: "What does SSD stand for?", a: "Solid State Drive", b: "System Software Device", c: "Super Speed Disk", d: "Solid System Device", correct: "a" },
    { question: "Which port is used for Ethernet?", a: "HDMI", b: "USB", c: "RJ45", d: "VGA", correct: "c" },
    { question: "What is the purpose of an operating system?", a: "To process graphics", b: "To manage hardware and software resources", c: "To store data", d: "To connect to the internet", correct: "b" },
    { question: "Which of the following is an example of an input device?", a: "Printer", b: "Monitor", c: "Keyboard", d: "Speaker", correct: "c" },
    { question: "What does BIOS stand for?", a: "Basic Input Output System", b: "Binary Input Output System", c: "Basic Internal Operating System", d: "Binary Internal Operating System", correct: "a" },
    { question: "Which component is considered the brain of the computer?", a: "Hard Drive", b: "CPU", c: "RAM", d: "Motherboard", correct: "b" },
    { question: "What type of device is a printer?", a: "Input", b: "Output", c: "Storage", d: "Network", correct: "b" },
    { question: "What does LAN stand for?", a: "Large Area Network", b: "Local Area Network", c: "Light Access Network", d: "Logical Area Network", correct: "b" },
    { question: "Which memory type is fastest?", a: "RAM", b: "ROM", c: "Cache", d: "Flash", correct: "c" },
    { question: "What is the function of the motherboard?", a: "Store data", b: "Connect and communicate with all components", c: "Process data", d: "Power the computer", correct: "b" },
    { question: "What is an IP address?", a: "A unique identifier for a network device", b: "A type of computer virus", c: "A software program", d: "A storage device", correct: "a" },
    { question: "What does USB stand for?", a: "Universal System Bus", b: "Universal Serial Bus", c: "United System Bus", d: "United Serial Bus", correct: "b" },
    { question: "Which device converts digital signals to analog for a monitor?", a: "CPU", b: "GPU", c: "RAM", d: "Motherboard", correct: "b" },
    { question: "What type of storage is a CD-ROM?", a: "Volatile", b: "Non-volatile", c: "Flash", d: "Solid State", correct: "b" },
    { question: "What does HTTP stand for?", a: "HyperText Transfer Protocol", b: "HyperText Transmission Protocol", c: "HyperText Transfer Program", d: "HyperText Transmission Program", correct: "a" },
    { question: "What is the main function of a firewall?", a: "To prevent unauthorized access to or from a private network", b: "To store data", c: "To process information", d: "To connect to the internet", correct: "a" },
    { question: "What does GUI stand for?", a: "General User Interface", b: "Graphical User Interface", c: "Global User Interface", d: "Graphical Utility Interface", correct: "b" },
    { question: "Which device is used to connect to wireless networks?", a: "Ethernet card", b: "Wi-Fi adapter", c: "Modem", d: "Router", correct: "b" },
    { question: "What does VPN stand for?", a: "Virtual Personal Network", b: "Virtual Private Network", c: "Virtual Public Network", d: "Virtual Protocol Network", correct: "b" },
    { question: "Which file format is used for images?", a: "PDF", b: "MP3", c: "JPEG", d: "DOCX", correct: "c" },
    { question: "What is the purpose of a modem?", a: "To modulate and demodulate digital signals", b: "To store data", c: "To process graphics", d: "To run applications", correct: "a" },
    { question: "What does HDMI stand for?", a: "High Definition Multimedia Interface", b: "High Definition Multi Input", c: "High Data Multimedia Interface", d: "High Definition Media Interface", correct: "a" },
    { question: "What is the function of an operating system?", a: "Manage hardware and software resources", b: "Store data", c: "Process graphics", d: "Connect to the internet", correct: "a" },
    { question: "Which of the following is a type of malware?", a: "Antivirus", b: "Firewall", c: "Virus", d: "Encryption", correct: "c" },
    { question: "What is the main purpose of an antivirus program?", a: "To protect against malware", b: "To store data", c: "To manage hardware", d: "To connect to the internet", correct: "a" },
    { question: "What does DNS stand for?", a: "Domain Name System", b: "Digital Network System", c: "Domain Name Service", d: "Digital Name Service", correct: "a" },
    { question: "What is the purpose of a network router?", a: "To store data", b: "To manage hardware", c: "To direct network traffic", d: "To process graphics", correct: "c" },
    { question: "Which of the following is a storage device?", a: "RAM", b: "CPU", c: "SSD", d: "GPU", correct: "c" },
    { question: "What does HTTP stand for?", a: "HyperText Transfer Protocol", b: "HyperText Transmission Protocol", c: "HyperText Transfer Program", d: "HyperText Transmission Program", correct: "a" },
    { question: "What is the primary function of a firewall?", a: "To prevent unauthorized access to or from a private network", b: "To store data", c: "To process information", d: "To connect to the internet", correct: "a" },
    { question: "What does GUI stand for?", a: "General User Interface", b: "Graphical User Interface", c: "Global User Interface", d: "Graphical Utility Interface", correct: "b" },
    { question: "Which device is used to connect to wireless networks?", a: "Ethernet card", b: "Wi-Fi adapter", c: "Modem", d: "Router", correct: "b" },
    { question: "What does VPN stand for?", a: "Virtual Personal Network", b: "Virtual Private Network", c: "Virtual Public Network", d: "Virtual Protocol Network", correct: "b" },
    { question: "Which file format is used for images?", a: "PDF", b: "MP3", c: "JPEG", d: "DOCX", correct: "c" },
    { question: "What is the purpose of a modem?", a: "To modulate and demodulate digital signals", b: "To store data", c: "To process graphics", d: "To run applications", correct: "a" },
    { question: "What does HDMI stand for?", a: "High Definition Multimedia Interface", b: "High Definition Multi Input", c: "High Data Multimedia Interface", d: "High Definition Media Interface", correct: "a" }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(quizData);

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option');
const nextButton = document.getElementById('next-btn');
const showAnswersButton = document.getElementById('show-answers-btn');
const scoreEl = document.getElementById('score');

loadQuestion();

function loadQuestion() {
    resetState();
    const currentQuizData = quizData[currentQuestion];
    questionEl.textContent = currentQuizData.question;
    optionButtons[0].textContent = currentQuizData.a;
    optionButtons[1].textContent = currentQuizData.b;
    optionButtons[2].textContent = currentQuizData.c;
    optionButtons[3].textContent = currentQuizData.d;
}

function resetState() {
    optionButtons.forEach(button => {
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
    });
    nextButton.style.display = 'none';
    showAnswersButton.style.display = 'none';
}

function selectAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    const correctAnswer = currentQuizData.correct;
    if (answer === correctAnswer) {
        document.querySelector(`[onclick="selectAnswer('${answer}')"]`).classList.add('correct');
        score++;
    } else {
        document.querySelector(`[onclick="selectAnswer('${answer}')"]`).classList.add('incorrect');
        document.querySelector(`[onclick="selectAnswer('${correctAnswer}')"]`).classList.add('correct');
    }
    optionButtons.forEach(button => button.disabled = true);
    nextButton.style.display = 'block';
    scoreEl.textContent = `Score: ${score}`;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionEl.textContent = "Quiz Completed!";
    document.querySelector('.options').style.display = 'none';
    nextButton.style.display = 'none';
    showAnswersButton.style.display = 'block';
    scoreEl.textContent = `Final Score: ${score}/${quizData.length}`;
}

function showCorrectAnswers() {
    let results = '';
    quizData.forEach((quizItem, index) => {
        results += `<p>Q${index + 1}: ${quizItem.question}<br>Correct Answer: ${quizItem[quizItem.correct]}</p>`;
    });
    questionEl.innerHTML = results;
    showAnswersButton.style.display = 'none';
}
