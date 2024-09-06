const questions = [
    { q: "Which of the following is a method for ensuring data integrity?", a: "Hashing", options: ["Hashing", "Encryption", "Compression", "Redundancy"] },
    { q: "What does 'two-factor authentication' require?", a: "Two forms of verification to access a system", options: ["Two forms of verification to access a system", "A single password", "A security question and an answer", "A biometric scan and a password"] },
    { q: "Which type of malware can replicate itself and spread to other systems?", a: "Worm", options: ["Worm", "Trojan horse", "Spyware", "Ransomware"] },
    { q: "What is the purpose of a honeypot in network security?", a: "To attract and monitor malicious activity", options: ["To attract and monitor malicious activity", "To encrypt sensitive data", "To provide secure remote access", "To manage user permissions"] },
    { q: "Which security measure involves checking the integrity of files and systems regularly?", a: "File integrity monitoring", options: ["File integrity monitoring", "Network segmentation", "Access control", "Encryption"] },
    { q: "What is a 'rootkit'?", a: "A type of malware designed to hide its presence on a system", options: ["A type of malware designed to hide its presence on a system", "A tool for scanning network vulnerabilities", "A method for securing email communications", "A type of encryption algorithm"] },
    { q: "Which type of attack manipulates users into executing malicious commands?", a: "Social engineering", options: ["Social engineering", "SQL Injection", "Denial of Service (DoS)", "Cross-Site Scripting (XSS)"] },
    { q: "What is the primary function of an access control list (ACL)?", a: "To define permissions for network resources", options: ["To define permissions for network resources", "To encrypt data during transmission", "To monitor network traffic", "To manage user accounts"] },
    { q: "Which term refers to the process of recovering data after a system failure?", a: "Disaster recovery", options: ["Disaster recovery", "Incident response", "Backup", "Data archiving"] },
    { q: "What does a Security Information and Event Management (SIEM) system do?", a: "Collects and analyzes security data from various sources", options: ["Collects and analyzes security data from various sources", "Encrypts data at rest", "Provides secure remote access", "Monitors network performance"] },
    // Add more questions here (up to 80 total)
	{ q: "Which of the following is a method for ensuring data integrity?", a: "Hashing", options: ["Hashing", "Encryption", "Compression", "Redundancy"] },
    { q: "What does 'two-factor authentication' require?", a: "Two forms of verification to access a system", options: ["Two forms of verification to access a system", "A single password", "A security question and an answer", "A biometric scan and a password"] },
    { q: "Which type of malware can replicate itself and spread to other systems?", a: "Worm", options: ["Worm", "Trojan horse", "Spyware", "Ransomware"] },
    { q: "What is the purpose of a honeypot in network security?", a: "To attract and monitor malicious activity", options: ["To attract and monitor malicious activity", "To encrypt sensitive data", "To provide secure remote access", "To manage user permissions"] },
    { q: "Which security measure involves checking the integrity of files and systems regularly?", a: "File integrity monitoring", options: ["File integrity monitoring", "Network segmentation", "Access control", "Encryption"] },
    { q: "What is a 'rootkit'?", a: "A type of malware designed to hide its presence on a system", options: ["A type of malware designed to hide its presence on a system", "A tool for scanning network vulnerabilities", "A method for securing email communications", "A type of encryption algorithm"] },
    { q: "Which type of attack manipulates users into executing malicious commands?", a: "Social engineering", options: ["Social engineering", "SQL Injection", "Denial of Service (DoS)", "Cross-Site Scripting (XSS)"] },
    { q: "What is the primary function of an access control list (ACL)?", a: "To define permissions for network resources", options: ["To define permissions for network resources", "To encrypt data during transmission", "To monitor network traffic", "To manage user accounts"] },
    { q: "Which term refers to the process of recovering data after a system failure?", a: "Disaster recovery", options: ["Disaster recovery", "Incident response", "Backup", "Data archiving"] },
    { q: "What does a Security Information and Event Management (SIEM) system do?", a: "Collects and analyzes security data from various sources", options: ["Collects and analyzes security data from various sources", "Encrypts data at rest", "Provides secure remote access", "Monitors network performance"] },
    { q: "Which protocol is used for secure communication over a network?", a: "HTTPS", options: ["HTTPS", "HTTP", "FTP", "SMTP"] },
    { q: "What is the primary purpose of a firewall?", a: "To control incoming and outgoing network traffic", options: ["To control incoming and outgoing network traffic", "To encrypt data", "To detect malware", "To manage user permissions"] },
    { q: "What type of attack is an attempt to overwhelm a service with excessive traffic?", a: "Denial of Service (DoS)", options: ["Denial of Service (DoS)", "Phishing", "Man-in-the-Middle", "SQL Injection"] },
    { q: "Which encryption algorithm is commonly used to secure data at rest?", a: "AES", options: ["AES", "DES", "3DES", "RSA"] },
    { q: "What is the purpose of a VPN?", a: "To create a secure connection over a public network", options: ["To create a secure connection over a public network", "To backup data", "To monitor network traffic", "To authenticate users"] },
    { q: "Which of the following is an example of a physical security control?", a: "Locking doors", options: ["Locking doors", "Antivirus software", "Encryption", "Firewalls"] },
    { q: "What is the primary goal of data encryption?", a: "To protect data from unauthorized access", options: ["To protect data from unauthorized access", "To enhance data integrity", "To ensure data availability", "To improve data backup"] },
    { q: "Which type of attack involves intercepting communication between two parties?", a: "Man-in-the-Middle", options: ["Man-in-the-Middle", "SQL Injection", "Cross-Site Scripting (XSS)", "Buffer Overflow"] },
    { q: "What does a vulnerability scanner do?", a: "Identifies potential security weaknesses in a system", options: ["Identifies potential security weaknesses in a system", "Encrypts sensitive data", "Monitors network traffic", "Manages user authentication"] },
    { q: "Which security principle involves granting the minimum level of access necessary?", a: "Principle of Least Privilege", options: ["Principle of Least Privilege", "Principle of Redundancy", "Principle of Availability", "Principle of Integrity"] },
    { q: "What is the main purpose of a backup?", a: "To ensure data can be restored after loss or corruption", options: ["To ensure data can be restored after loss or corruption", "To encrypt data", "To control access", "To monitor network traffic"] },
    { q: "Which of the following is used to securely store and manage passwords?", a: "Password manager", options: ["Password manager", "Firewall", "Antivirus", "VPN"] },
    { q: "What is a common method for preventing unauthorized access to a network?", a: "Using strong passwords and multi-factor authentication", options: ["Using strong passwords and multi-factor authentication", "Regularly updating software", "Implementing encryption", "Performing regular backups"] },
    { q: "What is the purpose of a digital signature?", a: "To verify the authenticity and integrity of a message or document", options: ["To verify the authenticity and integrity of a message or document", "To encrypt data", "To manage user permissions", "To back up data"] },
    { q: "Which of the following is a type of malware that disguises itself as legitimate software?", a: "Trojan horse", options: ["Trojan horse", "Worm", "Spyware", "Ransomware"] },
    { q: "What is a common method for ensuring data privacy during transmission?", a: "Using encryption", options: ["Using encryption", "Implementing access controls", "Monitoring network traffic", "Regularly updating software"] },
    { q: "What does an intrusion detection system (IDS) do?", a: "Monitors network traffic for suspicious activity", options: ["Monitors network traffic for suspicious activity", "Encrypts sensitive data", "Performs regular backups", "Manages user accounts"] },
    { q: "Which type of security control is designed to prevent security incidents?", a: "Preventive control", options: ["Preventive control", "Detective control", "Corrective control", "Compensating control"] },
    { q: "What is a common practice for securing physical access to sensitive areas?", a: "Using access badges and biometric scanners", options: ["Using access badges and biometric scanners", "Encrypting data", "Regularly updating software", "Monitoring network traffic"] },
    { q: "Which type of backup involves copying only the data that has changed since the last backup?", a: "Incremental backup", options: ["Incremental backup", "Full backup", "Differential backup", "Snapshot backup"] },
    { q: "What does a security audit typically involve?", a: "Evaluating and assessing the effectiveness of security controls", options: ["Evaluating and assessing the effectiveness of security controls", "Encrypting data", "Monitoring network traffic", "Performing regular backups"] },
    { q: "Which of the following is a method for detecting and mitigating SQL injection attacks?", a: "Input validation and parameterized queries", options: ["Input validation and parameterized queries", "Implementing encryption", "Using strong passwords", "Regularly updating software"] },
    { q: "What is the primary function of an access control system?", a: "To manage and enforce permissions for accessing resources", options: ["To manage and enforce permissions for accessing resources", "To monitor network traffic", "To encrypt data", "To perform regular backups"] },
    { q: "Which of the following is an example of a security policy?", a: "Acceptable use policy", options: ["Acceptable use policy", "Password manager", "Firewall rule", "Encryption standard"] },
    { q: "What is the primary purpose of a security patch?", a: "To fix vulnerabilities and security issues in software", options: ["To fix vulnerabilities and security issues in software", "To back up data", "To monitor network traffic", "To manage user accounts"] },
    { q: "Which type of attack involves tricking users into revealing sensitive information?", a: "Phishing", options: ["Phishing", "Man-in-the-Middle", "Denial of Service (DoS)", "Buffer Overflow"] },
    { q: "What does a network segmentation strategy do?", a: "Divides a network into smaller, isolated segments", options: ["Divides a network into smaller, isolated segments", "Encrypts data", "Monitors network traffic", "Performs regular backups"] },
    { q: "What is a common method for ensuring data confidentiality?", a: "Encryption", options: ["Encryption", "Access controls", "Firewalls", "Antivirus software"] },
    { q: "Which type of security control is designed to detect and alert on potential security incidents?", a: "Detective control", options: ["Detective control", "Preventive control", "Corrective control", "Compensating control"] },
    { q: "What is the purpose of a security incident response plan?", a: "To outline procedures for responding to security breaches and incidents", options: ["To outline procedures for responding to security breaches and incidents", "To encrypt sensitive data", "To manage user permissions", "To perform regular backups"] },
    { q: "Which of the following is a type of access control model that uses attributes to define access permissions?", a: "Attribute-Based Access Control (ABAC)", options: ["Attribute-Based Access Control (ABAC)", "Role-Based Access Control (RBAC)", "Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)"] },
    { q: "What is the primary function of a security gateway?", a: "To filter and control traffic between networks", options: ["To filter and control traffic between networks", "To encrypt data", "To manage user accounts", "To perform regular backups"] },
    { q: "What is the purpose of a security policy?", a: "To define rules and guidelines for maintaining security", options: ["To define rules and guidelines for maintaining security", "To monitor network traffic", "To encrypt data", "To manage user accounts"] },
    { q: "Which type of backup includes all data since the last full backup?", a: "Differential backup", options: ["Differential backup", "Incremental backup", "Snapshot backup", "Full backup"] },
    { q: "What is a common approach to protecting data from unauthorized access?", a: "Implementing strong authentication mechanisms", options: ["Implementing strong authentication mechanisms", "Regularly updating software", "Encrypting data", "Performing regular backups"] },
    { q: "Which of the following is an example of a security control for protecting against data loss?", a: "Regular backups", options: ["Regular backups", "Firewall", "Antivirus", "Encryption"] },
    { q: "What is a common practice for ensuring the security of network devices?", a: "Implementing strong access controls and regular updates", options: ["Implementing strong access controls and regular updates", "Encrypting data", "Monitoring network traffic", "Performing regular backups"] },
    { q: "What is the purpose of a security information and event management (SIEM) system?", a: "To collect and analyze security-related data from multiple sources", options: ["To collect and analyze security-related data from multiple sources", "To encrypt data", "To manage user permissions", "To perform regular backups"] },
    { q: "Which type of attack involves manipulating data to gain unauthorized access or privileges?", a: "SQL Injection", options: ["SQL Injection", "Phishing", "Denial of Service (DoS)", "Buffer Overflow"] },
    { q: "What is a common method for protecting data in transit?", a: "Using encryption protocols such as SSL/TLS", options: ["Using encryption protocols such as SSL/TLS", "Implementing access controls", "Regularly updating software", "Monitoring network traffic"] },
    { q: "What is the primary purpose of a security assessment?", a: "To identify and evaluate potential security vulnerabilities and risks", options: ["To identify and evaluate potential security vulnerabilities and risks", "To encrypt data", "To manage user accounts", "To perform regular backups"] },
    { q: "Which of the following is an example of a security measure for protecting against unauthorized access?", a: "Implementing multi-factor authentication", options: ["Implementing multi-factor authentication", "Regularly updating software", "Encrypting data", "Performing regular backups"] },
    { q: "What is the main function of a security policy?", a: "To provide guidelines and rules for managing security", options: ["To provide guidelines and rules for managing security", "To encrypt data", "To monitor network traffic", "To manage user permissions"] },
    { q: "Which type of control is designed to restore systems to a normal state after a security incident?", a: "Corrective control", options: ["Corrective control", "Preventive control", "Detective control", "Compensating control"] },
    { q: "What is a common approach to ensuring data availability?", a: "Implementing redundancy and failover systems", options: ["Implementing redundancy and failover systems", "Encrypting data", "Monitoring network traffic", "Managing user permissions"] },
    { q: "What is the purpose of an intrusion prevention system (IPS)?", a: "To detect and block potential security threats", options: ["To detect and block potential security threats", "To encrypt data", "To manage user accounts", "To perform regular backups"] },
    { q: "Which type of attack involves flooding a network with excessive traffic to disrupt service?", a: "Denial of Service (DoS)", options: ["Denial of Service (DoS)", "Man-in-the-Middle", "Phishing", "SQL Injection"] },
    { q: "What does a security policy typically include?", a: "Rules and procedures for maintaining security", options: ["Rules and procedures for maintaining security", "Encryption algorithms", "Firewall configurations", "Antivirus definitions"] },
    { q: "Which type of backup involves copying all data at a specific point in time?", a: "Snapshot backup", options: ["Snapshot backup", "Incremental backup", "Differential backup", "Full backup"] },
    { q: "What is the main purpose of a security audit?", a: "To evaluate and assess the effectiveness of security controls", options: ["To evaluate and assess the effectiveness of security controls", "To encrypt data", "To monitor network traffic", "To manage user accounts"] },
    { q: "Which of the following is a type of security control designed to prevent unauthorized access?", a: "Physical security controls", options: ["Physical security controls", "Detective controls", "Corrective controls", "Compensating controls"] },
    { q: "What is a common method for protecting data from being accessed by unauthorized users?", a: "Implementing strong access controls and encryption", options: ["Implementing strong access controls and encryption", "Regularly updating software", "Monitoring network traffic", "Performing regular backups"] },
    { q: "Which of the following is an example of a security measure for protecting data at rest?", a: "Encryption", options: ["Encryption", "Firewall", "Antivirus", "Access control"] },
    { q: "What is the primary function of an incident response plan?", a: "To provide a structured approach for responding to security incidents", options: ["To provide a structured approach for responding to security incidents", "To encrypt data", "To monitor network traffic", "To manage user accounts"] },
    { q: "Which type of access control model assigns permissions based on roles?", a: "Role-Based Access Control (RBAC)", options: ["Role-Based Access Control (RBAC)", "Attribute-Based Access Control (ABAC)", "Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)"] },
    { q: "What is the purpose of a security awareness training program?", a: "To educate users about security risks and best practices", options: ["To educate users about security risks and best practices", "To encrypt data", "To monitor network traffic", "To manage user accounts"] },
    { q: "Which type of security control is designed to detect and respond to security incidents?", a: "Detective control", options: ["Detective control", "Preventive control", "Corrective control", "Compensating control"] },
    { q: "What is a common approach to managing and mitigating security risks?", a: "Implementing a risk management framework", options: ["Implementing a risk management framework", "Encrypting data", "Monitoring network traffic", "Performing regular backups"] },
    { q: "What is the main purpose of a security policy?", a: "To define rules and guidelines for maintaining security", options: ["To define rules and guidelines for maintaining security", "To encrypt data", "To manage user accounts", "To monitor network traffic"] },
    { q: "Which type of security control is designed to restore systems to a normal state after a security incident?", a: "Corrective control", options: ["Corrective control", "Preventive control", "Detective control", "Compensating control"] },
    { q: "What is the purpose of a security incident response plan?", a: "To outline procedures for responding to security breaches and incidents", options: ["To outline procedures for responding to security breaches and incidents", "To encrypt sensitive data", "To manage user permissions", "To perform regular backups"] },
    { q: "Which of the following is an example of a security measure for protecting against unauthorized access?", a: "Implementing multi-factor authentication", options: ["Implementing multi-factor authentication", "Regularly updating software", "Encrypting data", "Performing regular backups"] },
    { q: "What is the main function of a security policy?", a: "To provide guidelines and rules for managing security", options: ["To provide guidelines and rules for managing security", "To encrypt data", "To monitor network traffic", "To manage user permissions"] },
    { q: "Which type of control is designed to restore systems to a normal state after a security incident?", a: "Corrective control", options: ["Corrective control", "Preventive control", "Detective control", "Compensating control"] },
    { q: "What is a common approach to ensuring data availability?", a: "Implementing redundancy and failover systems", options: ["Implementing redundancy and failover systems", "Encrypting data", "Monitoring network traffic", "Managing user permissions"] },
    { q: "What is the purpose of an intrusion prevention system (IPS)?", a: "To detect and block potential security threats", options: ["To detect and block potential security threats", "To encrypt data", "To manage user accounts", "To perform regular backups"] },
    { q: "Which type of attack involves flooding a network with excessive traffic to disrupt service?", a: "Denial of Service (DoS)", options: ["Denial of Service (DoS)", "Man-in-the-Middle", "Phishing", "SQL Injection"] },
    { q: "What does a security policy typically include?", a: "Rules and procedures for maintaining security", options: ["Rules and procedures for maintaining security", "Encryption algorithms", "Firewall configurations", "Antivirus definitions"] },
    { q: "Which type of backup involves copying all data at a specific point in time?", a: "Snapshot backup", options: ["Snapshot backup", "Incremental backup", "Differential backup", "Full backup"] },
    { q: "What is the main purpose of a security audit?", a: "To evaluate and assess the effectiveness of security controls", options: ["To evaluate and assess the effectiveness of security controls", "To encrypt data", "To monitor network traffic", "To manage user accounts"] },
    { q: "Which of the following is a type of security control designed to prevent unauthorized access?", a: "Physical security controls", options: ["Physical security controls", "Detective controls", "Corrective controls", "Compensating controls"] },
    { q: "What is a common method for protecting data from being accessed by unauthorized users?", a: "Implementing strong access controls and encryption", options: ["Implementing strong access controls and encryption", "Regularly updating software", "Monitoring network traffic", "Performing regular backups"] },
    { q: "Which of the following is an example of a security measure for protecting data at rest?", a: "Encryption", options: ["Encryption", "Firewall", "Antivirus", "Access control"] },
    { q: "What is the primary function of an incident response plan?", a: "To provide a structured approach for responding to security incidents", options: ["To provide a structured approach for responding to security incidents", "To encrypt data", "To monitor network traffic", "To manage user accounts"] },
    { q: "Which type of access control model assigns permissions based on roles?", a: "Role-Based Access Control (RBAC)", options: ["Role-Based Access Control (RBAC)", "Attribute-Based Access Control (ABAC)", "Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)"] },
    { q: "What is the purpose of a security awareness training program?", a: "To educate users about security risks and best practices", options: ["To educate users about security risks and best practices", "To encrypt data", "To monitor network traffic", "To manage user accounts"] },
    { q: "Which type of security control is designed to detect and respond to security incidents?", a: "Detective control", options: ["Detective control", "Preventive control", "Corrective control", "Compensating control"] },
    { q: "What is a common approach to managing and mitigating security risks?", a: "Implementing a risk management framework", options: ["Implementing a risk management framework", "Encrypting data", "Monitoring network traffic", "Performing regular backups"] },
    { q: "What is the main purpose of a security policy?", a: "To define rules and guidelines for maintaining security", options: ["To define rules and guidelines for maintaining security", "To encrypt data", "To manage user accounts", "To monitor network traffic"] },
    { q: "Which type of security control is designed to restore systems to a normal state after a security incident?", a: "Corrective control", options: ["Corrective control", "Preventive control", "Detective control", "Compensating control"] },
    { q: "What is the purpose of a security incident response plan?", a: "To outline procedures for responding to security breaches and incidents", options: ["To outline procedures for responding to security breaches and incidents", "To encrypt sensitive data", "To manage user permissions", "To perform regular backups"] },
    { q: "Which of the following is an example of a security measure for protecting against unauthorized access?", a: "Implementing multi-factor authentication", options: ["Implementing multi-factor authentication", "Regularly updating software", "Encrypting data", "Performing regular backups"] },
    { q: "What is the main function of a security policy?", a: "To provide guidelines and rules for managing security", options: ["To provide guidelines and rules for managing security", "To encrypt data", "To monitor network traffic", "To manage user permissions"] },
    { q: "Which type of control is designed to restore systems to a normal state after a security incident?", a: "Corrective control", options: ["Corrective control", "Preventive control", "Detective control", "Compensating control"] },
    { q: "What is a common approach to ensuring data availability?", a: "Implementing redundancy and failover systems", options: ["Implementing redundancy and failover systems", "Encrypting data", "Monitoring network traffic", "Managing user permissions"] },
    { q: "What is the purpose of an intrusion prevention system (IPS)?", a: "To detect and block potential security threats", options: ["To detect and block potential security threats", "To encrypt data", "To manage user accounts", "To perform regular backups"] },
    { q: "Which type of attack involves flooding a network with excessive traffic to disrupt service?", a: "Denial of Service (DoS)", options: ["Denial of Service (DoS)", "Man-in-the-Middle", "Phishing", "SQL Injection"] },
    { q: "What does a security policy typically include?", a: "Rules and procedures for maintaining security", options: ["Rules and procedures for maintaining security", "Encryption algorithms", "Firewall configurations", "Antivirus definitions"] },
    { q: "Which type of backup involves copying all data at a specific point in time?", a: "Snapshot backup", options: ["Snapshot backup", "Incremental backup", "Differential backup", "Full backup"] },
    { q: "What is the main purpose of a security audit?", a: "To evaluate and assess the effectiveness of security controls", options: ["To evaluate and assess the effectiveness of security controls", "To encrypt data", "To monitor network traffic", "To manage user accounts"] },
    { q: "Which of the following is a type of security control designed to prevent unauthorized access?", a: "Physical security controls", options: ["Physical security controls", "Detective controls", "Corrective controls", "Compensating controls"] },
    { q: "What is a common method for protecting data from being accessed by unauthorized users?", a: "Implementing strong access controls and encryption", options: ["Implementing strong access controls and encryption", "Regularly updating software", "Monitoring network traffic", "Performing regular backups"] },
    { q: "Which of the following is an example of a security measure for protecting data at rest?", a: "Encryption", options: ["Encryption", "Firewall", "Antivirus", "Access control"] },
    { q: "What is the primary function of an incident response plan?", a: "To provide a structured approach for responding to security incidents", options: ["To provide a structured approach for responding to security incidents", "To encrypt data", "To monitor network traffic", "To manage user accounts"] },
    { q: "Which type of access control model assigns permissions based on roles?", a: "Role-Based Access Control (RBAC)", options: ["Role-Based Access Control (RBAC)", "Attribute-Based Access Control (ABAC)", "Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)"] },
    { q: "What is the purpose of a security awareness training program?", a: "To educate users about security risks and best practices", options: ["To educate users about security risks and best practices", "To encrypt data", "To monitor network traffic", "To manage user accounts"] },
    { q: "Which type of security control is designed to detect and respond to security incidents?", a: "Detective control", options: ["Detective control", "Preventive control", "Corrective control", "Compensating control"] },
    
];
const TIME_LIMIT = 90 * 60 * 1000; // 90 minutes in milliseconds
let startTime = Date.now();
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = [];
let selectedAnswer = null; // Track selected answer
let isAnswerChecked = false; // Track if the answer has been checked

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let testQuestions = shuffleArray(questions);

