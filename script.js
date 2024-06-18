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
    { question: "What does HDMI stand for?", a: "High Definition Multimedia Interface", b: "High Definition Multi Input", c: "High Data Multimedia Interface", d: "High Definition Media Interface", correct: "a" },
    // Additional 50 questions
	 // New 50 questions
    { question: "What is the purpose of an IMEI number?", a: "To identify a mobile network", b: "To identify a specific mobile device", c: "To secure mobile data", d: "To manage app installations", correct: "b" },
    { question: "Which mobile device feature uses a fingerprint to unlock?", a: "Face ID", b: "Retina scan", c: "Touch ID", d: "PIN", correct: "c" },
    { question: "Which of the following is used to connect a mobile device to a network?", a: "HDMI", b: "RJ11", c: "Bluetooth", d: "VGA", correct: "c" },
    { question: "What is the primary use of a microSD card in mobile devices?", a: "Battery backup", b: "External storage", c: "Network connection", d: "Audio enhancement", correct: "b" },
    { question: "Which of the following is a feature of most modern smartphones?", a: "Optical drive", b: "Removable battery", c: "Touchscreen", d: "Ethernet port", correct: "c" },
    { question: "What type of memory is commonly used in mobile devices?", a: "DIMM", b: "SIMM", c: "Flash memory", d: "SODIMM", correct: "c" },
    { question: "What is the purpose of airplane mode on a mobile device?", a: "To improve battery life", b: "To disable wireless communications", c: "To boost signal strength", d: "To optimize app performance", correct: "b" },
    { question: "Which mobile device component is responsible for cellular communication?", a: "GPU", b: "Modem", c: "CPU", d: "NIC", correct: "b" },
    { question: "What is a common screen resolution for high-definition smartphones?", a: "640x480", b: "1280x720", c: "1920x1080", d: "2560x1440", correct: "c" },
    { question: "Which operating system is used on iPhones?", a: "Android", b: "Windows Mobile", c: "iOS", d: "Symbian", correct: "c" },
    { question: "What is the purpose of a mobile hotspot?", a: "To store data", b: "To provide internet access to other devices", c: "To charge devices", d: "To enhance audio", correct: "b" },
    { question: "Which technology allows for contactless payments with mobile devices?", a: "Bluetooth", b: "NFC", c: "Wi-Fi", d: "IR", correct: "b" },
    { question: "What type of connector is commonly used for charging Android devices?", a: "Lightning", b: "USB-C", c: "Micro-USB", d: "HDMI", correct: "b" },
    { question: "Which mobile device setting should be enabled to locate a lost phone?", a: "Airplane mode", b: "Location services", c: "Bluetooth", d: "Wi-Fi", correct: "b" },
    { question: "What is the primary function of a gyroscope in a smartphone?", a: "To enhance audio quality", b: "To track device orientation", c: "To improve battery life", d: "To manage network connections", correct: "b" },
    { question: "Which of the following mobile device features provides haptic feedback?", a: "Touchscreen", b: "Vibration motor", c: "Microphone", d: "Speaker", correct: "b" },
    { question: "What is the function of the SIM card in a mobile phone?", a: "To store contacts", b: "To store operating system files", c: "To identify the user to the network", d: "To enhance audio quality", correct: "c" },
    { question: "Which port is typically used to connect a mobile device to a computer for data transfer?", a: "HDMI", b: "USB", c: "VGA", d: "RJ45", correct: "b" },
    { question: "What is the purpose of a mobile device's accelerometer?", a: "To track steps", b: "To measure screen brightness", c: "To detect device movement", d: "To manage power usage", correct: "c" },
    { question: "Which mobile operating system is developed by Google?", a: "iOS", b: "Windows Mobile", c: "Android", d: "BlackBerry OS", correct: "c" },
    { question: "What is the function of a tablet's digitizer?", a: "To display images", b: "To convert analog signals to digital", c: "To process touch inputs", d: "To amplify sound", correct: "c" },
    { question: "Which technology is used for hands-free communication in vehicles?", a: "NFC", b: "Bluetooth", c: "Wi-Fi", d: "IR", correct: "b" },
    { question: "What is the maximum storage capacity of a standard microSDHC card?", a: "8GB", b: "32GB", c: "64GB", d: "128GB", correct: "b" },
    { question: "Which mobile device component is responsible for photo and video capture?", a: "Modem", b: "Camera", c: "GPS", d: "Accelerometer", correct: "b" },
    { question: "What does LTE stand for in mobile networks?", a: "Long Term Evolution", b: "Local Transmission Ethernet", c: "Lightweight Transmission Endpoint", d: "Limited Transmission Error", correct: "a" },
    { question: "Which feature allows a smartphone to track location?", a: "NFC", b: "Bluetooth", c: "GPS", d: "IR", correct: "c" },
    { question: "What is the purpose of a mobile device's proximity sensor?", a: "To adjust screen brightness", b: "To detect nearby objects", c: "To improve battery life", d: "To measure ambient light", correct: "b" },
    { question: "Which type of display technology is commonly used in modern smartphones?", a: "CRT", b: "LCD", c: "LED", d: "OLED", correct: "d" },
    { question: "Which wireless technology is primarily used for device-to-device file transfer?", a: "Wi-Fi", b: "Bluetooth", c: "NFC", d: "Zigbee", correct: "b" },
    { question: "Which component in a mobile device is used to amplify audio?", a: "Speaker", b: "Microphone", c: "Modem", d: "Vibration motor", correct: "a" },
    { question: "What is the purpose of a VPN on a mobile device?", a: "To boost signal strength", b: "To provide secure internet access", c: "To increase battery life", d: "To manage network connections", correct: "b" },
    { question: "What is the primary use of the NFC feature in mobile devices?", a: "Audio enhancement", b: "Short-range wireless communication", c: "Battery optimization", d: "Screen display", correct: "b" },
    { question: "Which of the following mobile devices uses an Apple-developed operating system?", a: "Galaxy", b: "Pixel", c: "iPhone", d: "Nexus", correct: "c" },
    { question: "What type of battery is most commonly used in mobile devices?", a: "NiMH", b: "Lead-acid", c: "Li-ion", d: "Alkaline", correct: "c" },
    { question: "Which feature allows for wireless charging of mobile devices?", a: "USB-C", b: "NFC", c: "Qi", d: "HDMI", correct: "c" },
    { question: "What is the main purpose of a mobile device's gyroscope?", a: "To detect acceleration", b: "To measure orientation", c: "To enhance audio", d: "To manage power", correct: "b" },
    { question: "Which mobile operating system uses the Play Store for app distribution?", a: "iOS", b: "Windows Mobile", c: "Android", d: "BlackBerry OS", correct: "c" },
    { question: "What does USB OTG stand for?", a: "Universal Serial Bus On-The-Go", b: "Universal Serial Bus Over-The-Grid", c: "Universal Serial Bus On-The-Ground", d: "Universal Serial Bus Off-The-Grid", correct: "a" },
    { question: "Which mobile device component is responsible for connecting to cellular networks?", a: "Wi-Fi adapter", b: "SIM card", c: "Bluetooth adapter", d: "NFC chip", correct: "b" },
    { question: "What type of connection is commonly used for wired headphones?", a: "USB-C", b: "Lightning", c: "3.5mm jack", d: "HDMI", correct: "c" },
    { question: "Which mobile device feature allows for unlocking using facial recognition?", a: "Face ID", b: "Touch ID", c: "Retina scan", d: "PIN", correct: "a" },
    { question: "What is the function of a mobile device's earpiece?", a: "To capture audio", b: "To output audio", c: "To process audio", d: "To store audio", correct: "b" },
    { question: "Which type of port is commonly used to connect a smartphone to a car's infotainment system?", a: "HDMI", b: "USB", c: "VGA", d: "RJ45", correct: "b" },
    { question: "What is the main function of a smartphone's home button?", a: "To power on the device", b: "To adjust volume", c: "To return to the home screen", d: "To enable airplane mode", correct: "c" },
    { question: "What type of connection is commonly used for mobile device charging?", a: "RJ45", b: "VGA", c: "USB-C", d: "HDMI", correct: "c" },
    { question: "Which component is responsible for capturing touch inputs on a smartphone?", a: "Digitizer", b: "Speaker", c: "Camera", d: "Microphone", correct: "a" },
    { question: "Which technology allows mobile devices to be used as digital wallets?", a: "Bluetooth", b: "NFC", c: "Wi-Fi", d: "IR", correct: "b" },
    { question: "What is the primary use of a mobile device's rear camera?", a: "Video calls", b: "Taking photos", c: "Audio recording", d: "Face recognition", correct: "b" },
    { question: "What type of display is commonly used in high-end smartphones?", a: "CRT", b: "LCD", c: "OLED", d: "LED", correct: "c" },
    { question: "Which mobile device component is used for navigation and location tracking?", a: "Modem", b: "GPS", c: "NFC", d: "Accelerometer", correct: "b" },
    { question: "What is the purpose of a smartphone's speakerphone feature?", a: "To increase call volume", b: "To allow hands-free calls", c: "To enhance audio quality", d: "To reduce background noise", correct: "b" }

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
