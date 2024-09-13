// Define the quiz data
const quizzes = {
    quiz1: [
        { q: "Which of the following is a method for ensuring data integrity?", a: "Hashing", options: ["Hashing", "Encryption", "Compression", "Redundancy"] },
        { q: "What does 'two-factor authentication' require?", a: "Two forms of verification to access a system", options: ["Two forms of verification to access a system", "A single password", "A security question and an answer", "A biometric scan and a password"] },
        // Add more questions here for quiz1
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
		{ q: "What is a common method for protecting data from being accessed by unauthorized users?", a: "Implementing strong access controls and encryption", options: ["Implementing strong access controls and encryption", "Regularly updating software", "Monitoring network traffic", "Performing regular backups"] },
		{ q: "Which of the following is an example of a security measure for protecting data at rest?", a: "Encryption", options: ["Encryption", "Firewall", "Antivirus", "Access control"] },
		{ q: "What is the primary function of an incident response plan?", a: "To provide a structured approach for responding to security incidents", options: ["To provide a structured approach for responding to security incidents", "To encrypt data", "To monitor network traffic", "To manage user accounts"] },
		{ q: "Which type of access control model assigns permissions based on roles?", a: "Role-Based Access Control (RBAC)", options: ["Role-Based Access Control (RBAC)", "Attribute-Based Access Control (ABAC)", "Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)"] },
		{ q: "What is the purpose of a security awareness training program?", a: "To educate users about security risks and best practices", options: ["To educate users about security risks and best practices", "To encrypt data", "To monitor network traffic", "To manage user accounts"] },
		{ q: "Which type of security control is designed to detect and respond to security incidents?", a: "Detective control", options: ["Detective control", "Preventive control", "Corrective control", "Compensating control"] },
		// Additional Questions
		{ q: "What is the main purpose of a VPN?", a: "To secure communication over a public network", options: ["To secure communication over a public network", "To speed up internet connections", "To provide backup solutions", "To encrypt files at rest"] },
		{ q: "Which attack involves sending an overwhelming amount of traffic to a target?", a: "Denial of Service (DoS)", options: ["Denial of Service (DoS)", "SQL Injection", "Cross-Site Scripting (XSS)", "Phishing"] },
		{ q: "What type of malware hides itself within legitimate software?", a: "Trojan Horse", options: ["Trojan Horse", "Virus", "Worm", "Ransomware"] },
		{ q: "What is the primary use of a firewall?", a: "To filter and control network traffic", options: ["To filter and control network traffic", "To monitor system performance", "To provide secure remote access", "To encrypt data"] },
		{ q: "What is the concept of 'least privilege'?", a: "Providing only the access necessary to perform a task", options: ["Providing only the access necessary to perform a task", "Allowing users to have maximum permissions", "Separating duties among different users", "Using multiple layers of security"] },
		{ q: "Which security model is based on access labels?", a: "Mandatory Access Control (MAC)", options: ["Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)", "Role-Based Access Control (RBAC)", "Attribute-Based Access Control (ABAC)"] },
		{ q: "What does the acronym IDS stand for?", a: "Intrusion Detection System", options: ["Intrusion Detection System", "Intrusion Prevention System", "Integrated Detection System", "Internet Detection System"] },
		{ q: "What is the primary function of multi-factor authentication (MFA)?", a: "To provide an additional layer of security", options: ["To provide an additional layer of security", "To simplify user login", "To replace passwords with biometric data", "To monitor network traffic"] },
		{ q: "Which term refers to a flaw in software that can be exploited by attackers?", a: "Vulnerability", options: ["Vulnerability", "Threat", "Exploit", "Risk"] },
		{ q: "What is a common way to protect data at rest?", a: "Encryption", options: ["Encryption", "Firewalls", "Antivirus software", "Access control lists"] },
		{ q: "Which protocol is used to secure communications over a network?", a: "HTTPS", options: ["HTTPS", "FTP", "SMTP", "Telnet"] },
		{ q: "What is a 'rootkit' designed to do?", a: "Hide its presence on a system", options: ["Hide its presence on a system", "Scan for vulnerabilities", "Encrypt data", "Manage network traffic"] },
		{ q: "What is the primary goal of an incident response plan?", a: "To provide a structured approach for dealing with security incidents", options: ["To provide a structured approach for dealing with security incidents", "To monitor network traffic", "To encrypt data", "To manage user access"] },
		{ q: "What type of malware is designed to hold data hostage until a ransom is paid?", a: "Ransomware", options: ["Ransomware", "Spyware", "Adware", "Worm"] },
		{ q: "What is the purpose of file integrity monitoring?", a: "To detect unauthorized changes to files", options: ["To detect unauthorized changes to files", "To manage network traffic", "To encrypt data", "To monitor user activity"] },
		{ q: "Which type of backup copies only data that has changed since the last full backup?", a: "Incremental Backup", options: ["Incremental Backup", "Full Backup", "Differential Backup", "Snapshot Backup"] },
		{ q: "What does the acronym DLP stand for?", a: "Data Loss Prevention", options: ["Data Loss Prevention", "Data Leak Prevention", "Data Link Protection", "Data Lifecycle Policy"] },
		{ q: "What is the purpose of network segmentation?", a: "To limit the scope of potential security incidents", options: ["To limit the scope of potential security incidents", "To increase network speed", "To manage user permissions", "To encrypt data"] },
		{ q: "Which security control is implemented after an incident has occurred?", a: "Corrective Control", options: ["Corrective Control", "Preventive Control", "Detective Control", "Compensating Control"] },
		{ q: "What is a common method for securing wireless networks?", a: "WPA2 encryption", options: ["WPA2 encryption", "WEP encryption", "MAC address filtering", "Disabling SSID broadcast"] },
		{ q: "What does the acronym SIEM stand for?", a: "Security Information and Event Management", options: ["Security Information and Event Management", "System Information and Event Monitoring", "Security Incident and Event Monitoring", "System Integration and Event Management"] },
		{ q: "What is the purpose of a penetration test?", a: "To identify and exploit vulnerabilities in a system", options: ["To identify and exploit vulnerabilities in a system", "To monitor network performance", "To encrypt data", "To provide security awareness training"] },
		{ q: "What type of malware records user activity without their knowledge?", a: "Keylogger", options: ["Keylogger", "Trojan Horse", "Virus", "Ransomware"] }

    ],
    quiz2: [
        { q: "What is the main purpose of a VPN?", a: "To secure communication over a public network", options: ["To secure communication over a public network", "To speed up internet connections", "To provide backup solutions", "To encrypt files at rest"] },
        { q: "Which attack involves sending an overwhelming amount of traffic to a target?", a: "Denial of Service (DoS)", options: ["Denial of Service (DoS)", "SQL Injection", "Cross-Site Scripting (XSS)", "Phishing"] },
        // Add more questions here for quiz2
		{ q: "What is the primary purpose of a security policy in an organization?", 
		  a: "To establish a framework for protecting organizational assets", 
		  options: ["To define security requirements for the network", "To outline procedures for incident response", "To establish a framework for protecting organizational assets", "To monitor employee compliance with security controls"] 
		},
		{ q: "Which of the following is a key component of a risk management program?", 
		  a: "Risk assessment", 
		  options: ["Risk assessment", "Network segmentation", "Incident response", "Data encryption"] 
		},
		{ q: "What does the term 'compliance' refer to in the context of security management?", 
		  a: "Adhering to legal and regulatory requirements", 
		  options: ["Adhering to legal and regulatory requirements", "Implementing advanced security technologies", "Monitoring network traffic for anomalies", "Conducting regular security audits"] 
		},
		{ q: "Which standard is commonly used to guide information security management systems?", 
		  a: "ISO/IEC 27001", 
		  options: ["ISO/IEC 27001", "NIST SP 800-53", "COBIT 5", "PCI-DSS"] 
		},
		{ q: "What is the purpose of an incident response plan (IRP)?", 
		  a: "To outline steps for responding to security incidents", 
		  options: ["To identify potential security threats", "To outline steps for responding to security incidents", "To manage security compliance", "To document network architecture"] 
		},
		{ q: "What role does a security governance framework play in an organization?", 
		  a: "It defines roles, responsibilities, and policies for managing security", 
		  options: ["It provides guidelines for implementing security technologies", "It defines roles, responsibilities, and policies for managing security", "It outlines procedures for backup and recovery", "It monitors network traffic for threats"] 
		},
		{ q: "Which of the following best describes the concept of 'risk appetite'?", 
		  a: "The level of risk an organization is willing to accept", 
		  options: ["The level of risk an organization is willing to accept", "The amount of risk that can be transferred to a third party", "The degree of security controls implemented", "The budget allocated for security measures"] 
		},
		{ q: "What is the purpose of a Business Continuity Plan (BCP)?", 
		  a: "To ensure critical business functions can continue during a disaster", 
		  options: ["To prevent data breaches", "To ensure critical business functions can continue during a disaster", "To manage user access to systems", "To monitor and respond to security incidents"] 
		},
		{ q: "Which term refers to the process of identifying and evaluating security threats and vulnerabilities?", 
		  a: "Risk assessment", 
		  options: ["Risk assessment", "Security monitoring", "Incident management", "Threat intelligence"] 
		},
		{ q: "What does 'due diligence' involve in the context of security management?", 
		  a: "Ensuring compliance with legal and regulatory requirements", 
		  options: ["Implementing security controls as per industry best practices", "Performing regular vulnerability scans", "Ensuring compliance with legal and regulatory requirements", "Conducting employee security awareness training"] 
		},
		{ q: "What is the main objective of security awareness training for employees?", 
		  a: "To inform employees about security threats and best practices", 
		  options: ["To teach technical skills for managing security tools", "To inform employees about security threats and best practices", "To evaluate the effectiveness of security controls", "To ensure compliance with regulatory standards"] 
		},
		{ q: "What does 'confidentiality' in the CIA triad stand for?", 
		  a: "Ensuring that data is only accessible to authorized individuals", 
		  options: ["Ensuring that data is only accessible to authorized individuals", "Ensuring data integrity and accuracy", "Ensuring that data is available when needed", "Ensuring that data is encrypted"] 
		},
		{ q: "Which security framework focuses on risk management and is used for IT governance?", 
		  a: "COBIT", 
		  options: ["COBIT", "NIST Cybersecurity Framework", "ISO/IEC 27001", "PCI-DSS"] 
		},
		{ q: "What is a 'vulnerability assessment'?", 
		  a: "A method of identifying weaknesses in systems and applications", 
		  options: ["A process of evaluating the potential impact of security threats", "A method of identifying weaknesses in systems and applications", "A technique for monitoring network performance", "A strategy for managing compliance with security policies"] 
		},
		{ q: "Which of the following is a proactive approach to managing security risks?", 
		  a: "Risk assessment", 
		  options: ["Incident response", "Risk assessment", "Security monitoring", "Security awareness training"] 
		},
		{ q: "What is the primary goal of security policy enforcement?", 
		  a: "To ensure compliance with security policies and procedures", 
		  options: ["To ensure compliance with security policies and procedures", "To implement new security technologies", "To conduct regular security audits", "To monitor network traffic for suspicious activities"] 
		},
		{ q: "Which standard is used for assessing the security of a payment card environment?", 
		  a: "PCI-DSS", 
		  options: ["PCI-DSS", "ISO/IEC 27001", "NIST SP 800-53", "COBIT 5"] 
		},
		{ q: "What is the role of a Chief Information Security Officer (CISO)?", 
		  a: "To oversee and direct the organization's security program", 
		  options: ["To manage IT infrastructure", "To oversee and direct the organization's security program", "To perform technical security assessments", "To develop marketing strategies"] 
		},
		{ q: "What is 'risk tolerance'?", 
		  a: "The level of risk an organization is willing to accept without additional controls", 
		  options: ["The level of risk an organization is willing to accept without additional controls", "The extent to which risks can be transferred to external parties", "The process of identifying and mitigating security threats", "The measures taken to ensure data confidentiality"] 
		},
		{ q: "What does 'data integrity' refer to?", 
		  a: "Ensuring that data is accurate and consistent", 
		  options: ["Ensuring that data is accurate and consistent", "Ensuring that data is encrypted", "Ensuring that data is available when needed", "Ensuring that data is only accessible to authorized users"] 
		},
		{ q: "Which of the following is an example of a preventive control?", 
		  a: "Antivirus software", 
		  options: ["Intrusion detection system", "Antivirus software", "Incident response plan", "Backup and recovery procedures"] 
		},
		{ q: "What is the purpose of a security audit?", 
		  a: "To assess the effectiveness of security controls and policies", 
		  options: ["To assess the effectiveness of security controls and policies", "To monitor real-time security threats", "To implement new security technologies", "To train employees on security best practices"] 
		},
		{ q: "Which of the following best describes 'incident management'?", 
		  a: "The process of handling and responding to security incidents", 
		  options: ["The process of handling and responding to security incidents", "The process of identifying and evaluating security risks", "The implementation of security technologies", "The development of security policies"] 
		},
		{ q: "What is the primary focus of security compliance?", 
		  a: "Adhering to regulatory requirements and industry standards", 
		  options: ["Adhering to regulatory requirements and industry standards", "Implementing new security technologies", "Conducting regular security training", "Monitoring network performance"] 
		},
		{ q: "What is 'business impact analysis' (BIA)?", 
		  a: "A process of assessing the potential impact of disruptions to business operations", 
		  options: ["A process of assessing the potential impact of disruptions to business operations", "A method of identifying security vulnerabilities", "A technique for monitoring network traffic", "A strategy for managing security incidents"] 
		},
		{ q: "Which framework provides a set of best practices for IT governance and management?", 
		  a: "COBIT", 
		  options: ["COBIT", "ISO/IEC 27001", "NIST Cybersecurity Framework", "PCI-DSS"] 
		},
		{ q: "What is the purpose of a risk register?", 
		  a: "To document and track identified risks and their mitigation strategies", 
		  options: ["To document and track identified risks and their mitigation strategies", "To monitor real-time security threats", "To evaluate the effectiveness of security controls", "To implement new security technologies"] 
		},
		{ q: "Which of the following is an example of a detective control?", 
		  a: "Security cameras", 
		  options: ["Security cameras", "Firewalls", "Encryption", "Access controls"] 
		},
		{ q: "What does 'availability' in the CIA triad refer to?", 
		  a: "Ensuring that data and systems are accessible when needed", 
		  options: ["Ensuring that data and systems are accessible when needed", "Ensuring data integrity and accuracy", "Ensuring that data is protected from unauthorized access", "Ensuring that data is encrypted"] 
		},
		{ q: "What is a 'security baseline'?", 
		  a: "A set of minimum security standards that must be met", 
		  options: ["A set of minimum security standards that must be met", "A collection of advanced security features", "A document outlining security policies", "A tool for monitoring network traffic"] 
		},
		{ q: "What is the purpose of a vulnerability management program?", 
		  a: "To identify, assess, and mitigate security vulnerabilities", 
		  options: ["To identify, assess, and mitigate security vulnerabilities", "To monitor network performance", "To ensure regulatory compliance", "To manage incident response procedures"] 
		},
		{ q: "What does 'risk assessment' involve?", 
		  a: "Identifying and evaluating risks to organizational assets", 
		  options: ["Identifying and evaluating risks to organizational assets", "Implementing security controls", "Monitoring network traffic", "Conducting security awareness training"] 
		},
		{ q: "Which document outlines the steps to be taken in response to a security incident?", 
		  a: "Incident response plan", 
		  options: ["Incident response plan", "Business continuity plan", "Security policy", "Risk management plan"] 
		},
		{ q: "What is 'security posture'?", 
		  a: "The overall security status of an organization", 
		  options: ["The overall security status of an organization", "The process of training employees on security", "The level of compliance with security policies", "The effectiveness of security technologies"] 
		},
		{ q: "What is a 'contingency plan'?", 
		  a: "A plan to ensure continuity of operations in case of an unexpected event", 
		  options: ["A plan to ensure continuity of operations in case of an unexpected event", "A strategy for preventing security breaches", "A document detailing security controls", "A procedure for conducting security audits"] 
		},
		{ q: "Which term refers to the process of assessing potential threats to information assets?", 
		  a: "Threat modeling", 
		  options: ["Threat modeling", "Incident response", "Vulnerability assessment", "Risk assessment"] 
		},
		{ q: "What is the purpose of a security metrics program?", 
		  a: "To measure and evaluate the effectiveness of security controls", 
		  options: ["To measure and evaluate the effectiveness of security controls", "To implement new security technologies", "To manage compliance with security policies", "To conduct security awareness training"] 
		},
		{ q: "What does 'incident response' involve?", 
		  a: "Handling and managing the aftermath of a security breach or attack", 
		  options: ["Handling and managing the aftermath of a security breach or attack", "Assessing and mitigating security risks", "Implementing security technologies", "Developing security policies"] 
		},
		{ q: "Which of the following is a key component of an effective security awareness program?", 
		  a: "Regular training sessions for employees", 
		  options: ["Regular training sessions for employees", "Advanced security tools", "Intrusion detection systems", "Compliance audits"] 
		},
		{ q: "What does 'penetration testing' involve?", 
		  a: "Simulating attacks to identify vulnerabilities in systems", 
		  options: ["Simulating attacks to identify vulnerabilities in systems", "Monitoring network traffic for security threats", "Assessing the effectiveness of security controls", "Implementing new security measures"] 
		},
		{ q: "What is 'security incident'?", 
		  a: "An event that threatens the confidentiality, integrity, or availability of information", 
		  options: ["An event that threatens the confidentiality, integrity, or availability of information", "A potential threat to organizational assets", "A violation of security policies", "A security control failure"] 
		},
		{ q: "Which of the following best describes 'access control'?", 
		  a: "Managing who can view or use resources in a computing environment", 
		  options: ["Managing who can view or use resources in a computing environment", "Detecting and responding to security incidents", "Ensuring data is encrypted", "Backing up data to prevent loss"] 
		},
		{ q: "What is 'data classification'?", 
		  a: "The process of categorizing data based on its sensitivity and importance", 
		  options: ["The process of categorizing data based on its sensitivity and importance", "The method of securing data using encryption", "The practice of monitoring data access", "The procedure for conducting data backups"] 
		},
		{ q: "Which standard is designed to help organizations secure their cloud environments?", 
		  a: "CSA Cloud Controls Matrix", 
		  options: ["CSA Cloud Controls Matrix", "ISO/IEC 27001", "PCI-DSS", "COBIT"] 
		},
		],
		quiz3: [
				{ q: "What does SDN stand for?", a: "Software-defined Networking", options: ["Software-defined Networking", "Software Development Network", "System-defined Networking", "System Development Network"] },
		{ q: "What does SE Linux stand for?", a: "Security-enhanced Linux", options: ["Security-enhanced Linux", "Secure Enterprise Linux", "System-encrypted Linux", "Standard Enhanced Linux"] },
		{ q: "What does SED stand for?", a: "Self-encrypting Drives", options: ["Self-encrypting Drives", "Secure Encrypted Drives", "Self-encryption Device", "System-encrypting Drive"] },
		{ q: "What does SEH stand for?", a: "Structured Exception Handler", options: ["Structured Exception Handler", "System Exception Handler", "Security Exception Handler", "Standard Exception Handler"] },
		{ q: "What does SFTP stand for?", a: "Secure File Transfer Protocol", options: ["Secure File Transfer Protocol", "Simple File Transfer Protocol", "Standard File Transfer Protocol", "Secured File Transfer Protocol"] },
		{ q: "What does SHA stand for?", a: "Secure Hash Algorithm", options: ["Secure Hash Algorithm", "Standard Hash Algorithm", "System Hash Algorithm", "Simple Hash Algorithm"] },
		{ q: "What does SHTTP stand for?", a: "Secure Hypertext Transfer Protocol", options: ["Secure Hypertext Transfer Protocol", "Standard Hypertext Transfer Protocol", "Simple Hypertext Transfer Protocol", "Secured Hypertext Transfer Protocol"] },
		{ q: "What does SIEM stand for?", a: "Security Information and Event Management", options: ["Security Information and Event Management", "System Information and Event Management", "Security Incident and Event Management", "Standard Information and Event Management"] },
		{ q: "What does SIM stand for?", a: "Subscriber Identity Module", options: ["Subscriber Identity Module", "System Identity Module", "Secure Identity Module", "Standard Identity Module"] },
		{ q: "What does SLA stand for?", a: "Service-level Agreement", options: ["Service-level Agreement", "System-level Agreement", "Security-level Agreement", "Standard-level Agreement"] },
		{ q: "What does SLE stand for?", a: "Single Loss Expectancy", options: ["Single Loss Expectancy", "System Loss Expectancy", "Security Loss Expectancy", "Standard Loss Expectancy"] },
		{ q: "What does SMS stand for?", a: "Short Message Service", options: ["Short Message Service", "Standard Messaging Service", "Simple Message Service", "Secure Messaging Service"] },
		{ q: "What does SMTP stand for?", a: "Simple Mail Transfer Protocol", options: ["Simple Mail Transfer Protocol", "Secure Mail Transfer Protocol", "Standard Mail Transfer Protocol", "System Mail Transfer Protocol"] },
		{ q: "What does SMTPS stand for?", a: "Simple Mail Transfer Protocol Secure", options: ["Simple Mail Transfer Protocol Secure", "Secure Mail Transfer Protocol", "Standard Mail Transfer Protocol Secure", "System Mail Transfer Protocol Secure"] },
		{ q: "What does SNMP stand for?", a: "Simple Network Management Protocol", options: ["Simple Network Management Protocol", "Secure Network Management Protocol", "Standard Network Management Protocol", "System Network Management Protocol"] },
		{ q: "What does SOAP stand for?", a: "Simple Object Access Protocol", options: ["Simple Object Access Protocol", "Standard Object Access Protocol", "Secure Object Access Protocol", "System Object Access Protocol"] },
		{ q: "What does SOAR stand for?", a: "Security Orchestration, Automation, and Response", options: ["Security Orchestration, Automation, and Response", "System Orchestration, Automation, and Response", "Secure Orchestration, Automation, and Response", "Standard Orchestration, Automation, and Response"] },
		{ q: "What does SoC stand for?", a: "System on Chip", options: ["System on Chip", "Secure on Chip", "Standard on Chip", "Service on Chip"] },
		{ q: "What does SOC stand for?", a: "Security Operations Center", options: ["Security Operations Center", "System Operations Center", "Secure Operations Center", "Standard Operations Center"] },
		{ q: "What does SOW stand for?", a: "Statement of Work", options: ["Statement of Work", "System of Work", "Secure of Work", "Standard of Work"] },
		{ q: "What does SPF stand for?", a: "Sender Policy Framework", options: ["Sender Policy Framework", "Secure Policy Framework", "System Policy Framework", "Standard Policy Framework"] },
		{ q: "What does SPIM stand for?", a: "Spam over Internet Messaging", options: ["Spam over Internet Messaging", "Secure Protocol Internet Messaging", "Standard Protocol Internet Messaging", "System Protocol Internet Messaging"] },
		{ q: "What does SQL stand for?", a: "Structured Query Language", options: ["Structured Query Language", "Standard Query Language", "System Query Language", "Simple Query Language"] },
		{ q: "What does SQLi stand for?", a: "SQL Injection", options: ["SQL Injection", "System Query Injection", "Secure Query Injection", "Standard Query Injection"] },
		{ q: "What does SRTP stand for?", a: "Secure Real-Time Protocol", options: ["Secure Real-Time Protocol", "Standard Real-Time Protocol", "System Real-Time Protocol", "Secure Routing Time Protocol"] },
		{ q: "What does SSD stand for?", a: "Solid State Drive", options: ["Solid State Drive", "Secure State Drive", "Standard State Drive", "System State Drive"] },
		{ q: "What does SSH stand for?", a: "Secure Shell", options: ["Secure Shell", "Standard Shell", "System Shell", "Simple Shell"] },
		{ q: "What does SSL stand for?", a: "Secure Sockets Layer", options: ["Secure Sockets Layer", "Standard Sockets Layer", "System Sockets Layer", "Simple Sockets Layer"] },
		{ q: "What does SSO stand for?", a: "Single Sign-on", options: ["Single Sign-on", "Secure Sign-on", "System Sign-on", "Simple Sign-on"] },
		{ q: "What does STIX stand for?", a: "Structured Threat Information eXchange", options: ["Structured Threat Information eXchange", "System Threat Information eXchange", "Secure Threat Information eXchange", "Standard Threat Information eXchange"] },
		{ q: "What does SWG stand for?", a: "Secure Web Gateway", options: ["Secure Web Gateway", "System Web Gateway", "Standard Web Gateway", "Secure Wide Gateway"] },
		{ q: "What does TACACS+ stand for?", a: "Terminal Access Controller Access-Control System", options: ["Terminal Access Controller Access-Control System", "Terminal Access Control and Security System", "Terminal Access Controller Access-Configuration System", "Terminal Access Control Access-Control System"] },
		{ q: "What does TAXII stand for?", a: "Trusted Automated eXchange of Indicator Information", options: ["Trusted Automated eXchange of Indicator Information", "Trusted Automated Exchange of Information Indicators", "Trusted Access Exchange of Indicator Information", "Trusted Automated Exchange of Information Interface"] },
		{ q: "What does TCP/IP stand for?", a: "Transmission Control Protocol/Internet Protocol", options: ["Transmission Control Protocol/Internet Protocol", "Transmission Communication Protocol/Internet Protocol", "Transmission Control Program/Internet Protocol", "Transmission Control Procedure/Internet Protocol"] },
		{ q: "What does TGT stand for?", a: "Ticket Granting Ticket", options: ["Ticket Granting Ticket", "Token Granting Ticket", "Transport Granting Ticket", "Transaction Granting Ticket"] },
		{ q: "What does TKIP stand for?", a: "Temporal Key Integrity Protocol", options: ["Temporal Key Integrity Protocol", "Transport Key Integrity Protocol", "Technical Key Integrity Protocol", "Transmission Key Integrity Protocol"] },
		{ q: "What does TLS stand for?", a: "Transport Layer Security", options: ["Transport Layer Security", "Transfer Layer Security", "Technical Layer Security", "Transmission Layer Security"] },
		{ q: "What does TOC stand for?", a: "Time-of-check", options: ["Time-of-check", "Time-of-change", "Time-of-completion", "Time-of-conversion"] },
		{ q: "What does TOTP stand for?", a: "Time-based One-time Password", options: ["Time-based One-time Password", "Token-based One-time Password", "Technical One-time Password", "Transaction One-time Password"] },
		{ q: "What does TOU stand for?", a: "Time-of-use", options: ["Time-of-use", "Technical-of-use", "Token-of-use", "Transfer-of-use"] },
		{ q: "What does TPM stand for?", a: "Trusted Platform Module", options: ["Trusted Platform Module", "Technical Platform Module", "Transport Platform Module", "Transactional Platform Module"] },
		{ q: "What does TTP stand for?", a: "Tactics, Techniques, and Procedures", options: ["Tactics, Techniques, and Procedures", "Tactical Techniques and Procedures", "Technical Tactics and Procedures", "Tactical Technologies and Procedures"] },
		{ q: "What does TSIG stand for?", a: "Transaction Signature", options: ["Transaction Signature", "Token Signature", "Technical Signature", "Transfer Signature"] },
		{ q: "What does UAT stand for?", a: "User Acceptance Testing", options: ["User Acceptance Testing", "User Assessment Testing", "Universal Acceptance Testing", "User Application Testing"] },
		{ q: "What does UAV stand for?", a: "Unmanned Aerial Vehicle", options: ["Unmanned Aerial Vehicle", "Unmanned Aircraft Vehicle", "Unified Aerial Vehicle", "Unmanned Autonomous Vehicle"] },
		{ q: "What does UDP stand for?", a: "User Datagram Protocol", options: ["User Datagram Protocol", "Universal Datagram Protocol", "Uniform Datagram Protocol", "Unified Datagram Protocol"] },
		{ q: "What does UEFI stand for?", a: "Unified Extensible Firmware Interface", options: ["Unified Extensible Firmware Interface", "Universal Extensible Firmware Interface", "Uniform Extensible Firmware Interface", "Unified Encrypted Firmware Interface"] },
		{ q: "What does UEM stand for?", a: "Unified Endpoint Management", options: ["Unified Endpoint Management", "Universal Endpoint Management", "Uniform Endpoint Management", "Unified Equipment Management"] },
		{ q: "What does UPS stand for?", a: "Uninterruptible Power Supply", options: ["Uninterruptible Power Supply", "Universal Power Supply", "Uninterrupted Power Supply", "Unified Power Supply"] },
		{ q: "What does URI stand for?", a: "Uniform Resource Identifier", options: ["Uniform Resource Identifier", "Universal Resource Identifier", "Uniform Resource Indicator", "Universal Resource Indicator"] },
		{ q: "What does URL stand for?", a: "Uniform Resource Locator", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"] },
		{ q: "What does USB stand for?", a: "Universal Serial Bus", options: ["Universal Serial Bus", "Uniform Serial Bus", "Unified Serial Bus", "Universal Service Bus"] },
		{ q: "What does USB OTG stand for?", a: "USB On-the-Go", options: ["USB On-the-Go", "Universal Service Bus On-the-Go", "Unified Serial Bus On-the-Go", "Universal Serial Bus On-the-Go"] },
		{ q: "What does UTM stand for?", a: "Unified Threat Management", options: ["Unified Threat Management", "Universal Threat Management", "Uniform Threat Management", "Unified Technology Management"] },
		{ q: "What does UTP stand for?", a: "Unshielded Twisted Pair", options: ["Unshielded Twisted Pair", "Unified Twisted Pair", "Universal Twisted Pair", "Unshielded Transmission Pair"] },
		{ q: "What does VBA stand for?", a: "Visual Basic", options: ["Visual Basic", "Virtual Basic", "Variable Basic", "Version Basic"] },
		{ q: "What does VDE stand for?", a: "Virtual Desktop Environment", options: ["Virtual Desktop Environment", "Virtual Development Environment", "Virtual Device Environment", "Virtual Desktop Experience"] },
		{ q: "What does VDI stand for?", a: "Virtual Desktop Infrastructure", options: ["Virtual Desktop Infrastructure", "Virtual Development Infrastructure", "Virtual Device Infrastructure", "Virtual Desktop Interface"] },
		{ q: "What does VLAN stand for?", a: "Virtual Local Area Network", options: ["Virtual Local Area Network", "Virtual Link Access Network", "Virtual Local Access Network", "Virtual Layer Area Network"] },
		{ q: "What does VLSM stand for?", a: "Variable Length Subnet Masking", options: ["Variable Length Subnet Masking", "Variable Length Subnet Management", "Variable Length Subnet Mapping", "Variable Layer Subnet Masking"] },
		{ q: "What does VM stand for?", a: "Virtual Machine", options: ["Virtual Machine", "Virtual Module", "Variable Machine", "Version Machine"] },
		{ q: "What does VoIP stand for?", a: "Voice over IP", options: ["Voice over IP", "Voice over Internet Protocol", "Voice on IP", "Voice over Integrated Protocol"] },
		{ q: "What does VPC stand for?", a: "Virtual Private Cloud", options: ["Virtual Private Cloud", "Virtual Protected Cloud", "Virtual Public Cloud", "Virtual Private Connection"] },
		{ q: "What does VPN stand for?", a: "Virtual Private Network", options: ["Virtual Private Network", "Virtual Protected Network", "Virtual Public Network", "Virtual Protocol Network"] },
		{ q: "What does VTC stand for?", a: "Video Teleconferencing", options: ["Video Teleconferencing", "Virtual Teleconferencing", "Voice Teleconferencing", "Video Terminal Communication"] },
		{ q: "What does WAF stand for?", a: "Web Application Firewall", options: ["Web Application Firewall", "Web Access Firewall", "Web Authentication Firewall", "Web Application Filter"] },
		{ q: "What does WAP stand for?", a: "Wireless Access Point", options: ["Wireless Access Point", "Wide Access Point", "Web Access Point", "Wired Access Point"] },
		{ q: "What does WEP stand for?", a: "Wired Equivalent Privacy", options: ["Wired Equivalent Privacy", "Wireless Encryption Protocol", "Wireless Equivalent Privacy", "Wired Encryption Protocol"] },
		{ q: "What does WIDS stand for?", a: "Wireless Intrusion Detection System", options: ["Wireless Intrusion Detection System", "Wireless Intrusion Defense System", "Wireless Intrusion Detection Service", "Wide Intrusion Detection System"] },
		{ q: "What does WIPS stand for?", a: "Wireless Intrusion Prevention System", options: ["Wireless Intrusion Prevention System", "Wireless Intrusion Protection System", "Wireless Intrusion Prevention Service", "Wide Intrusion Prevention System"] },
		{ q: "What does WO stand for?", a: "Work Order", options: ["Work Order", "Workflow Order", "Wide Order", "Web Order"] },
		{ q: "What does WPA stand for?", a: "Wi-Fi Protected Access", options: ["Wi-Fi Protected Access", "Wireless Protected Access", "Wi-Fi Privacy Access", "Wireless Privacy Access"] },
		{ q: "What does WPS stand for?", a: "Wi-Fi Protected Setup", options: ["Wi-Fi Protected Setup", "Wireless Protected Setup", "Wi-Fi Privacy Setup", "Wireless Privacy Setup"] },
		{ q: "What does WTLS stand for?", a: "Wireless TLS", options: ["Wireless TLS", "Web TLS", "Wide TLS", "Wireless Transport Layer Security"] },
		{ q: "What does XDR stand for?", a: "Extended Detection and Response", options: ["Extended Detection and Response", "External Detection and Response", "Extended Data and Response", "External Data and Response"] },
		{ q: "What does XML stand for?", a: "Extensible Markup Language", options: ["Extensible Markup Language", "Extended Markup Language", "External Markup Language", "Executable Markup Language"] },
		{ q: "What does XOR stand for?", a: "Exclusive Or", options: ["Exclusive Or", "External Or", "Extended Or", "Extra Or"] },
		{ q: "What does XSRF stand for?", a: "Cross-site Request Forgery", options: ["Cross-site Request Forgery", "Cross-site Resource Forgery", "Cross-system Request Forgery", "Cross-site Response Forgery"] },
		{ q: "What does XSS stand for?", a: "Cross-site Scripting", options: ["Cross-site Scripting", "Cross-system Scripting", "Cross-site Security", "Cross-server Scripting"] },
		{ q: "What does MTTR stand for?", a: "Mean Time to Recover", options: ["Mean Time to Recover", "Mean Time to Repair", "Maximum Time to Repair", "Minimum Time to Recover"] },
		{ q: "What does MTU stand for?", a: "Maximum Transmission Unit", options: ["Maximum Transmission Unit", "Minimum Transmission Unit", "Media Transmission Unit", "Maximum Transfer Unit"] },
		{ q: "What does NAC stand for?", a: "Network Access Control", options: ["Network Access Control", "Network Authorization Control", "Network Authentication Control", "Network Access Configuration"] },
		{ q: "What does NAT stand for?", a: "Network Address Translation", options: ["Network Address Translation", "Network Authorization Translation", "Network Access Translation", "Network Address Transfer"] },
		{ q: "What does NDA stand for?", a: "Non-disclosure Agreement", options: ["Non-disclosure Agreement", "Non-disclosure Arrangement", "Non-disclosure Accord", "Non-disclosure Assent"] },
		{ q: "What does NFC stand for?", a: "Near Field Communication", options: ["Near Field Communication", "Network Field Communication", "Near Frequency Communication", "Near Functional Communication"] },
		{ q: "What does NGFW stand for?", a: "Next-generation Firewall", options: ["Next-generation Firewall", "Networked Gateway Firewall", "Next-grade Firewall", "New-generation Firewall"] },
		{ q: "What does NIDS stand for?", a: "Network-based Intrusion Detection System", options: ["Network-based Intrusion Detection System", "Network Intrusion Detection System", "Network Integrated Detection System", "Network-based Incident Detection System"] },
		{ q: "What does NIPS stand for?", a: "Network-based Intrusion Prevention System", options: ["Network-based Intrusion Prevention System", "Network Intrusion Prevention System", "Network Integrated Prevention System", "Network-based Incident Prevention System"] },
		{ q: "What does NIST stand for?", a: "National Institute of Standards & Technology", options: ["National Institute of Standards & Technology", "National Institute of Security & Technology", "National Institute of Statistics & Technology", "National Institute of Science & Technology"] },
		{ q: "What does NTFS stand for?", a: "New Technology File System", options: ["New Technology File System", "New Technology Format System", "New Transfer File System", "Next Technology File System"] },
		{ q: "What does NTLM stand for?", a: "New Technology LAN Manager", options: ["New Technology LAN Manager", "New Technology Local Manager", "New Technical LAN Manager", "New Trusted LAN Manager"] },
		{ q: "What does NTP stand for?", a: "Network Time Protocol", options: ["Network Time Protocol", "Network Transfer Protocol", "Network Transport Protocol", "Network Timing Protocol"] },
		{ q: "What does OAUTH stand for?", a: "Open Authorization", options: ["Open Authorization", "Open Access", "Open Authentication", "Open Authorization Access"] },
		{ q: "What does OCSP stand for?", a: "Online Certificate Status Protocol", options: ["Online Certificate Status Protocol", "Online Certificate Security Protocol", "Online Certification Status Protocol", "Online Certification Security Protocol"] },
		{ q: "What does OID stand for?", a: "Object Identifier", options: ["Object Identifier", "Object Identification", "Object ID", "Object Identity"] },
		{ q: "What does OS stand for?", a: "Operating System", options: ["Operating System", "Open Source", "Online System", "Operational Service"] },
		{ q: "What does OSINT stand for?", a: "Open-source Intelligence", options: ["Open-source Intelligence", "Operational Security Intelligence", "Open-source Information", "Operational Source Intelligence"] },
		{ q: "What does OSPF stand for?", a: "Open Shortest Path First", options: ["Open Shortest Path First", "Open Security Path First", "Operational Shortest Path First", "Open Standard Path First"] },
		{ q: "What does OT stand for?", a: "Operational Technology", options: ["Operational Technology", "Operational Tool", "Operational Test", "Operational Trend"] },
		{ q: "What does OTA stand for?", a: "Over the Air", options: ["Over the Air", "Over the Application", "Open the Air", "Over the Area"] },
		{ q: "What does OVAL stand for?", a: "Open Vulnerability Assessment Language", options: ["Open Vulnerability Assessment Language", "Operational Vulnerability Assessment Language", "Open Validation Assessment Language", "Operational Validation Assessment Language"] },
		{ q: "What does P12 stand for?", a: "PKCS #12", options: ["PKCS #12", "Public Key Certificate", "Private Key Certificate", "Public Key Code Signing"] },
		{ q: "What does P2P stand for?", a: "Peer to Peer", options: ["Peer to Peer", "Private to Private", "Public to Public", "Personal to Personal"] },
		{ q: "What does PaaS stand for?", a: "Platform as a Service", options: ["Platform as a Service", "Platform and Service", "Private as a Service", "Platform and Security"] },
		{ q: "What does PAC stand for?", a: "Proxy Auto Configuration", options: ["Proxy Auto Configuration", "Public Access Configuration", "Private Access Configuration", "Protocol Access Configuration"] },
		{ q: "What does PAM stand for?", a: "Privileged Access Management", options: ["Privileged Access Management", "Pluggable Authentication Modules", "Public Access Management", "Privileged Application Management"] },
		{ q: "What does PAM stand for?", a: "Pluggable Authentication Modules", options: ["Pluggable Authentication Modules", "Privileged Access Management", "Public Authentication Modules", "Pluggable Application Modules"] },
		{ q: "What does PAP stand for?", a: "Password Authentication Protocol", options: ["Password Authentication Protocol", "Public Authentication Protocol", "Password Access Protocol", "Password Application Protocol"] },
		{ q: "What does PAT stand for?", a: "Port Address Translation", options: ["Port Address Translation", "Protocol Address Translation", "Private Address Translation", "Public Address Translation"] },
		{ q: "What does PBKDF2 stand for?", a: "Password-based Key Derivation Function 2", options: ["Password-based Key Derivation Function 2", "Password-based Key Design Function 2", "Password-based Key Distribution Function 2", "Password-based Key Definition Function 2"] },
		{ q: "What does PBX stand for?", a: "Private Branch Exchange", options: ["Private Branch Exchange", "Public Branch Exchange", "Personal Branch Exchange", "Public Base Exchange"] },
		{ q: "What does PCAP stand for?", a: "Packet Capture", options: ["Packet Capture", "Protocol Capture", "Packet Control", "Protocol Control"] },
		{ q: "What does PCI DSS stand for?", a: "Payment Card Industry Data Security Standard", options: ["Payment Card Industry Data Security Standard", "Payment Card Integrated Data Security Standard", "Payment Card Information Data Security Standard", "Payment Card Internet Data Security Standard"] },
		{ q: "What does PDU stand for?", a: "Power Distribution Unit", options: ["Power Distribution Unit", "Power Delivery Unit", "Power Device Unit", "Power Data Unit"] },
		{ q: "What does PEAP stand for?", a: "Protected Extensible Authentication Protocol", options: ["Protected Extensible Authentication Protocol", "Public Extensible Authentication Protocol", "Private Extensible Authentication Protocol", "Protected Enhanced Authentication Protocol"] },
		{ q: "What does PED stand for?", a: "Personal Electronic Device", options: ["Personal Electronic Device", "Public Electronic Device", "Private Electronic Device", "Portable Electronic Device"] },
		{ q: "What does PEM stand for?", a: "Privacy Enhanced Mail", options: ["Privacy Enhanced Mail", "Private Enhanced Mail", "Public Enhanced Mail", "Protected Enhanced Mail"] },
		{ q: "What does PFS stand for?", a: "Perfect Forward Secrecy", options: ["Perfect Forward Secrecy", "Perfect Forward Security", "Public Forward Secrecy", "Private Forward Secrecy"] },
		{ q: "What does PGP stand for?", a: "Pretty Good Privacy", options: ["Pretty Good Privacy", "Private Good Privacy", "Public Good Privacy", "Protected Good Privacy"] },
		{ q: "What does PHI stand for?", a: "Personal Health Information", options: ["Personal Health Information", "Personal High Information", "Public Health Information", "Protected Health Information"] },
		{ q: "What does PII stand for?", a: "Personally Identifiable Information", options: ["Personally Identifiable Information", "Personal Identification Information", "Private Identifiable Information", "Publicly Identifiable Information"] },
		{ q: "What does PIV stand for?", a: "Personal Identity Verification", options: ["Personal Identity Verification", "Private Identity Verification", "Public Identity Verification", "Personal Information Verification"] },
		{ q: "What does PKCS stand for?", a: "Public Key Cryptography Standards", options: ["Public Key Cryptography Standards", "Private Key Cryptography Standards", "Public Knowledge Cryptography Standards", "Private Knowledge Cryptography Standards"] },
		{ q: "What does PKI stand for?", a: "Public Key Infrastructure", options: ["Public Key Infrastructure", "Private Key Infrastructure", "Public Knowledge Infrastructure", "Private Knowledge Infrastructure"] },
		{ q: "What does POP stand for?", a: "Post Office Protocol", options: ["Post Office Protocol", "Public Office Protocol", "Private Office Protocol", "Post Office Procedure"] },
		{ q: "What does POTS stand for?", a: "Plain Old Telephone Service", options: ["Plain Old Telephone Service", "Private Old Telephone Service", "Public Old Telephone Service", "Plain Original Telephone Service"] },
		{ q: "What does PPP stand for?", a: "Point-to-Point Protocol", options: ["Point-to-Point Protocol", "Private-to-Private Protocol", "Public-to-Public Protocol", "Point-to-Point Procedure"] },
		{ q: "What does PPTP stand for?", a: "Point-to-Point Tunneling Protocol", options: ["Point-to-Point Tunneling Protocol", "Private-to-Private Tunneling Protocol", "Public-to-Public Tunneling Protocol", "Point-to-Point Transfer Protocol"] },
		{ q: "What does PSK stand for?", a: "Pre-shared Key", options: ["Pre-shared Key", "Public Shared Key", "Private Shared Key", "Pre-set Key"] },
		{ q: "What does PTZ stand for?", a: "Pan-tilt-zoom", options: ["Pan-tilt-zoom", "Pan-to-zoom", "Position-to-zoom", "Pan-and-tilt-zoom"] },
		{ q: "What does PUP stand for?", a: "Potentially Unwanted Program", options: ["Potentially Unwanted Program", "Potentially Unnecessary Program", "Potentially Unsecure Program", "Potentially Unidentified Program"] },
		{ q: "What does RA stand for?", a: "Recovery Agent", options: ["Recovery Agent", "Registration Authority", "Remediation Agent", "Risk Assessor"] },
		{ q: "What does RA stand for?", a: "Registration Authority", options: ["Registration Authority", "Recovery Agent", "Remediation Authority", "Risk Assessor"] },
		{ q: "What does RACE stand for?", a: "Research and Development in Advanced Communications Technologies in Europe", options: ["Research and Development in Advanced Communications Technologies in Europe", "Research and Analysis in Communication Technologies in Europe", "Regional and Communication Engineering in Europe", "Research and Application of Communication Technologies in Europe"] },
		{ q: "What does RAID stand for?", a: "Redundant Array of Independent Disks", options: ["Redundant Array of Independent Disks", "Redundant Access of Independent Disks", "Redundant Allocation of Independent Disks", "Redundant Array of Inexpensive Disks"] },
		{ q: "What does RAM stand for?", a: "Random Access Memory", options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Reversible Access Memory"] },
		{ q: "What does RARP stand for?", a: "Reverse Address Resolution Protocol", options: ["Reverse Address Resolution Protocol", "Rapid Address Resolution Protocol", "Remote Address Resolution Protocol", "Real-time Address Resolution Protocol"] },
		{ q: "What does RDP stand for?", a: "Remote Desktop Protocol", options: ["Remote Desktop Protocol", "Remote Data Protocol", "Remote Development Protocol", "Remote Display Protocol"] },
		{ q: "What does RFC stand for?", a: "Request for Comments", options: ["Request for Comments", "Request for Communication", "Report for Comments", "Request for Configuration"] },
		{ q: "What does RFI stand for?", a: "Request for Information", options: ["Request for Information", "Request for Input", "Report for Information", "Request for Inquiry"] },
		{ q: "What does RFQ stand for?", a: "Request for Quotation", options: ["Request for Quotation", "Request for Quote", "Request for Qualification", "Report for Quotation"] },
		{ q: "What does ROI stand for?", a: "Return on Investment", options: ["Return on Investment", "Return on Interest", "Return on Innovation", "Revenue on Investment"] },
		{ q: "What does RPO stand for?", a: "Recovery Point Objective", options: ["Recovery Point Objective", "Recovery Process Objective", "Recovery Performance Objective", "Recovery Point Option"] },
		{ q: "What does RTO stand for?", a: "Recovery Time Objective", options: ["Recovery Time Objective", "Recovery Target Objective", "Recovery Time Option", "Recovery Transfer Objective"] },
		{ q: "What does SaaS stand for?", a: "Software as a Service", options: ["Software as a Service", "Software and Service", "System as a Service", "Security as a Service"] },
		{ q: "What does SAN stand for?", a: "Storage Area Network", options: ["Storage Area Network", "System Area Network", "Server Area Network", "Storage Access Network"] },
		{ q: "What does SAP stand for?", a: "Systems, Applications, and Products", options: ["Systems, Applications, and Products", "Systems, Applications, and Processes", "Software, Applications, and Products", "Systems, Analysis, and Products"] },
		{ q: "What does SCADA stand for?", a: "Supervisory Control and Data Acquisition", options: ["Supervisory Control and Data Acquisition", "System Control and Data Acquisition", "Supervisory Command and Data Acquisition", "System Command and Data Acquisition"] },
		{ q: "What does SCAP stand for?", a: "Security Content Automation Protocol", options: ["Security Content Automation Protocol", "System Content Automation Protocol", "Security Configuration Automation Protocol", "System Configuration Automation Protocol"] },
		{ q: "What does SFTP stand for?", a: "Secure File Transfer Protocol", options: ["Secure File Transfer Protocol", "Secure File Transmission Protocol", "Simple File Transfer Protocol", "Secure File Transmission Procedure"] },
		{ q: "What does SIEM stand for?", a: "Security Information and Event Management", options: ["Security Information and Event Management", "Security Incident and Event Management", "System Information and Event Management", "Security Information and Equipment Management"] },
		{ q: "What does SIM stand for?", a: "Subscriber Identity Module", options: ["Subscriber Identity Module", "Subscriber Information Module", "Subscriber Identification Module", "Secure Identity Module"] },
		{ q: "What does SIP stand for?", a: "Session Initiation Protocol", options: ["Session Initiation Protocol", "Session Information Protocol", "Session Integration Protocol", "Session Interface Protocol"] },
		{ q: "What does SLA stand for?", a: "Service Level Agreement", options: ["Service Level Agreement", "Service Level Authorization", "Service Level Assessment", "Service Level Arrangement"] },
		{ q: "What does SMB stand for?", a: "Server Message Block", options: ["Server Message Block", "Server Management Block", "Server Module Block", "System Message Block"] },
		{ q: "What does SMTP stand for?", a: "Simple Mail Transfer Protocol", options: ["Simple Mail Transfer Protocol", "Secure Mail Transfer Protocol", "Simple Message Transfer Protocol", "Secure Message Transfer Protocol"] },
		{ q: "What does SNMP stand for?", a: "Simple Network Management Protocol", options: ["Simple Network Management Protocol", "Secure Network Management Protocol", "System Network Management Protocol", "Simple Network Monitoring Protocol"] },
		{ q: "What does SOAP stand for?", a: "Simple Object Access Protocol", options: ["Simple Object Access Protocol", "Secure Object Access Protocol", "Simple Online Access Protocol", "System Object Access Protocol"] },
		{ q: "What does SOC stand for?", a: "Security Operations Center", options: ["Security Operations Center", "Security Operations Command", "Security Online Center", "System Operations Center"] },
		{ q: "What does SoC stand for?", a: "System on a Chip", options: ["System on a Chip", "System of Chips", "Single Chip", "Software on a Chip"] },
		{ q: "What does SQL stand for?", a: "Structured Query Language", options: ["Structured Query Language", "Structured Question Language", "System Query Language", "Structured Quality Language"] },
		{ q: "What does SSH stand for?", a: "Secure Shell", options: ["Secure Shell", "Secure Socket Hub", "System Security Hub", "Secure Server Hub"] },
		{ q: "What does SSL stand for?", a: "Secure Sockets Layer", options: ["Secure Sockets Layer", "System Sockets Layer", "Secure Server Layer", "Secure Security Layer"] },
		{ q: "What does SSO stand for?", a: "Single Sign-On", options: ["Single Sign-On", "Single Security Option", "Single Session Option", "Secure Sign-On"] },
		{ q: "What does STP stand for?", a: "Spanning Tree Protocol", options: ["Spanning Tree Protocol", "System Tree Protocol", "Spanning Transport Protocol", "Standard Tree Protocol"] },
		{ q: "What does Syslog stand for?", a: "System Logging Protocol", options: ["System Logging Protocol", "System Log Protocol", "System Logging Procedure", "System Log Procedure"] },
		{ q: "What does TAA stand for?", a: "Trusted Access Authorization", options: ["Trusted Access Authorization", "Trusted Access Agreement", "Trusted Access Application", "Trusted Authentication Authorization"] },
		{ q: "What does TCO stand for?", a: "Total Cost of Ownership", options: ["Total Cost of Ownership", "Total Cost of Operations", "Total Cost of Optimization", "Total Cost of Options"] },
		{ q: "What does TDM stand for?", a: "Time Division Multiplexing", options: ["Time Division Multiplexing", "Time Data Multiplexing", "Telecom Data Multiplexing", "Time Distributed Multiplexing"] },
		{ q: "What does TFTP stand for?", a: "Trivial File Transfer Protocol", options: ["Trivial File Transfer Protocol", "Temporary File Transfer Protocol", "Trusted File Transfer Protocol", "Trivial File Transmission Protocol"] },
		{ q: "What does TLS stand for?", a: "Transport Layer Security", options: ["Transport Layer Security", "Transport Layer Service", "Technical Layer Security", "Transport Layer Standard"] },
		{ q: "What does TOTP stand for?", a: "Time-based One-Time Password", options: ["Time-based One-Time Password", "Token-based One-Time Password", "Temporary One-Time Password", "Time-oriented One-Time Password"] },
		{ q: "What does UPS stand for?", a: "Uninterruptible Power Supply", options: ["Uninterruptible Power Supply", "Uninterruptible Power Source", "Uninterrupted Power Supply", "Unified Power Supply"] },
		{ q: "What does URI stand for?", a: "Uniform Resource Identifier", options: ["Uniform Resource Identifier", "Universal Resource Identifier", "Uniform Resource Indicator", "Universal Resource Indicator"] },
		{ q: "What does URL stand for?", a: "Uniform Resource Locator", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"] },
		{ q: "What does USB stand for?", a: "Universal Serial Bus", options: ["Universal Serial Bus", "Uniform Serial Bus", "Unified Serial Bus", "Universal Service Bus"] },
		{ q: "What does USB OTG stand for?", a: "USB On-the-Go", options: ["USB On-the-Go", "Universal Service Bus On-the-Go", "Unified Serial Bus On-the-Go", "Universal Serial Bus On-the-Go"] },
		{ q: "What does UTM stand for?", a: "Unified Threat Management", options: ["Unified Threat Management", "Universal Threat Management", "Uniform Threat Management", "Unified Technology Management"] },
		{ q: "What does UTP stand for?", a: "Unshielded Twisted Pair", options: ["Unshielded Twisted Pair", "Unified Twisted Pair", "Universal Twisted Pair", "Unshielded Transmitted Pair"] },
		{ q: "What does UUID stand for?", a: "Universally Unique Identifier", options: ["Universally Unique Identifier", "Universal Unique Identifier", "Uniform Unique Identifier", "Universal User Identifier"] },
		{ q: "What does VLAN stand for?", a: "Virtual Local Area Network", options: ["Virtual Local Area Network", "Virtual Large Area Network", "Virtual Link Access Network", "Variable Local Area Network"] },
		{ q: "What does VPN stand for?", a: "Virtual Private Network", options: ["Virtual Private Network", "Virtual Public Network", "Variable Private Network", "Virtual Protected Network"] },
		{ q: "What does WAF stand for?", a: "Web Application Firewall", options: ["Web Application Firewall", "Web Access Firewall", "Web Authentication Firewall", "Web Analysis Firewall"] },
		{ q: "What does WEP stand for?", a: "Wired Equivalent Privacy", options: ["Wired Equivalent Privacy", "Wireless Equivalent Privacy", "Wired Enhanced Privacy", "Wireless Enhanced Privacy"] },
		{ q: "What does WPA stand for?", a: "Wi-Fi Protected Access", options: ["Wi-Fi Protected Access", "Wireless Protected Access", "Wi-Fi Privacy Access", "Wireless Privacy Access"] },
		{ q: "What does WPS stand for?", a: "Wi-Fi Protected Setup", options: ["Wi-Fi Protected Setup", "Wireless Protected Setup", "Wi-Fi Public Setup", "Wireless Public Setup"] }
		],
		quiz4: [
        // Guidelines
        { q: "What is the primary purpose of security guidelines in an organization?", a: "To provide broad recommendations for security practices.", options: ["To provide broad recommendations for security practices.", "To enforce specific security rules.", "To outline legal obligations.", "To define the organizational security structure."] },
        { q: "How do security guidelines differ from security policies?", a: "Guidelines are less formal and offer general advice, while policies are formal and enforceable.", options: ["Guidelines are less formal and offer general advice, while policies are formal and enforceable.", "Policies are more general, while guidelines are specific.", "Policies are optional, while guidelines are mandatory.", "Guidelines focus on legal issues, while policies focus on operational issues."] },

        // Policies
        { q: "What is the main purpose of an Acceptable Use Policy (AUP)?", a: "To define acceptable behavior when using organizational resources.", options: ["To define acceptable behavior when using organizational resources.", "To outline procedures for disaster recovery.", "To manage access control settings.", "To enforce encryption standards."] },
        { q: "Which policy focuses on maintaining operations during a disruptive event?", a: "Business Continuity Policy", options: ["Business Continuity Policy", "Incident Response Policy", "Disaster Recovery Policy", "Change Management Policy"] },
        { q: "What is a key component of the Incident Response Policy?", a: "Procedures for identifying and addressing security incidents.", options: ["Procedures for identifying and addressing security incidents.", "Rules for password creation.", "Guidelines for physical security.", "Standards for encryption."] },
        { q: "Why is incorporating the Software Development Lifecycle (SDLC) into security policies important?", a: "To ensure security is integrated throughout the development process.", options: ["To ensure security is integrated throughout the development process.", "To outline acceptable use of software.", "To define incident response procedures.", "To manage encryption standards."] },
        { q: "What does a Change Management Policy help manage?", a: "Changes to IT systems and infrastructure.", options: ["Changes to IT systems and infrastructure.", "User access rights.", "Incident response procedures.", "Data encryption standards."] },

        // Standards
        { q: "Which standard is essential for protecting sensitive data from unauthorized access?", a: "Access Control Standard", options: ["Access Control Standard", "Physical Security Standard", "Encryption Standard", "Password Standard"] },
        { q: "What does the Password Standard typically include?", a: "Requirements for password complexity and expiration.", options: ["Requirements for password complexity and expiration.", "Procedures for changing passwords.", "Guidelines for password sharing.", "Rules for password recovery."] },
        { q: "Why are Encryption Standards important?", a: "To protect data confidentiality and integrity during transmission and storage.", options: ["To protect data confidentiality and integrity during transmission and storage.", "To enforce physical security measures.", "To define access control mechanisms.", "To set password requirements."] },
        { q: "Which standard focuses on securing physical access to facilities?", a: "Physical Security Standard", options: ["Physical Security Standard", "Access Control Standard", "Encryption Standard", "Password Standard"] },

        // Procedures
        { q: "What is the purpose of Onboarding Procedures in security?", a: "To ensure new employees are properly introduced to security policies and practices.", options: ["To ensure new employees are properly introduced to security policies and practices.", "To manage system changes.", "To respond to security incidents.", "To handle data encryption."] },
        { q: "What should a Change Management Procedure include?", a: "Processes for assessing, approving, and implementing changes.", options: ["Processes for assessing, approving, and implementing changes.", "Steps for responding to incidents.", "Guidelines for physical security.", "Standards for encryption."] },
        { q: "What is a security Playbook?", a: "A documented set of procedures for handling specific security scenarios.", options: ["A documented set of procedures for handling specific security scenarios.", "A guideline for acceptable use of resources.", "A standard for password management.", "A policy for business continuity."] },

        // External Considerations
        { q: "How do Regulatory requirements impact security governance?", a: "They mandate specific security practices and compliance measures.", options: ["They mandate specific security practices and compliance measures.", "They are optional guidelines.", "They define internal security policies.", "They focus on global security standards."] },
        { q: "What role do Local/Regional security considerations play?", a: "They address specific security requirements and threats relevant to a particular geographic area.", options: ["They address specific security requirements and threats relevant to a particular geographic area.", "They set global security standards.", "They provide general security guidelines.", "They focus on industry-specific standards."] },

        // Monitoring and Revision
        { q: "Why is continuous monitoring crucial in security governance?", a: "To detect and respond to security threats in real-time.", options: ["To detect and respond to security threats in real-time.", "To establish initial security policies.", "To define encryption standards.", "To create incident response plans."] },
        { q: "What should be included in the revision process of security policies?", a: "Regular updates to address new threats and changes in regulations.", options: ["Regular updates to address new threats and changes in regulations.", "One-time initial setup.", "Periodic user training.", "Initial compliance checks."] },

        // Types of Governance Structures
        { q: "What distinguishes a Centralized governance structure from a Decentralized one?", a: "Centralized structures have a single point of authority, while Decentralized structures distribute authority.", options: ["Centralized structures have a single point of authority, while Decentralized structures distribute authority.", "Centralized structures are more flexible, while Decentralized structures are rigid.", "Centralized structures focus on local issues, while Decentralized structures focus on global issues.", "Centralized structures are less effective in handling incidents."] },
        { q: "Which governance structure often includes a board of directors overseeing security policies?", a: "Centralized Governance Structure", options: ["Centralized Governance Structure", "Decentralized Governance Structure", "Government Entities", "Committees"] },
        { q: "How do Committees contribute to security governance?", a: "By providing specialized oversight and recommendations on security issues.", options: ["By providing specialized oversight and recommendations on security issues.", "By enforcing global regulations.", "By managing incident responses.", "By defining encryption standards."] },
        { q: "What role do Government Entities play in security governance?", a: "They set regulations and standards that organizations must comply with.", options: ["They set regulations and standards that organizations must comply with.", "They implement internal security policies.", "They monitor security incidents.", "They handle change management."] },

        // Roles and Responsibilities for Systems and Data
        { q: "What is the primary responsibility of a Data Owner?", a: "To ensure that data is properly classified and protected.", options: ["To ensure that data is properly classified and protected.", "To handle day-to-day data operations.", "To respond to security incidents.", "To manage user access controls."] },
        { q: "What role does a Data Processor play?", a: "To process and handle data according to the policies set by Data Owners.", options: ["To process and handle data according to the policies set by Data Owners.", "To define data protection policies.", "To manage data encryption.", "To oversee data storage facilities."] },
        { q: "What are the duties of Custodians/Stewards?", a: "To manage and safeguard the data they are responsible for.", options: ["To manage and safeguard the data they are responsible for.", "To develop security policies.", "To monitor network traffic.", "To enforce incident response plans."] },

        // True/False Questions
        { q: "True or False: Guidelines are formal documents that enforce specific security practices.", a: "False", options: ["True", "False"] },
        { q: "True or False: A Disaster Recovery Policy is designed to ensure business operations continue during a disruptive event.", a: "False", options: ["True", "False"] },
        { q: "True or False: Encryption Standards focus on data confidentiality and integrity during storage and transmission.", a: "True", options: ["True", "False"] },
        { q: "True or False: Monitoring and revision processes are only needed when new security threats emerge.", a: "False", options: ["True", "False"] },
        { q: "True or False: In a Decentralized governance structure, authority is distributed across various units.", a: "True", options: ["True", "False"] },
        { q: "True or False: Incident Response Policies are not necessary if you have a well-defined Business Continuity Plan.", a: "False", options: ["True", "False"] },
        { q: "True or False: Access Control Standards are crucial for managing user permissions and protecting data.", a: "True", options: ["True", "False"] },
        { q: "True or False: Onboarding Procedures are only relevant for new employees with access to sensitive data.", a: "False", options: ["True", "False"] },
        { q: "True or False: Government Entities typically provide internal security policies for organizations.", a: "False", options: ["True", "False"] },
        { q: "True or False: Custodians/Stewards are responsible for managing data in accordance with policies set by Data Owners.", a: "True", options: ["True", "False"] }
		],
	
	//
		quiz5: [
  { q: "A process of verifying the identity of a user, system, or entity.", options: ["AAA", "AES", "AI", "AR"], a: "AAA" },
  { q: "A list used to control access to resources in a network.", options: ["BGP", "ACL", "API", "CASB"], a: "ACL" },
  { q: "A widely adopted standard for encrypting data.", options: ["AES", "AH", "CCTV", "CHAP"], a: "AES" },
  { q: "A variant of AES that uses 256-bit encryption.", options: ["AES-256", "ASLR", "BIA", "CAPTCHA"], a: "AES-256" },
  { q: "A protocol used to secure communications by adding headers.", options: ["AH", "CIR", "CMS", "CIRT"], a: "AH" },
  { q: "The simulation of human intelligence processes by machines, especially computer systems.", options: ["AI", "AV", "BGP", "COOP"], a: "AI" },
  { q: "Sharing of information about threats and indicators across organizations.", options: ["AIS", "BPDU", "CA", "CHAP"], a: "AIS" },
  { q: "An estimate of the potential losses due to a risk over a year.", options: ["ALE", "ASLR", "CCTV", "BYOD"], a: "ALE" },
  { q: "A device that allows wireless devices to connect to a wired network using Wi-Fi.", options: ["AP", "BIA", "CAR", "CIRT"], a: "AP" },
  { q: "A set of protocols and tools for building software applications.", options: ["API", "CCTV", "CHAP", "COOP"], a: "API" },
  { q: "A type of cyberattack in which an attacker maintains a long-term presence on a network.", options: ["APT", "AI", "BCP", "AES"], a: "APT" },
  { q: "The rate at which a specific threat is expected to occur annually.", options: ["ARO", "ASLR", "CAPTCHA", "CCMP"], a: "ARO" },
  { q: "A protocol used to map IP addresses to MAC addresses on a local network.", options: ["ARP", "BGP", "CIRT", "CMS"], a: "ARP" },
  { q: "A security technique that randomizes the location of system memory.", options: ["ASLR", "CASB", "CHAP", "CCTV"], a: "ASLR" },
  { q: "A framework for understanding and analyzing cyber adversaries.", options: ["ATT&CK", "API", "BIA", "CIR"], a: "ATT&CK" },
  { q: "A set of rules governing acceptable use of an organization’s network and resources.", options: ["AUP", "CASB", "CAR", "BASH"], a: "AUP" },
  { q: "Software designed to detect, prevent, and remove malware.", options: ["AV", "AES", "BGP", "BPDU"], a: "AV" },
  { q: "A Unix shell and command language that is a successor to the Bourne shell.", options: ["BASH", "BGP", "CMS", "API"], a: "BASH" },
  { q: "Planning and preparation to ensure an organization can continue operating during disruptions.", options: ["BCP", "BIA", "BYOD", "CA"], a: "BCP" },
  { q: "A protocol used to exchange routing information between different networks on the internet.", options: ["BGP", "BYOD", "CIRT", "CBC"], a: "BGP" },
  { q: "A process of assessing the impact of a disruption on an organization’s operations.", options: ["BIA", "BGP", "COOP", "CAPTCHA"], a: "BIA" },
  { q: "Firmware that initializes and tests hardware components during the startup of a computer.", options: ["BIOS", "AES", "AUP", "CERT"], a: "BIOS" },
  { q: "An agreement between business partners that outlines the terms of their business relationship.", options: ["BPA", "BGP", "BYOD", "CIRT"], a: "BPA" },
  { q: "A protocol used in network bridging to prevent loops.", options: ["BPDU", "BCP", "COOP", "CIRT"], a: "BPDU" },
  { q: "A policy that allows employees to use their personal devices for work purposes.", options: ["BYOD", "CASB", "CHAP", "CCMP"], a: "BYOD" },
  { q: "An entity responsible for issuing digital certificates.", options: ["CA", "CAR", "CBC", "CMS"], a: "CA" },
  { q: "A test designed to determine if the user is a human or a bot.", options: ["CAPTCHA", "CCTV", "CIRT", "CASB"], a: "CAPTCHA" },
  { q: "A report detailing actions taken to correct a problem.", options: ["CAR", "CHAP", "CCTV", "CMS"], a: "CAR" },
  { q: "A security service that helps organizations control and secure access to cloud services.", options: ["CASB", "BGP", "BIA", "CIRT"], a: "CASB" },
  { q: "A mode of encryption that combines plaintext with an initialization vector to produce ciphertext.", options: ["CBC", "AES", "AI", "CIR"], a: "CBC" },
  { q: "A protocol that provides confidentiality, integrity, and authentication for wireless networks.", options: ["CCMP", "CHAP", "BASH", "API"], a: "CCMP" },
  { q: "A surveillance system that uses cameras to monitor and record activities.", options: ["CCTV", "CAR", "BGP", "AES"], a: "CCTV" },
  { q: "A team that provides emergency responses to cybersecurity incidents.", options: ["CERT", "CASB", "BYOD", "BIOS"], a: "CERT" },
  { q: "An encryption mode that provides feedback of encrypted data to the next block.", options: ["CFB", "CAR", "CCTV", "API"], a: "CFB" },
  { q: "A protocol that uses a challenge-response mechanism to authenticate users.", options: ["CHAP", "AES", "BIA", "CIR"], a: "CHAP" },
  { q: "A model for ensuring that information is kept secure through confidentiality, integrity, and availability.", options: ["CIA", "BGP", "CASB", "CAR"], a: "CIA" },
  { q: "The executive responsible for overseeing an organization's information technology strategy.", options: ["CIO", "COOP", "BIA", "BGP"], a: "CIO" },
  { q: "A team that manages and responds to cybersecurity incidents within an organization.", options: ["CIRT", "CCTV", "CAPTCHA", "BCP"], a: "CIRT" },
  { q: "A system used for managing and organizing digital content.", options: ["CMS", "CASB", "BYOD", "CAR"], a: "CMS" },
  { q: "A plan to ensure that critical business functions can continue during and after a disaster.", options: ["COOP", "CIRT", "BIA", "CHAP"], a: "COOP" },
  { q: "A policy where an organization provides employees with company-owned devices that are also used for personal purposes.", options: ["COPE", "CASB", "CCTV", "AES"], a: "COPE" },
  { q: "What is a plan for managing risks and maintaining operations during a disruption?", options: ["CP", "CRL", "CSP", "DPO"], a: "CP" },
  { q: "What is an error-checking method used to detect changes to raw data?", options: ["CRC", "CSRF", "DBA", "DHE"], a: "CRC" },
  { q: "What is a list of certificates that have been revoked before their expiration date?", options: ["CRL", "DLP", "DNS", "DHE"], a: "CRL" },
  { q: "Who is responsible for overseeing the security strategy and implementation in an organization?", options: ["CSO", "CTO", "CSP", "DLP"], a: "CSO" },
  { q: "What is a provider of cloud-based computing services?", options: ["CSP", "CSR", "CTM", "DHE"], a: "CSP" },
  { q: "What is a request made to a Certificate Authority to obtain a digital certificate?", options: ["CSR", "DLP", "CVE", "DNS"], a: "CSR" },
  { q: "What is a type of attack where a malicious user tricks a site into performing actions on behalf of another user?", options: ["CSRF", "DDoS", "DKIM", "CVSS"], a: "CSRF" },
  { q: "What is a device that connects and manages multiple network channels?", options: ["CSU", "CTO", "DEP", "DPO"], a: "CSU" },
  { q: "What is a mode of operation for block ciphers that encrypts data in blocks?", options: ["CTM", "DHE", "DES", "DKIM"], a: "CTM" },
  { q: "Who is responsible for managing the technology strategy of an organization?", options: ["CTO", "CSO", "CVE", "DBA"], a: "CTO" },
  { q: "What is a database of publicly disclosed cybersecurity vulnerabilities?", options: ["CVE", "CSRF", "DLP", "DDoS"], a: "CVE" },
  { q: "What is a framework for assessing the severity of security vulnerabilities?", options: ["CVSS", "DNS", "DES", "DKIM"], a: "CVSS" },
  { q: "What is a policy that allows employees to use personal devices for work while maintaining certain controls?", options: ["CYOD", "CSR", "CSP", "DEP"], a: "CYOD" },
  { q: "What is an access control model where access rights are assigned based on the user’s identity and roles?", options: ["DAC", "DLP", "CTM", "DDoS"], a: "DAC" },
  { q: "Who is responsible for managing and maintaining a database system?", options: ["DBA", "DPO", "CRL", "CSP"], a: "DBA" },
  { q: "What is an attack where multiple systems are used to flood a target with traffic, causing service disruption?", options: ["DDoS", "DES", "CRL", "DHE"], a: "DDoS" },
  { q: "What is a security feature that prevents execution of code from non-executable memory regions?", options: ["DEP", "DLP", "DNS", "DKIM"], a: "DEP" },
  { q: "What is an older encryption standard that was replaced by AES?", options: ["DES", "DHE", "CTM", "CVE"], a: "DES" },
  { q: "What is a protocol used to automatically assign IP addresses to devices on a network?", options: ["DHCP", "DNS", "DLP", "CSP"], a: "DHCP" },
  { q: "What is a key exchange protocol that ensures secure key negotiation between parties?", options: ["DHE", "DLP", "DDoS", "CVE"], a: "DHE" },
  { q: "What is a protocol used to verify the authenticity of email messages?", options: ["DKIM", "CSR", "DHE", "DEP"], a: "DKIM" },
  { q: "What is a library of executable code that can be used by multiple applications?", options: ["DLL", "DLP", "DHE", "CSP"], a: "DLL" },
  { q: "What is a security measure designed to protect data from unauthorized access and loss?", options: ["DLP", "CSP", "DBA", "CSRF"], a: "DLP" },
  { q: "What is a standard for validating and authenticating email messages to protect against spoofing?", options: ["DMARC", "DNS", "DHE", "DLP"], a: "DMARC" },
  { q: "What is a technique for translating private IP addresses into public IP addresses and vice versa?", options: ["DNAT", "DHE", "DLP", "DES"], a: "DNAT" },
  { q: "What is a system that translates domain names into IP addresses?", options: ["DNS", "DPO", "CSP", "CSU"], a: "DNS" },
  { q: "What is an attack aimed at disrupting the normal functioning of a service by overwhelming it with requests?", options: ["DoS", "DDoS", "DLP", "CTM"], a: "DoS" },
  { q: "Who is responsible for ensuring an organization's compliance with data protection regulations?", options: ["DPO", "DLP", "DHE", "DNS"], a: "DPO" }
		],
	
	//
		quiz6: [
  { q: "Disaster Recovery Plan.", options: ["DRP", "DHE", "ECC", "EFS"], a: "DRP" },
  { q: "Digital Signature Algorithm.", options: ["DSA", "FDE", "HMAC", "GCM"], a: "DSA" },
  { q: "Digital Subscriber Line.", options: ["DSL", "ESP", "HIDS", "LEAP"], a: "DSL" },
  { q: "Extensible Authentication Protocol.", options: ["EAP", "MFA", "IDP", "HTML"], a: "EAP" },
  { q: "Electronic Code Book.", options: ["ECB", "HSM", "MOU", "FTP"], a: "ECB" },
  { q: "Elliptic Curve Cryptography.", options: ["ECC", "HMAC", "GPO", "GRE"], a: "ECC" },
  { q: "Elliptic Curve Diffie-Hellman Ephemeral.", options: ["ECDHE", "HIDS", "MD5", "IV"], a: "ECDHE" },
  { q: "Elliptic Curve Digital Signature Algorithm.", options: ["ECDSA", "FTP", "MFA", "DHE"], a: "ECDSA" },
  { q: "Endpoint Detection and Response.", options: ["EDR", "HDD", "HTML", "FIM"], a: "EDR" },
  { q: "Encrypted File System.", options: ["EFS", "LAN", "HMAC", "MSSP"], a: "EFS" },
  { q: "Enterprise Resource Planning.", options: ["ERP", "ICMP", "HSM", "MFA"], a: "ERP" },
  { q: "Electronic Serial Number.", options: ["ESN", "HDD", "IP", "FTPS"], a: "ESN" },
  { q: "Encapsulated Security Payload.", options: ["ESP", "HSM", "FIM", "MOU"], a: "ESP" },
  { q: "File System Access Control List.", options: ["FACL", "GPO", "VPN", "IoT"], a: "FACL" },
  { q: "Full Disk Encryption.", options: ["FDE", "GCM", "LAN", "MFP"], a: "FDE" },
  { q: "File Integrity Management.", options: ["FIM", "MOU", "MFA", "GPG"], a: "FIM" },
  { q: "Field Programmable Gate Array.", options: ["FPGA", "EAP", "MFA", "HDD"], a: "FPGA" },
  { q: "False Rejection Rate.", options: ["FRR", "MFA", "FDE", "HIDS"], a: "FRR" },
  { q: "File Transfer Protocol.", options: ["FTP", "HSM", "MFP", "VLAN"], a: "FTP" },
  { q: "Secured File Transfer Protocol.", options: ["FTPS", "HIDS", "ICMP", "ECC"], a: "FTPS" },
  { q: "Galois Counter Mode.", options: ["GCM", "DSP", "FACL", "HTML"], a: "GCM" },
  { q: "General Data Protection Regulation.", options: ["GDPR", "HTTP", "MDF", "GPO"], a: "GDPR" },
  { q: "Gnu Privacy Guard.", options: ["GPG", "ECC", "FDE", "IP"], a: "GPG" },
  { q: "Group Policy Object.", options: ["GPO", "HMAC", "FTP", "DNS"], a: "GPO" },
  { q: "Global Positioning System.", options: ["GPS", "ESN", "LAN", "ICMP"], a: "GPS" },
  { q: "Graphics Processing Unit.", options: ["GPU", "MFA", "HIDS", "HTML"], a: "GPU" },
  { q: "Generic Routing Encapsulation.", options: ["GRE", "HTTP", "GCM", "FPGA"], a: "GRE" },
  { q: "High Availability.", options: ["HA", "MFA", "FIM", "HIDS"], a: "HA" },
  { q: "Hard Disk Drive.", options: ["HDD", "ICMP", "MFA", "VLAN"], a: "HDD" },
  { q: "Host-based Intrusion Detection System.", options: ["HIDS", "GCM", "ESN", "FACL"], a: "HIDS" },
  { q: "Host-based Intrusion Prevention System.", options: ["HIPS", "EFS", "GPO", "DNS"], a: "HIPS" },
  { q: "Hashed Message Authentication Code.", options: ["HMAC", "DRP", "LDAP", "GRE"], a: "HMAC" },
  { q: "HMAC-based One-time Password.", options: ["HOTP", "MFA", "FIM", "DHE"], a: "HOTP" },
  { q: "Hardware Security Module.", options: ["HSM", "ICMP", "FTP", "GPG"], a: "HSM" },
  { q: "Hypertext Markup Language.", options: ["HTML", "IMAP", "IP", "DHE"], a: "HTML" },
  { q: "Hypertext Transfer Protocol.", options: ["HTTP", "GPO", "MFA", "GRE"], a: "HTTP" },
  { q: "Hypertext Transfer Protocol Secure.", options: ["HTTPS", "ICMP", "LAN", "FTP"], a: "HTTPS" },
  { q: "Heating, Ventilation Air Conditioning.", options: ["HVAC", "HDD", "GPG", "GCM"], a: "HVAC" },
  { q: "Infrastructure as a Service.", options: ["IaaS", "HSM", "FIM", "FDE"], a: "IaaS" },
  { q: "Infrastructure as Code.", options: ["IaC", "HID", "EDR", "MFA"], a: "IaC" },
  { q: "Identity and Access Management.", options: ["IAM", "MFP", "FIM", "GPO"], a: "IAM" },
  { q: "Internet Control Message Protocol.", options: ["ICMP", "DHE", "GPO", "ML"], a: "ICMP" },
  { q: "Industrial Control Systems.", options: ["ICS", "IP", "FPGA", "HMAC"], a: "ICS" },
  { q: "International Data Encryption Algorithm.", options: ["IDEA", "GPO", "FDE", "HDD"], a: "IDEA" },
  { q: "Intermediate Distribution Frame.", options: ["IDF", "FTP", "HSM", "ESN"], a: "IDF" },
  { q: "Identity Provider.", options: ["IdP", "EAP", "HMAC", "GCM"], a: "IdP" },
  { q: "Intrusion Detection System.", options: ["IDS", "HDD", "GPO", "MFP"], a: "IDS" },
  { q: "Institute of Electrical and Electronics Engineers.", options: ["IEEE", "HIPS", "MFA", "GPG"], a: "IEEE" },
  { q: "Internet Key Exchange.", options: ["IKE", "MFA", "HDD", "MDF"], a: "IKE" },
  { q: "Instant Messaging.", options: ["IM", "HSM", "GPO", "FRR"], a: "IM" },
  { q: "Internet Message Access Protocol.", options: ["IMAP", "HDD", "MFA", "FTPS"], a: "IMAP" },
  { q: "Indicators of Compromise.", options: ["IoC", "FTP", "HMAC", "LEAP"], a: "IoC" },
  { q: "Internet of Things.", options: ["IoT", "HSM", "IDEA", "HIDS"], a: "IoT" },
  { q: "Internet Protocol.", options: ["IP", "FIM", "HDD", "HOTP"], a: "IP" },
  { q: "Intrusion Prevention System.", options: ["IPS", "FACL", "LAN", "GPO"], a: "IPS" },
  { q: "Internet Protocol Security.", options: ["IPSec", "IDEA", "HMAC", "HTTP"], a: "IPSec" },
  { q: "Incident Response.", options: ["IR", "HID", "MFA", "GPG"], a: "IR" },
  { q: "Internet Relay Chat.", options: ["IRC", "FDE", "MDF", "GCM"], a: "IRC" },
  { q: "Incident Response Plan.", options: ["IRP", "HTTP", "HDD", "MFA"], a: "IRP" },
  { q: "International Standards Organization.", options: ["ISO", "HMAC", "GPO", "DSP"], a: "ISO" },
  { q: "Internet Service Provider.", options: ["ISP", "FTP", "HDD", "GPG"], a: "ISP" },
  { q: "Information Systems Security Officer.", options: ["ISSO", "MFA", "HID", "GCM"], a: "ISSO" },
  { q: "Initialization Vector.", options: ["IV", "GPO", "FACL", "LEAP"], a: "IV" },
  { q: "Key Distribution Center.", options: ["KDC", "HTTP", "IDEA", "GPG"], a: "KDC" },
  { q: "Key Encryption Key.", options: ["KEK", "ICMP", "HDD", "IRP"], a: "KEK" },
  { q: "Layer 2 Tunneling Protocol.", options: ["L2TP", "FIM", "MOU", "HID"], a: "L2TP" },
  { q: "Local Area Network.", options: ["LAN", "EFS", "IDF", "GPO"], a: "LAN" },
  { q: "Lightweight Directory Access Protocol.", options: ["LDAP", "MFA", "FTP", "HSM"], a: "LDAP" },
  { q: "Lightweight Extensible Authentication Protocol.", options: ["LEAP", "MDF", "VPN", "HOTP"], a: "LEAP" },
  { q: "Monitoring as a Service.", options: ["MaaS", "HIDS", "GPO", "FRR"], a: "MaaS" },
  { q: "Mandatory Access Control.", options: ["MAC", "ICMP", "HDD", "HTTP"], a: "MAC" },
  { q: "Media Access Control.", options: ["MAC", "EAP", "HSM", "LAN"], a: "MAC" },
  { q: "Message Authentication Code.", options: ["MAC", "GPG", "FIM", "HOTP"], a: "MAC" },
  { q: "Metropolitan Area Network.", options: ["MAN", "GCM", "FACL", "GPO"], a: "MAN" },
  { q: "Master Boot Record.", options: ["MBR", "HSM", "MFA", "FDE"], a: "MBR" },
  { q: "Message Digest 5.", options: ["MD5", "MFP", "FIM", "LEAP"], a: "MD5" },
  { q: "Main Distribution Frame.", options: ["MDF", "HDD", "GPG", "FACL"], a: "MDF" },
  { q: "Mobile Device Management.", options: ["MDM", "ISP", "ICMP", "HSM"], a: "MDM" },
  { q: "Multifactor Authentication.", options: ["MFA", "FIM", "EAP", "HTTP"], a: "MFA" },
  { q: "Multifunction Device.", options: ["MFD", "FACL", "GCM", "HDD"], a: "MFD" },
  { q: "Multifunction Printer.", options: ["MFP", "IDP", "HDD", "FIM"], a: "MFP" },
  { q: "Machine Learning.", options: ["ML", "HTTP", "HIDS", "HSM"], a: "ML" },
  { q: "Multimedia Message Service.", options: ["MMS", "LAN", "FACL", "HOTP"], a: "MMS" },
  { q: "Memorandum of Agreement.", options: ["MOA", "GPG", "HDD", "HMAC"], a: "MOA" },
  { q: "Memorandum of Understanding.", options: ["MOU", "FIM", "FTP", "GCM"], a: "MOU" },
  { q: "Multi-protocol Label Switching.", options: ["MPLS", "GPO", "FDE", "MAC"], a: "MPLS" },
  { q: "Master Service Agreement.", options: ["MSA", "HDD", "HSM", "FACL"], a: "MSA" },
  { q: "Microsoft Challenge Handshake Authentication Protocol.", options: ["MSCHAP", "MFA", "HMAC", "GPG"], a: "MSCHAP" },
  { q: "Managed Service Provider.", options: ["MSP", "HID", "HTTP", "HDD"], a: "MSP" },
  { q: "Managed Security Service Provider.", options: ["MSSP", "GPO", "ICMP", "FDE"], a: "MSSP" },
  { q: "Mean Time Between Failures.", options: ["MTBF", "FTP", "HMAC", "MFA"], a: "MTBF" },
  { q: "Mean Time to Failure.", options: ["MTTF", "MFA", "ICMP", "MSSP"], a: "MTTF" }
  //
  		],
	quiz7: [
  { q: "Mean Time to Recover.", options: ["MTTR", "MFA", "GCM", "HDD"], a: "MTTR" },
  { q: "Maximum Transmission Unit.", options: ["MTU", "LAN", "NIST", "HSM"], a: "MTU" },
  { q: "Network Access Control.", options: ["NAC", "NIDS", "PaaS", "RADIUS"], a: "NAC" },
  { q: "Network Address Translation.", options: ["NAT", "PEAP", "NTP", "MAC"], a: "NAT" },
  { q: "Non-disclosure Agreement.", options: ["NDA", "PKI", "PPP", "RC4"], a: "NDA" },
  { q: "Near Field Communication.", options: ["NFC", "SaaS", "PBX", "PDU"], a: "NFC" },
  { q: "Next-generation Firewall.", options: ["NGFW", "SAML", "MSSP", "SDLC"], a: "NGFW" },
  { q: "Network-based Intrusion Detection System.", options: ["NIDS", "RAT", "SDK", "PDU"], a: "NIDS" },
  { q: "Network-based Intrusion Prevention System.", options: ["NIPS", "FDE", "ICMP", "MFA"], a: "NIPS" },
  { q: "National Institute of Standards & Technology.", options: ["NIST", "MDF", "HDD", "IDF"], a: "NIST" },
  { q: "New Technology File System.", options: ["NTFS", "PAM", "ML", "MOU"], a: "NTFS" },
  { q: "New Technology LAN Manager.", options: ["NTLM", "VPN", "FIM", "HDD"], a: "NTLM" },
  { q: "Network Time Protocol.", options: ["NTP", "IV", "FIM", "GPO"], a: "NTP" },
  { q: "Open Authorization.", options: ["OAUTH", "MD5", "FTP", "RA"], a: "OAUTH" },
  { q: "Online Certificate Status Protocol.", options: ["OCSP", "RPO", "SaaS", "MDF"], a: "OCSP" },
  { q: "Object Identifier.", options: ["OID", "NDA", "RAT", "MDF"], a: "OID" },
  { q: "Operating System.", options: ["OS", "SDLC", "HIDS", "MAC"], a: "OS" },
  { q: "Open-source Intelligence.", options: ["OSINT", "GPG", "DNS", "LDAP"], a: "OSINT" },
  { q: "Open Shortest Path First.", options: ["OSPF", "MDF", "PDU", "SaaS"], a: "OSPF" },
  { q: "Operational Technology.", options: ["OT", "HA", "MFA", "PBX"], a: "OT" },
  { q: "Over the Air.", options: ["OTA", "HTTP", "PEAP", "HMAC"], a: "OTA" },
  { q: "Open Vulnerability Assessment Language.", options: ["OVAL", "PaaS", "RA", "MFP"], a: "OVAL" },
  { q: "PKCS #12.", options: ["P12", "NIPS", "ML", "HTTP"], a: "P12" },
  { q: "Peer to Peer.", options: ["P2P", "SAN", "RAID", "EFS"], a: "P2P" },
  { q: "Platform as a Service.", options: ["PaaS", "FIM", "RA", "MOU"], a: "PaaS" },
  { q: "Proxy Auto Configuration.", options: ["PAC", "NFC", "RTO", "RADIUS"], a: "PAC" },
  { q: "Privileged Access Management.", options: ["PAM", "HDD", "MFA", "KDC"], a: "PAM" },
  { q: "Pluggable Authentication Modules.", options: ["PAM", "PaaS", "RAID", "GPG"], a: "PAM" },
  { q: "Password Authentication Protocol.", options: ["PAP", "NFC", "DHE", "GPO"], a: "PAP" },
  { q: "Port Address Translation.", options: ["PAT", "ML", "RA", "HID"], a: "PAT" },
  { q: "Password-based Key Derivation Function 2.", options: ["PBKDF2", "MSSP", "FACL", "IV"], a: "PBKDF2" },
  { q: "Private Branch Exchange.", options: ["PBX", "GPO", "MFA", "SAN"], a: "PBX" },
  { q: "Packet Capture.", options: ["PCAP", "HTTP", "OSINT", "VPN"], a: "PCAP" },
  { q: "Payment Card Industry Data Security Standard.", options: ["PCI DSS", "SaaS", "PaaS", "LAN"], a: "PCI DSS" },
  { q: "Power Distribution Unit.", options: ["PDU", "PAP", "FTP", "OS"], a: "PDU" },
  { q: "Protected Extensible Authentication Protocol.", options: ["PEAP", "MTBF", "MFA", "PDU"], a: "PEAP" },
  { q: "Personal Electronic Device.", options: ["PED", "NDA", "RAID", "HDD"], a: "PED" },
  { q: "Privacy Enhanced Mail.", options: ["PEM", "PDU", "MFA", "SaaS"], a: "PEM" },
  { q: "Perfect Forward Secrecy.", options: ["PFS", "NIDS", "FACL", "MAC"], a: "PFS" },
  { q: "Pretty Good Privacy.", options: ["PGP", "HTTP", "GPO", "PDU"], a: "PGP" },
  { q: "Personal Health Information.", options: ["PHI", "OSINT", "PDU", "GPG"], a: "PHI" },
  { q: "Personally Identifiable Information.", options: ["PII", "NIDS", "RA", "FIM"], a: "PII" },
  { q: "Personal Identity Verification.", options: ["PIV", "NTFS", "PDU", "HDD"], a: "PIV" },
  { q: "Public Key Cryptography Standards.", options: ["PKCS", "GPG", "SaaS", "MDF"], a: "PKCS" },
  { q: "Public Key Infrastructure.", options: ["PKI", "RAID", "SDLC", "HSM"], a: "PKI" },
  { q: "Post Office Protocol.", options: ["POP", "HMAC", "NFC", "PBKDF2"], a: "POP" },
  { q: "Plain Old Telephone Service.", options: ["POTS", "GCM", "PCI DSS", "FTP"], a: "POTS" },
  { q: "Point-to-Point Protocol.", options: ["PPP", "PaaS", "IV", "EFS"], a: "PPP" },
  { q: "Point-to-Point Tunneling Protocol.", options: ["PPTP", "PDU", "SaaS", "MFA"], a: "PPTP" },
  { q: "Pre-shared Key.", options: ["PSK", "PEAP", "MDF", "NDA"], a: "PSK" },
  { q: "Pan-tilt-zoom.", options: ["PTZ", "PDU", "GPO", "MOU"], a: "PTZ" },
  { q: "Potentially Unwanted Program.", options: ["PUP", "RTO", "PIV", "IDF"], a: "PUP" },
  { q: "Recovery Agent.", options: ["RA", "MFA", "GPG", "FTP"], a: "RA" },
  { q: "Registration Authority.", options: ["RA", "MFA", "NIST", "FTP"], a: "RA" },
  { q: "Research and Development in Advanced Communications Technologies in Europe.", options: ["RACE", "PDU", "SAN", "SDLC"], a: "RACE" },
  { q: "Rapid Application Development.", options: ["RAD", "LAN", "HDD", "SaaS"], a: "RAD" },
  { q: "Remote Authentication Dial-in User Service.", options: ["RADIUS", "OSINT", "MOU", "MDF"], a: "RADIUS" },
  { q: "Redundant Array of Inexpensive Disks.", options: ["RAID", "NFC", "PCI DSS", "RAT"], a: "RAID" },
  { q: "Remote Access Server.", options: ["RAS", "HIDS", "SaaS", "HDD"], a: "RAS" },
  { q: "Remote Access Trojan.", options: ["RAT", "PDU", "GCM", "PaaS"], a: "RAT" },
  { q: "Role-based Access Control.", options: ["RBAC", "PIV", "PDU", "PaaS"], a: "RBAC" },
  { q: "Rule-based Access Control.", options: ["RBAC", "PKCS", "SaaS", "NIDS"], a: "RBAC" },
  { q: "Rivest Cipher version 4.", options: ["RC4", "PDU", "NFC", "SDK"], a: "RC4" },
  { q: "Remote Desktop Protocol.", options: ["RDP", "PKCS", "GPG", "PIV"], a: "RDP" },
  { q: "Radio Frequency Identifier.", options: ["RFID", "PaaS", "FTP", "MDF"], a: "RFID" },
  { q: "RACE Integrity Primitives Evaluation Message Digest.", options: ["RIPEMD", "HTTP", "RA", "PaaS"], a: "RIPEMD" },
  { q: "Return on Investment.", options: ["ROI", "MDF", "PIV", "SDLC"], a: "ROI" },
  { q: "Recovery Point Objective.", options: ["RPO", "NIST", "PIV", "SaaS"], a: "RPO" },
  { q: "Rivest, Shamir, & Adleman.", options: ["RSA", "PaaS", "PIV", "HIDS"], a: "RSA" },
  { q: "Remotely Triggered Black Hole.", options: ["RTBH", "HDD", "PIV", "PaaS"], a: "RTBH" },
  { q: "Recovery Time Objective.", options: ["RTO", "PIV", "HID", "FIM"], a: "RTO" },
  { q: "Real-time Operating System.", options: ["RTOS", "RA", "FIM", "PIV"], a: "RTOS" },
  { q: "Real-time Transport Protocol.", options: ["RTP", "GPO", "SaaS", "SDLC"], a: "RTP" },
  { q: "Secure/Multipurpose Internet Mail Extensions.", options: ["S/MIME", "NTFS", "RAT", "EFS"], a: "S/MIME" },
  { q: "Software as a Service.", options: ["SaaS", "PDU", "SCEP", "MOU"], a: "SaaS" },
  { q: "Simultaneous Authentication of Equals.", options: ["SAE", "PDU", "MDF", "FIM"], a: "SAE" },
  { q: "Security Assertions Markup Language.", options: ["SAML", "NDA", "HIDS", "PKCS"], a: "SAML" },
  { q: "Storage Area Network.", options: ["SAN", "GPO", "MDF", "HDD"], a: "SAN" },
  { q: "Subject Alternative Name.", options: ["SAN", "HDD", "NIDS", "SaaS"], a: "SAN" },
  { q: "Secure Access Service Edge.", options: ["SASE", "FIM", "MFA", "PDU"], a: "SASE" },
  { q: "Supervisory Control and Data Acquisition.", options: ["SCADA", "SaaS", "HSM", "GPO"], a: "SCADA" },
  { q: "Security Content Automation Protocol.", options: ["SCAP", "RA", "GCM", "PDU"], a: "SCAP" },
  { q: "Simple Certificate Enrollment Protocol.", options: ["SCEP", "PIV", "RAID", "FDE"], a: "SCEP" },
  { q: "Software-defined Wide Area Network.", options: ["SD-WAN", "PIV", "GPG", "MOU"], a: "SD-WAN" },
  { q: "Software Development Kit.", options: ["SDK", "FIM", "PCI DSS", "PDU"], a: "SDK" },
  { q: "Software Development Lifecycle.", options: ["SDLC", "PIV", "FIM", "HDD"], a: "SDLC" },
  { q: "Software Development Lifecycle Methodology.", options: ["SDLM", "HSM", "PKCS", "PaaS"], a: "SDLM" }
  		],
	quiz8: [
  { q: "Software-defined Networking.", options: ["SDN", "SMTP", "WPA", "SSH"], a: "SDN" },
  { q: "Security-enhanced Linux.", options: ["SE", "SEH", "SEL", "SE Linux"], a: "SE" },
  { q: "Self-encrypting Drives.", options: ["SED", "SFTP", "SSL", "TOTP"], a: "SED" },
  { q: "Structured Exception Handler.", options: ["SEH", "SLA", "SQL", "SMS"], a: "SEH" },
  { q: "Secured File Transfer Protocol.", options: ["SFTP", "SNMP", "SMTP", "SSH"], a: "SFTP" },
  { q: "Secure Hashing Algorithm.", options: ["SHA", "SSL", "TOTP", "VPN"], a: "SHA" },
  { q: "Secure Hypertext Transfer Protocol.", options: ["SHTTP", "SOAP", "SQLi", "XSRF"], a: "SHTTP" },
  { q: "Security Information and Event Management.", options: ["SIEM", "SOC", "WAP", "SE"], a: "SIEM" },
  { q: "Subscriber Identity Module.", options: ["SIM", "SLE", "SLA", "UAV"], a: "SIM" },
  { q: "Service-level Agreement.", options: ["SLA", "SWG", "SQL", "SEH"], a: "SLA" },
  { q: "Single Loss Expectancy.", options: ["SLE", "SSL", "TTP", "VLAN"], a: "SLE" },
  { q: "Short Message Service.", options: ["SMS", "SEH", "VPN", "TOTP"], a: "SMS" },
  { q: "Simple Mail Transfer Protocol.", options: ["SMTP", "SFTP", "USB", "TOTP"], a: "SMTP" },
  { q: "Simple Mail Transfer Protocol Secure.", options: ["SMTPS", "SLA", "SE", "SHA"], a: "SMTPS" },
  { q: "Simple Network Management Protocol.", options: ["SNMP", "UDP", "VPC", "USB"], a: "SNMP" },
  { q: "Simple Object Access Protocol.", options: ["SOAP", "SSL", "TOTP", "VM"], a: "SOAP" },
  { q: "Security Orchestration, Automation, Response.", options: ["SOAR", "SDN", "VPC", "XML"], a: "SOAR" },
  { q: "System on Chip.", options: ["SoC", "SOC", "SSH", "SLA"], a: "SoC" },
  { q: "Security Operations Center.", options: ["SOC", "VLAN", "XML", "VPN"], a: "SOC" },
  { q: "Statement of Work.", options: ["SOW", "USB", "XOR", "UAV"], a: "SOW" },
  { q: "Sender Policy Framework.", options: ["SPF", "SLE", "SMTP", "TLS"], a: "SPF" },
  { q: "Spam over Internet Messaging.", options: ["SPIM", "SQL", "SFTP", "SHA"], a: "SPIM" },
  { q: "Structured Query Language.", options: ["SQL", "SLA", "SSL", "TCP/IP"], a: "SQL" },
  { q: "SQL Injection.", options: ["SQLi", "SIEM", "SMTP", "SFTP"], a: "SQLi" },
  { q: "Secure Real-Time Protocol.", options: ["SRTP", "SMTP", "SEH", "SSL"], a: "SRTP" },
  { q: "Solid State Drive.", options: ["SSD", "SLE", "USB", "VPN"], a: "SSD" },
  { q: "Secure Shell.", options: ["SSH", "SE", "SNMP", "VPC"], a: "SSH" },
  { q: "Secure Sockets Layer.", options: ["SSL", "SMTP", "SFTP", "USB"], a: "SSL" },
  { q: "Single Sign-on.", options: ["SSO", "SQLi", "SMTP", "SIEM"], a: "SSO" },
  { q: "Structured Threat Information eXchange.", options: ["STIX", "SSH", "SDN", "USB"], a: "STIX" },
  { q: "Secure Web Gateway.", options: ["SWG", "SOW", "SOC", "SAML"], a: "SWG" },
  { q: "Terminal Access Controller Access Control System.", options: ["TACACS+", "USB", "XOR", "VPN"], a: "TACACS+" },
  { q: "Trusted Automated eXchange of Indicator Information.", options: ["TAXII", "SFTP", "SMTP", "URL"], a: "TAXII" },
  { q: "Transmission Control Protocol/Internet Protocol.", options: ["TCP/IP", "TLS", "UAV", "VLAN"], a: "TCP/IP" },
  { q: "Ticket Granting Ticket.", options: ["TGT", "VPC", "UAV", "SAML"], a: "TGT" },
  { q: "Temporal Key Integrity Protocol.", options: ["TKIP", "UAV", "XOR", "VPN"], a: "TKIP" },
  { q: "Transport Layer Security.", options: ["TLS", "VPC", "SQLi", "SMTP"], a: "TLS" },
  { q: "Time-of-check.", options: ["TOC", "USB", "SPIM", "SFTP"], a: "TOC" },
  { q: "Time-based One-time Password.", options: ["TOTP", "SE", "URL", "SNMP"], a: "TOTP" },
  { q: "Time-of-use.", options: ["TOU", "VPN", "UAV", "XDR"], a: "TOU" },
  { q: "Trusted Platform Module.", options: ["TPM", "VLAN", "VPC", "SMTP"], a: "TPM" },
  { q: "Tactics, Techniques, and Procedures.", options: ["TTP", "URL", "SQL", "USB"], a: "TTP" },
  { q: "Transaction Signature.", options: ["TSIG", "SMTP", "USB", "XOR"], a: "TSIG" },
  { q: "User Acceptance Testing.", options: ["UAT", "UDP", "VPN", "XSS"], a: "UAT" },
  { q: "Unmanned Aerial Vehicle.", options: ["UAV", "SSL", "SQLi", "SAML"], a: "UAV" },
  { q: "User Datagram Protocol.", options: ["UDP", "VPC", "XDR", "SQL"], a: "UDP" },
  { q: "Unified Extensible Firmware Interface.", options: ["UEFI", "VM", "URL", "VPC"], a: "UEFI" },
  { q: "Unified Endpoint Management.", options: ["UEM", "USB", "XML", "VLAN"], a: "UEM" },
  { q: "Uninterruptable Power Supply.", options: ["UPS", "VPN", "SQL", "SSH"], a: "UPS" },
  { q: "Uniform Resource Identifier.", options: ["URI", "SQL", "XOR", "TLS"], a: "URI" },
  { q: "Universal Resource Locator.", options: ["URL", "SFTP", "SMTP", "SLE"], a: "URL" },
  { q: "Universal Serial Bus.", options: ["USB", "UAV", "VPN", "XSS"], a: "USB" },
  { q: "USB On the Go.", options: ["USB OTG", "SAML", "SOAP", "VM"], a: "USB OTG" },
  { q: "Unified Threat Management.", options: ["UTM", "UAV", "UDP", "SQL"], a: "UTM" },
  { q: "Unshielded Twisted Pair.", options: ["UTP", "TOTP", "VPN", "XOR"], a: "UTP" },
  { q: "Visual Basic.", options: ["VBA", "VPN", "XML", "SSL"], a: "VBA" },
  { q: "Virtual Desktop Environment.", options: ["VDE", "UEFI", "VPN", "TLS"], a: "VDE" },
  { q: "Virtual Desktop Infrastructure.", options: ["VDI", "UEM", "UAT", "VPC"], a: "VDI" },
  { q: "Virtual Local Area Network.", options: ["VLAN", "URL", "SMTP", "WPA"], a: "VLAN" },
  { q: "Variable Length Subnet Masking.", options: ["VLSM", "USB", "SQL", "SSH"], a: "VLSM" },
  { q: "Virtual Machine.", options: ["VM", "SSL", "SQL", "UEM"], a: "VM" },
  { q: "Voice over IP.", options: ["VoIP", "VDE", "UEFI", "UAT"], a: "VoIP" },
  { q: "Virtual Private Cloud.", options: ["VPC", "VBA", "SOAP", "URL"], a: "VPC" },
  { q: "Virtual Private Network.", options: ["VPN", "VDE", "UAV", "XML"], a: "VPN" },
  { q: "Video Teleconferencing.", options: ["VTC", "XOR", "SFTP", "SMTP"], a: "VTC" },
  { q: "Web Application Firewall.", options: ["WAF", "WPA", "XSRF", "VM"], a: "WAF" },
  { q: "Wireless Access Point.", options: ["WAP", "XML", "UAT", "USB"], a: "WAP" },
  { q: "Wired Equivalent Privacy.", options: ["WEP", "USB", "UAV", "SMTP"], a: "WEP" },
  { q: "Wireless Intrusion Detection System.", options: ["WIDS", "VPN", "SQL", "VPC"], a: "WIDS" },
  { q: "Wireless Intrusion Prevention System.", options: ["WIPS", "WPA", "URI", "XOR"], a: "WIPS" },
  { q: "Work Order.", options: ["WO", "VDE", "SE", "SQL"], a: "WO" },
  { q: "Wi-Fi Protected Access.", options: ["WPA", "XML", "SQLi", "UAV"], a: "WPA" },
  { q: "Wi-Fi Protected Setup.", options: ["WPS", "TOTP", "TLS", "USB"], a: "WPS" },
  { q: "Wireless TLS.", options: ["WTLS", "USB", "VPN", "SQL"], a: "WTLS" },
  { q: "Extended Detection and Response.", options: ["XDR", "SQL", "UDP", "USB"], a: "XDR" },
  { q: "Extensible Markup Language.", options: ["XML", "SLA", "SFTP", "USB"], a: "XML" },
  { q: "Exclusive Or.", options: ["XOR", "VPN", "XML", "WAP"], a: "XOR" },
  { q: "Cross-site Request Forgery.", options: ["XSRF", "TLS", "UEM", "SMS"], a: "XSRF" },
  { q: "Cross-site Scripting.", options: ["XSS", "VM", "SQLi", "UAV"], a: "XSS" }

  		],
	quiz9: [
  { q: "What is the primary purpose of Security Program Management?", options: ["To protect assets", "To increase productivity", "To reduce costs", "To enhance user experience"], a: "To protect assets" },
  { q: "Which framework provides a structured approach to security program management?", options: ["NIST Cybersecurity Framework", "ISO 27001", "COBIT", "All of the above"], a: "All of the above" },
  { q: "What is the role of a Chief Information Security Officer (CISO)?", options: ["Overseeing security operations", "Managing IT support", "Developing software", "Handling customer service"], a: "Overseeing security operations" },
  { q: "Which document outlines an organization's security policies and procedures?", options: ["Security Policy", "Risk Assessment", "Incident Response Plan", "Business Continuity Plan"], a: "Security Policy" },
  { q: "What is the purpose of a Risk Assessment in security management?", options: ["Identify potential threats", "Define security policies", "Implement security controls", "All of the above"], a: "Identify potential threats" },
  { q: "What is a Security Incident Response Plan?", options: ["A plan for handling security breaches", "A document for training employees", "A guide for software development", "A budget plan for IT"], a: "A plan for handling security breaches" },
  { q: "What is the significance of Security Awareness Training?", options: ["To educate employees about security risks", "To implement new technology", "To handle customer complaints", "To design IT infrastructure"], a: "To educate employees about security risks" },
  { q: "Which of the following is a common security control?", options: ["Firewall", "Backup", "Encryption", "All of the above"], a: "All of the above" },
  { q: "What does the term 'vulnerability management' refer to?", options: ["Identifying and addressing security weaknesses", "Managing employee access", "Handling financial audits", "Developing software applications"], a: "Identifying and addressing security weaknesses" },
  { q: "Which framework focuses on IT governance and management?", options: ["COBIT", "ISO 27001", "NIST Cybersecurity Framework", "PCI DSS"], a: "COBIT" },
  { q: "What is the purpose of conducting regular security audits?", options: ["To assess the effectiveness of security controls", "To evaluate employee performance", "To update software", "To redesign IT infrastructure"], a: "To assess the effectiveness of security controls" },
  { q: "What is a key element of a Business Continuity Plan?", options: ["Ensuring critical business functions can continue during a disruption", "Developing new marketing strategies", "Managing employee performance", "Improving customer service"], a: "Ensuring critical business functions can continue during a disruption" },
  { q: "What is the role of access control in security management?", options: ["To restrict access to sensitive information", "To enhance network speed", "To manage software updates", "To handle customer support"], a: "To restrict access to sensitive information" },
  { q: "Which security framework is specifically designed for information security management systems?", options: ["ISO 27001", "NIST Cybersecurity Framework", "COBIT", "PCI DSS"], a: "ISO 27001" },
  { q: "What does the term 'security governance' involve?", options: ["Establishing policies and procedures to manage security", "Designing software systems", "Handling customer service issues", "Conducting market research"], a: "Establishing policies and procedures to manage security" },
  { q: "What is a common method for ensuring data integrity?", options: ["Encryption", "Firewalls", "Access controls", "All of the above"], a: "Encryption" },
  { q: "Which document defines the acceptable use of an organization's IT resources?", options: ["Acceptable Use Policy", "Incident Response Plan", "Risk Assessment", "Business Continuity Plan"], a: "Acceptable Use Policy" },
  { q: "What is the purpose of an Incident Response Team?", options: ["To respond to and manage security incidents", "To handle payroll", "To design marketing strategies", "To develop new software"], a: "To respond to and manage security incidents" },
  { q: "What does 'penetration testing' involve?", options: ["Simulating attacks to find vulnerabilities", "Managing user access", "Updating software", "Handling customer complaints"], a: "Simulating attacks to find vulnerabilities" },
  { q: "Which of the following is NOT a type of security control?", options: ["Physical", "Administrative", "Technical", "Procedural"], a: "Procedural" },
  { q: "What is the purpose of a security policy?", options: ["To provide guidelines for managing security", "To handle customer service", "To manage financial budgets", "To design network infrastructure"], a: "To provide guidelines for managing security" },
  { q: "Which framework provides guidelines for handling cybersecurity threats?", options: ["NIST Cybersecurity Framework", "ISO 9001", "COBIT", "SOX"], a: "NIST Cybersecurity Framework" },
  { q: "What is a security baseline?", options: ["A set of minimum security controls to be implemented", "A budget plan for IT security", "A document for employee training", "A report on software performance"], a: "A set of minimum security controls to be implemented" },
  { q: "What does 'data classification' involve?", options: ["Categorizing data based on its sensitivity", "Updating software systems", "Managing employee performance", "Designing marketing strategies"], a: "Categorizing data based on its sensitivity" },
  { q: "What is the role of a Data Protection Officer (DPO)?", options: ["To ensure compliance with data protection regulations", "To manage IT infrastructure", "To handle customer support", "To develop new products"], a: "To ensure compliance with data protection regulations" },
  { q: "What is the purpose of security metrics?", options: ["To measure the effectiveness of security controls", "To handle financial audits", "To design IT systems", "To manage employee performance"], a: "To measure the effectiveness of security controls" },
  { q: "What does 'threat modeling' involve?", options: ["Identifying and evaluating potential threats", "Managing user access", "Handling customer complaints", "Updating software systems"], a: "Identifying and evaluating potential threats" },
  { q: "What is the purpose of a Security Operations Center (SOC)?", options: ["To monitor and manage security events", "To handle payroll", "To design new software", "To improve customer service"], a: "To monitor and manage security events" },
  { q: "What is a key component of a security risk management process?", options: ["Risk assessment", "Marketing analysis", "Employee performance reviews", "Customer satisfaction surveys"], a: "Risk assessment" },
  { q: "Which regulation focuses on data protection and privacy in the EU?", options: ["GDPR", "SOX", "HIPAA", "PCI DSS"], a: "GDPR" },
  { q: "What is the purpose of an internal security audit?", options: ["To review and improve security controls", "To manage financial records", "To handle customer inquiries", "To design marketing plans"], a: "To review and improve security controls" },
  { q: "Which of the following is a principle of security management?", options: ["Least privilege", "Maximum access", "Open access", "Unlimited data sharing"], a: "Least privilege" },
  { q: "What is the role of encryption in data security?", options: ["To protect data from unauthorized access", "To improve network speed", "To manage software updates", "To handle customer support"], a: "To protect data from unauthorized access" },
  { q: "What is the purpose of a security policy review?", options: ["To ensure policies are up-to-date and effective", "To manage IT budgets", "To handle employee performance", "To design new software"], a: "To ensure policies are up-to-date and effective" },
  { q: "What does 'security incident management' entail?", options: ["Handling and resolving security incidents", "Managing employee schedules", "Designing marketing campaigns", "Updating IT infrastructure"], a: "Handling and resolving security incidents" },
  { q: "What is a common method for ensuring compliance with security policies?", options: ["Regular audits", "Employee training", "Automated monitoring", "All of the above"], a: "All of the above" },
  { q: "What is the purpose of a security gap analysis?", options: ["To identify areas where security controls are lacking", "To manage financial investments", "To design IT systems", "To handle customer complaints"], a: "To identify areas where security controls are lacking" },
  { q: "Which of the following is a common security framework for managing IT risks?", options: ["COBIT", "SOX", "GDPR", "PCI DSS"], a: "COBIT" },
  { q: "What is a key feature of a risk management plan?", options: ["Identification of potential risks and mitigation strategies", "Design of IT infrastructure", "Handling of customer service", "Development of marketing strategies"], a: "Identification of potential risks and mitigation strategies" },
  { q: "What does 'vulnerability scanning' involve?", options: ["Identifying weaknesses in systems", "Managing user accounts", "Handling customer complaints", "Updating software"], a: "Identifying weaknesses in systems" },
  { q: "What is the purpose of a Security Operations Center (SOC)?", options: ["To monitor and respond to security incidents", "To design new software", "To handle payroll", "To manage customer service"], a: "To monitor and respond to security incidents" },
  { q: "Which framework is used for managing and improving IT services?", options: ["ITIL", "NIST", "ISO 27001", "COBIT"], a: "ITIL" },
  { q: "What is a key component of business continuity planning?", options: ["Developing strategies to maintain operations during disruptions", "Managing financial budgets", "Designing new marketing campaigns", "Handling customer feedback"], a: "Developing strategies to maintain operations during disruptions" },
  { q: "What does 'data breach response' involve?", options: ["Handling the aftermath of a data breach", "Updating software", "Designing new products", "Managing IT budgets"], a: "Handling the aftermath of a data breach" },
  { q: "What is the goal of security configuration management?", options: ["To ensure systems are securely configured", "To manage employee performance", "To handle financial audits", "To design marketing strategies"], a: "To ensure systems are securely configured" },
  { q: "What does 'security compliance' refer to?", options: ["Adhering to security policies and regulations", "Designing software systems", "Handling customer support", "Managing IT infrastructure"], a: "Adhering to security policies and regulations" },
  { q: "What is the purpose of a security posture assessment?", options: ["To evaluate the overall security strength of an organization", "To design new IT systems", "To manage employee schedules", "To handle customer complaints"], a: "To evaluate the overall security strength of an organization" },
  { q: "Which of the following is an example of a physical security control?", options: ["Security cameras", "Firewalls", "Antivirus software", "Encryption"], a: "Security cameras" },
  { q: "What is the purpose of a risk management framework?", options: ["To provide a structured approach to managing risks", "To design software applications", "To handle customer inquiries", "To manage IT budgets"], a: "To provide a structured approach to managing risks" },
  { q: "Which regulation focuses on financial data protection in the U.S.?", options: ["SOX", "HIPAA", "PCI DSS", "GDPR"], a: "SOX" },
  { q: "What does 'security incident handling' involve?", options: ["Managing the response to and resolution of security incidents", "Designing IT systems", "Handling payroll", "Updating marketing strategies"], a: "Managing the response to and resolution of security incidents" },
  { q: "What is a key benefit of security metrics?", options: ["They help measure the effectiveness of security controls", "They manage employee schedules", "They design marketing strategies", "They handle customer feedback"], a: "They help measure the effectiveness of security controls" },
  { q: "What does 'security policy enforcement' entail?", options: ["Ensuring compliance with security policies", "Managing IT infrastructure", "Handling financial audits", "Designing software"], a: "Ensuring compliance with security policies" },
  { q: "Which of the following is a key element of incident response?", options: ["Identification and analysis of incidents", "Handling customer service", "Managing financial budgets", "Designing new products"], a: "Identification and analysis of incidents" },
  { q: "What is the role of a Security Architect?", options: ["Designing and implementing secure IT systems", "Managing employee performance", "Handling customer complaints", "Updating software"], a: "Designing and implementing secure IT systems" },
  { q: "What is the purpose of a security control review?", options: ["To ensure controls are effective and updated", "To handle customer inquiries", "To manage financial audits", "To design new software"], a: "To ensure controls are effective and updated" },
  { q: "What is a common method for protecting sensitive information?", options: ["Encryption", "Access controls", "Data masking", "All of the above"], a: "All of the above" },
  { q: "Which security framework focuses on risk management and security controls?", options: ["NIST", "ISO 9001", "COBIT", "SOX"], a: "NIST" },
  { q: "What is the role of a security consultant?", options: ["To provide expert advice on security practices", "To manage employee schedules", "To handle customer service", "To design marketing strategies"], a: "To provide expert advice on security practices" },
  { q: "What is the purpose of a vulnerability management program?", options: ["To identify and address system vulnerabilities", "To manage user access", "To handle financial audits", "To design IT systems"], a: "To identify and address system vulnerabilities" },
  { q: "Which of the following is a key principle of risk management?", options: ["Risk avoidance", "Risk acceptance", "Risk mitigation", "All of the above"], a: "All of the above" },
  { q: "What does 'security operations' involve?", options: ["Daily monitoring and management of security systems", "Handling customer service", "Designing new software", "Managing financial budgets"], a: "Daily monitoring and management of security systems" },
  { q: "What is the purpose of a security compliance audit?", options: ["To assess adherence to security policies and regulations", "To handle customer complaints", "To design new IT systems", "To manage employee performance"], a: "To assess adherence to security policies and regulations" },
  { q: "What is a key element of an effective security training program?", options: ["Regular updates and relevance to current threats", "Handling customer service", "Designing marketing strategies", "Managing financial budgets"], a: "Regular updates and relevance to current threats" },
  { q: "What is the role of a security risk assessment?", options: ["To identify and evaluate potential security risks", "To manage employee performance", "To design new software", "To handle customer inquiries"], a: "To identify and evaluate potential security risks" },
  { q: "Which of the following is NOT a type of security control?", options: ["Physical", "Administrative", "Technical", "Procedural"], a: "Procedural" },
  { q: "What is the purpose of a security program oversight?", options: ["To ensure the security program is effective and aligned with objectives", "To handle payroll", "To manage customer service", "To design new software"], a: "To ensure the security program is effective and aligned with objectives" },
  { q: "What does 'security governance' involve?", options: ["Establishing and maintaining a security program", "Designing new IT systems", "Handling customer service", "Managing financial budgets"], a: "Establishing and maintaining a security program" },
  { q: "What is the role of a security program manager?", options: ["To oversee the development and implementation of security programs", "To manage IT infrastructure", "To handle payroll", "To design marketing strategies"], a: "To oversee the development and implementation of security programs" },
  { q: "What does 'threat intelligence' refer to?", options: ["Information about potential threats to security", "Data about customer preferences", "Financial performance metrics", "Employee performance reviews"], a: "Information about potential threats to security" },
  { q: "Which of the following is an example of a technical security control?", options: ["Antivirus software", "Security cameras", "Access control policies", "Security awareness training"], a: "Antivirus software" },
  { q: "What is the purpose of a security baseline?", options: ["To establish a standard set of security controls", "To handle customer service", "To manage IT budgets", "To design marketing strategies"], a: "To establish a standard set of security controls" },
  { q: "What is a key feature of a security audit?", options: ["Evaluating the effectiveness of security controls", "Designing new software", "Handling customer support", "Managing financial audits"], a: "Evaluating the effectiveness of security controls" },
  { q: "What does 'risk mitigation' involve?", options: ["Implementing measures to reduce identified risks", "Managing employee performance", "Handling customer service", "Designing new products"], a: "Implementing measures to reduce identified risks" },
  { q: "Which regulation focuses on healthcare data protection in the U.S.?", options: ["HIPAA", "GDPR", "SOX", "PCI DSS"], a: "HIPAA" },
  { q: "What is the purpose of a security incident report?", options: ["To document and analyze security incidents", "To handle financial audits", "To manage IT infrastructure", "To design new marketing strategies"], a: "To document and analyze security incidents" },
  { q: "What does 'security risk tolerance' refer to?", options: ["The level of risk an organization is willing to accept", "Managing employee performance", "Designing new software", "Handling customer service"], a: "The level of risk an organization is willing to accept" },
  { q: "Which of the following is a key aspect of security policy development?", options: ["Defining rules and guidelines for managing security", "Handling customer complaints", "Managing IT infrastructure", "Designing marketing strategies"], a: "Defining rules and guidelines for managing security" },
  { q: "What is a common objective of security program management?", options: ["Protecting organizational assets from threats", "Handling payroll", "Designing new software", "Managing customer service"], a: "Protecting organizational assets from threats" }

		]	
	};

// Constants
const TIME_LIMIT = 60 * 60 * 1000; // 60 minutes in milliseconds

// Variables
let startTime = Date.now();
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = [];
let selectedAnswer = null; // Track selected answer
let isAnswerChecked = false; // Track if the answer has been checked
let testQuestions = []; // Store current quiz questions

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start the test
function startTest() {
    startTime = Date.now();
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = [];
    document.getElementById('timer').textContent = formatTime(TIME_LIMIT);
    showQuestion();
    startTimer();
}

// Format time function
function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Start timer function
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

// Show question function
function showQuestion() {
    if (currentQuestionIndex >= testQuestions.length) {
        endTest();
        return;
    }
    const question = testQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = question.q;

    // Shuffle the options
    const shuffledOptions = shuffleArray([...question.options]);
    
    // Generate options HTML
    const optionsHTML = shuffledOptions.map((opt, idx) => `
        <input type="radio" name="option" value="${opt}" id="opt${idx}">
        <label for="opt${idx}">${opt}</label><br>
    `).join('');

    // Display options
    document.getElementById('options').innerHTML = optionsHTML;
    document.getElementById('feedback').innerHTML = ''; // Clear previous feedback
    document.getElementById('nextButton').style.display = 'none'; // Hide Next button initially
    selectedAnswer = null; // Reset selected answer for the new question
    isAnswerChecked = false; // Reset flag
}

// Move to the next question
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

// Check the selected answer
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

// End the test and show results
function endTest() {
    document.getElementById('question').innerHTML = `<h2>Test Completed!</h2>`;
    document.getElementById('options').innerHTML = '';
    
    // Calculate statistics
    const totalQuestions = testQuestions.length;
    const incorrectAnswers = wrongAnswers.length;
    const percentageCorrect = ((correctAnswers / totalQuestions) * 100).toFixed(2);
    
    // Show results
    let resultsHTML = `
        <h2>Summary</h2>
        <p>Total Questions: ${totalQuestions}</p>
        <p>Correct Answers: ${correctAnswers}</p>
        <p>Incorrect Answers: ${incorrectAnswers}</p>
        <p>Percentage Correct: ${percentageCorrect}%</p>
        <h3>Questions and Answers:</h3>
        <ul>
    `;
    
    // List all questions and answers
    testQuestions.forEach((q, index) => {
        resultsHTML += `
            <li>
                <strong>Question ${index + 1}:</strong> ${q.q}<br>
                <strong>Your Answer:</strong> ${wrongAnswers.find(item => item.question === q.q)?.chosen || 'N/A'}<br>
                <strong>Correct Answer:</strong> ${q.a}
            </li>
        `;
    });

    resultsHTML += `</ul>
        <button id="restartButton" class="action-button">Restart Test</button>
    `;

    document.getElementById('feedback').innerHTML = resultsHTML;
    
    // Add event listener for restart button
    document.getElementById('restartButton').addEventListener('click', restartTest);
}

// Restart the test
function restartTest() {
    testQuestions = shuffleArray(quizzes[selectedQuiz]); // Shuffle questions again
    startTest();
}

// Handle quiz selection
function handleQuizSelection() {
    const quizSelect = document.getElementById('quizSelect');
    const quizContainer = document.getElementById('quizContainer');
    const selectedQuiz = quizSelect.value;

    if (selectedQuiz) {
        testQuestions = shuffleArray(quizzes[selectedQuiz]); // Shuffle selected quiz questions
        document.getElementById('quizSelector').style.display = 'none'; // Hide dropdown
        quizContainer.style.display = 'block'; // Show quiz container
        startTest();
    }
}

// Event listeners
document.getElementById('nextButton').addEventListener('click', nextQuestion);
document.getElementById('finishButton').addEventListener('click', endTest);
document.getElementById('options').addEventListener('change', checkAnswer);
document.getElementById('quizSelect').addEventListener('change', handleQuizSelection);