function startTest() {
    startTime = Date.now();
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = [];
    document.getElementById('timer').textContent = formatTime(TIME_LIMIT);
    showQuestion();
    startTimer();
}

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = TIME_LIMIT - elapsed;
        document.getElementById('timer').textContent = formatTime(remaining);
        if (remaining <= 0) {
            clearInterval(interval);
            endTest();
        }
    }, 1000);
}

function showQuestion() {
    if (currentQuestionIndex >= testQuestions.length) {
        endTest();
        return;
    }
    const question = testQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = question.q;
    const options = question.options.map((opt, idx) => `
        <input type="radio" name="option" value="${opt}" id="opt${idx}">
        <label for="opt${idx}">${opt}</label><br>
    `).join('');
    document.getElementById('options').innerHTML = options;
    document.getElementById('feedback').innerHTML = ''; // Clear previous feedback
    document.getElementById('nextButton').style.display = 'none'; // Hide Next button initially
    selectedAnswer = null; // Reset selected answer for the new question
    isAnswerChecked = false; // Reset flag
}

function nextQuestion() {
    if (!isAnswerChecked) {
        alert('Please select an answer.');
        return;
    }

    const correctAnswer = testQuestions[currentQuestionIndex].a;
    const feedback = document.getElementById('feedback');
    
    if (selectedAnswer === correctAnswer) {
        feedback.innerHTML = `<span class="correct">Correct!</span>`;
        correctAnswers++;
    } else {
        feedback.innerHTML = `<span class="wrong">Wrong! The correct answer is: ${correctAnswer}</span>`;
        wrongAnswers.push({
            question: testQuestions[currentQuestionIndex].q,
            chosen: selectedAnswer,
            correct: correctAnswer
        });
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < testQuestions.length) {
        setTimeout(() => {
            showQuestion();
            isAnswerChecked = false; // Reset the flag for the next question
        }, 1000); // Show next question after 1 second
    } else {
        endTest();
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        selectedAnswer = selectedOption.value;
        const labels = document.querySelectorAll('#options label');
        labels.forEach(label => {
            if (label.getAttribute('for') === selectedOption.id) {
                label.classList.add('selected'); // Highlight the selected option
            } else {
                label.classList.remove('selected'); // Remove highlight from unselected options
            }
        });
        isAnswerChecked = true; // Indicate that an answer has been selected
        document.getElementById('nextButton').style.display = 'block'; // Show Next button
    } else {
        selectedAnswer = null; // No answer selected
        isAnswerChecked = false; // Indicate no answer is selected
        document.getElementById('nextButton').style.display = 'none'; // Hide Next button
    }
}

function endTest() {
    document.getElementById('question').textContent = 'Test completed!';
    document.getElementById('options').innerHTML = '';
    document.getElementById('timer').textContent = `Final score: ${correctAnswers} out of ${testQuestions.length}`;
    document.getElementById('nextButton').style.display = 'none'; // Hide Next button when test is completed
}

function finishTest() {
    endTest();
    let wrongAnswersHtml = '<h2>Wrong Answers:</h2>';
    wrongAnswers.forEach((item, index) => {
        wrongAnswersHtml += `<p><strong>Question ${index + 1}:</strong> ${item.question}<br>
        <strong>Chosen:</strong> ${item.chosen}<br>
        <strong>Correct Answer:</strong> ${item.correct}</p>`;
    });
    document.getElementById('feedback').innerHTML += wrongAnswersHtml;
}

// Initialize the test on page load
window.onload = () => {
    startTest();
    document.getElementById('nextButton').addEventListener('click', nextQuestion);
    document.querySelector('body').addEventListener('change', checkAnswer); // Update when an answer is selected
};
