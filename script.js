// Agent Data
let agent = {
    name: prompt("Enter your Agent Name:", "Agent X") || "Agent X",
    progress: {
        ogv: 0,
        igta: 0,
        igte: 0,
        igv: 0,    // Added iGV
        marketing: 0, // Added Marketing
        bd: 0      // Added BD
    },
    points: 0,
    badges: []
};

document.getElementById("agent-name").textContent = agent.name;
document.getElementById("agent-points").textContent = agent.points;

// Mission Data (5 questions for oGV, iGTA, iGTe, iGV, Marketing, and BD with varied correct answers)
const missions = {
    ogv: {
        studyLink: "https://docs.google.com/document/d/1_BireEvcYoUEQbtDrUoOEioyTaoYJWAQe6kiYEl_Rg8/edit?usp=sharing",
        questions: [
            {
                question: `
Question 1: Mission: Operation Phantom Ledger
Scenario: Enemy intelligence has attempted to manipulate exchange records.

Task: According to global security protocols, what is the minimum mission duration required to classify an operation as a valid AIESEC exchange?
                `,
                options: {
                    A: "6 weeks – Standard field immersion duration for maximum local impact.",
                    B: "4 weeks – Minimum duration for a globally tracked operation.",
                    C: "8 weeks – Required for any high-stakes operation involving direct community intervention.",
                    D: "3 weeks – The shortest period where field intelligence is considered actionable."
                },
                correct: "A",
                points: 100
            },
            {
                question: `
Question 2: Mission: Dispatch Drama
Scenario: You have been assigned to a classified mission in a high-risk zone. 

Task: To avoid premature exposure, you must ensure your field agents have at least:
                `,
                options: {
                    A: "6 weeks – The standard time required to fully integrate into a new operational environment.",
                    B: "1 week – A rapid-deployment mission for urgent intelligence collection.",
                    C: "2 weeks – Minimum preparation time before on-ground execution.",
                    D: "4 weeks – Ensuring full pre-mission training and adaptation to new protocols."
                },
                correct: "C",
                points: 100
            },
            {
                question: `
Question 3: Mission: Standard Strike
Scenario: The enemy has attempted to insert falsified exchange standards.

Task: Identify the false standard among the following:
                `,
                options: {
                    A: "Impact Measurement Report – Ensuring mission success is documented.",
                    B: "Outgoing Preparation – Pre-deployment briefing and cultural adaptation.",
                    C: "Leadership Development Assessment – Evaluating growth post-mission.",
                    D: "Financial Sponsorship – Mandatory external funding for agent support."
                },
                correct: "D",
                points: 100
            },
            {
                question: `
Question 4: Leadership Development in Crisis
Scenario: Your agent is embedded deep within a foreign intelligence unit (Hosting Entity).
Task: To maintain their cover and ensure operational security, your primary responsibilities include:
                `,
                options: {
                    A: "Managing external surveillance, ensuring agents (volunteers) adhere to international reporting laws.",
                    B: "Facilitating accommodation, logistics, and leadership training, ensuring all assets are field-ready.",
                    C: "Sponsoring all operational costs, ensuring that field agents do not compromise their mission due to resource limitations.",
                    D: "Maintaining continuous contact with home base, ensuring that Exchange Participants do not act without oversight."
                },
                correct: "B",
                points: 100
            },
            {
                question: `
Question 5: Mission: Operation Gatekeeper
Scenario: As a high-ranking intelligence officer (oGV department member), you are responsible for approving agents (EPs) for deployment.

Task: What method are you using to evaluate this?
                `,
                options: {
                    A: "Social media presence to ensure their public profile aligns with AIESEC branding.",
                    B: "Previous operations experience, prioritizing agents with past successful missions.",
                    C: "Compatibility with the mission criteria, ensuring their skills and commitment match the assignment.",
                    D: "Professional certifications and language skills, ensuring they meet industry-specific qualifications."
                },
                correct: "C",
                points: 100
            }
        ]
    },
    igta: {
        studyLink: "https://docs.google.com/document/d/1iGTA_StudyLink_Dummy/edit?usp=sharing",
        questions: [
            {
                question: `
Question 1: iGTA Value Proposition
Scenario: A potential iGTA intern asks why they should join the program instead of a local internship.

Task: What is the best response to highlight iGTA’s value?
                `,
                options: {
                    A: "It offers a higher salary than local internships.",
                    B: "It provides a cross-cultural experience and professional growth aligned with global standards.",
                    C: "It guarantees a job after the internship.",
                    D: "It’s shorter than most local internships."
                },
                correct: "C",
                points: 100
            },
            {
                question: `
Question 2: Partner Engagement
Scenario: An iGTA partner company complains that interns lack the necessary skills for their roles.

Task: How should AIESEC address this issue to maintain the partnership?
                `,
                options: {
                    A: "Ignore the complaint and hope the partner adjusts.",
                    B: "Provide pre-internship training to better prepare interns for the roles.",
                    C: "Assign different interns to the partner without addressing the issue.",
                    D: "End the partnership to avoid further complaints."
                },
                correct: "A",
                points: 100
            },
            {
                question: `
Question 3: Cultural Integration
Scenario: An iGTA intern is struggling to adapt to the host country’s culture, affecting their performance.

Task: What should the program do to support the intern?
                `,
                options: {
                    A: "Tell the intern to figure it out on their own.",
                    B: "Organize cultural immersion activities and provide a local mentor.",
                    C: "Send the intern back to their home country.",
                    D: "Assign the intern to a different project in the same country."
                },
                correct: "D",
                points: 100
            },
            {
                question: `
Question 4: Internship Standards
Scenario: A partner company reports that an iGTA intern’s work hours violate local labor laws.

Task: How should AIESEC respond to ensure compliance?
                `,
                options: {
                    A: "Ignore the report to avoid conflict with the partner.",
                    B: "Investigate the issue and adjust the intern’s schedule to comply with local laws.",
                    C: "Blame the intern for not knowing the laws.",
                    D: "Cancel the internship program with that partner."
                },
                correct: "B",
                points: 100
            },
            {
                question: `
Question 5: Measuring iGTA Impact
Scenario: AIESEC wants to showcase iGTA’s impact on professional development to attract more partners.

Task: What strategy can measure and communicate this impact?
                `,
                options: {
                    A: "Focus on the number of interns placed without further analysis.",
                    B: "Collect testimonials and skill development data from interns and partners.",
                    C: "Increase marketing efforts without measuring impact.",
                    D: "Reduce the number of internships to focus on quality."
                },
                correct: "A",
                points: 100
            }
        ]
    },
    igte: {
        studyLink: "https://docs.google.com/document/d/1iGTe_StudyLink_Dummy/edit?usp=sharing",
        questions: [
            {
                question: `
Question 1: iGTe Value Proposition
Scenario: A potential iGTe teacher asks why they should join the program instead of teaching locally.

Task: What is the best response to highlight iGTe’s value?
                `,
                options: {
                    A: "It offers a higher salary than local teaching positions.",
                    B: "It provides a cross-cultural teaching experience and contributes to global education goals.",
                    C: "It guarantees a permanent teaching position afterward.",
                    D: "It requires less teaching experience than local positions."
                },
                correct: "D",
                points: 100
            },
            {
                question: `
Question 2: Classroom Integration
Scenario: An iGTe teacher struggles to engage students in a host country due to language barriers.

Task: How should AIESEC support the teacher to improve classroom engagement?
                `,
                options: {
                    A: "Tell the teacher to continue teaching without support.",
                    B: "Provide language training and pair the teacher with a local co-teacher.",
                    C: "Reassign the teacher to a different school.",
                    D: "End the teacher’s placement early."
                },
                correct: "C",
                points: 100
            },
            {
                question: `
Question 3: Curriculum Alignment
Scenario: A school hosting an iGTe teacher complains that the teacher’s lessons do not align with the local curriculum.

Task: How should AIESEC address this issue to maintain the partnership?
                `,
                options: {
                    A: "Ignore the complaint and hope the school adjusts.",
                    B: "Work with the teacher to adapt lessons to the local curriculum.",
                    C: "Replace the teacher with a new one.",
                    D: "Cancel the partnership with the school."
                },
                correct: "A",
                points: 100
            },
            {
                question: `
Question 4: Cultural Sensitivity
Scenario: An iGTe teacher unintentionally offends students by not understanding local cultural norms.

Task: What should the program do to address this issue?
                `,
                options: {
                    A: "Ignore the issue and hope it resolves itself.",
                    B: "Provide cultural sensitivity training and facilitate a dialogue with students.",
                    C: "Remove the teacher from the program.",
                    D: "Assign the teacher to a different school."
                },
                correct: "B",
                points: 100
            },
            {
                question: `
Question 5: Measuring iGTe Impact
Scenario: AIESEC wants to showcase iGTe’s impact on education (SDG 4) to attract more schools.

Task: What strategy can measure and communicate this impact?
                `,
                options: {
                    A: "Focus on the number of teachers placed without further analysis.",
                    B: "Collect data on student learning outcomes and teacher feedback.",
                    C: "Increase marketing efforts without measuring impact.",
                    D: "Reduce the number of teaching placements to focus on quality."
                },
                correct: "C",
                points: 100
            }
        ]
    },
    igv: {
        studyLink: "https://docs.google.com/document/d/1iGV_StudyLink_Dummy/edit?usp=sharing",
        questions: [
            {
                question: `
Question 1: iGV Dummy Question 1
Scenario: An incoming volunteer is preparing for their project.

Task: What is the first step they should take?
                `,
                options: {
                    A: "Pack their bags immediately.",
                    B: "Attend a cultural orientation session.",
                    C: "Book their flight without preparation.",
                    D: "Ignore all pre-departure briefings."
                },
                correct: "B",
                points: 100
            },
            {
                question: `
Question 2: iGV Dummy Question 2
Scenario: A volunteer faces a challenge during their project.

Task: What should they do to resolve it?
                `,
                options: {
                    A: "Give up and return home.",
                    B: "Communicate with their project coordinator.",
                    C: "Work alone without support.",
                    D: "Complain on social media."
                },
                correct: "B",
                points: 100
            },
            {
                question: `
Question 3: iGV Dummy Question 3
Scenario: A volunteer needs to measure their project impact.

Task: What tool should they use?
                `,
                options: {
                    A: "A random guess.",
                    B: "A survey to collect feedback.",
                    C: "A social media post.",
                    D: "No tools are needed."
                },
                correct: "B",
                points: 100
            },
            {
                question: `
Question 4: iGV Dummy Question 4
Scenario: A volunteer is unsure about local customs.

Task: How should they proceed?
                `,
                options: {
                    A: "Ignore the customs entirely.",
                    B: "Ask a local team member for guidance.",
                    C: "Assume they know best.",
                    D: "Avoid interacting with locals."
                },
                correct: "B",
                points: 100
            },
            {
                question: `
Question 5: iGV Dummy Question 5
Scenario: A volunteer completes their project.

Task: What should they do next?
                `,
                options: {
                    A: "Leave without any follow-up.",
                    B: "Submit a reflection report.",
                    C: "Forget about the experience.",
                    D: "Avoid sharing feedback."
                },
                correct: "B",
                points: 100
            }
        ]
    },
    marketing: {
        studyLink: "https://docs.google.com/document/d/1Marketing_StudyLink_Dummy/edit?usp=sharing",
        questions: [
            {
                question: `
Question 1: Mission: Brand Integrity Under Attack
Scenario: Enemy intelligence has attempted to manipulate AIESEC’s brand representation in external media.

Task: According to global security protocols, what is the primary brand color of AIESEC that must be upheld at all costs?
                `,
                options: {
                    A: "HEX #F85A40 – AIESEC Red, symbolizing action and dynamism.",
                    B: "HEX #037Ef3 – AIESEC Blue, representing youthful energy and leadership.",
                    C: "HEX #00C16E – AIESEC Green, signifying global sustainability.",
                    D: "HEX #FFC845 – AIESEC Gold, reflecting excellence and ambition."
                },
                correct: "B",
                points: 100
            },
            {
                question: `
Question 2: Mission: Misinformation Counterstrike
Scenario: A rogue agency has been spreading false claims about AIESEC’s leadership programs.

Task: Identify the official AIESEC font used for branding to neutralize the misinformation.
                `,
                options: {
                    A: "Roboto",
                    B: "Raleway",
                    C: "Lato.",
                    D: "Montserrat"
                },
                correct: "C",
                points: 100
            },
            {
                question: `
Question 3: Mission: Unauthorized Media Breach
Scenario: A counterfeit faction has manipulated the organization’s insignia, compromising its integrity across digital channels.

Task: Which operational directive ensures that the AIESEC emblem remains a secure, unaltered identifier?
                `,
                options: {
                    A: "It is subject to rotational adaptation, provided color integrity is preserved.",
                    B: "It must always remain in horizontal position with only the two official color variants.",
                    C: "It is adaptable with graphic enhancements to heighten engagement in target markets.",
                    D: "It remains horizontally aligned under all conditions, without exception."
                },
                correct: "D",
                points: 100
            },
            {
                question: `
Question 4: Mission: Compromised Targeting Matrix
Scenario: A rival entity has restructured the precision-targeting algorithm used in paid AIESEC promotional campaigns, causing an inefficient allocation of resources.

Task: Which of the following audience segmentation strategies is the most critical in ensuring optimal lead generation for exchange products?
                `,
                options: {
                    A: "Behavioral segmentation – Prioritizing historical engagement patterns.",
                    B: "Leadership and sustainability messaging.",
                    C: "Ignoring AIESEC’s mission.",
                    D: "Focusing only on sales."
                },
                correct: "A",
                points: 100
            },
            {
                question: `
Question 5: Mission: The Case of the Vanishing Guidelines
Scenario: A hacking group has deleted a key section of AIESEC’s brand guidelines regarding how the logo should be positioned in relation to other elements. The intelligence team must recover this information.

Task: What is the minimum clear space required around the AIESEC logo?
                `,
                options: {
                    A: "Twice the height of the silhouettes in the logo",
                    B: "The height of the letter 'A' in 'AIESEC'",
                    C: "The width of the 'I' in 'AIESEC'",
                    D: "Half the height of the entire logo"
                },
                correct: "B",
                points: 100
            }
        ]
    },
    bd: {
        studyLink: "https://docs.google.com/document/d/1BD_StudyLink_Dummy/edit?usp=sharing",
        questions: [
            {
                question: `
Question 1: Mission: The Vanishing Prospect
Scenario: You’ve been tracking a high-value lead for weeks. The contact was warm, but suddenly, they’ve gone silent. Your team needs a strategy to re-engage them without raising suspicion.

Task: What’s your next move?
                `,
                options: {
                    A: "Send an email reinforcing the urgency of the deal with a strict deadline.",
                    B: "Call repeatedly until they respond.",
                    C: "Disguise your approach—share a case study relevant to their pain points.",
                    D: "Assume they’re no longer interested and abandon the lead."
                },
                correct: "C",
                points: 100
            },
            {
                question: `
Question 2: Mission: The Competitor's Playbook
Scenario: A rival BD agency has been gaining traction, and your intelligence unit reports they’re leveraging partnerships in a new, untapped market. Your leadership expects a counterplay.

Task: What’s your best course of action?
                `,
                options: {
                    A: "Rush into the new market with aggressive pricing to undercut them.",
                    B: "Conduct competitive analysis to identify gaps in their approach and position your offer uniquely.",
                    C: "Sabotage their deals by spreading misleading information.",
                    D: "Ignore the market shift and continue with the current strategy."
                },
                correct: "B",
                points: 100
            },
            {
                question: `
Question 3: Mission: The Stagnant Deal
Scenario: A promising lead has expressed interest in your solution but keeps delaying the contract signing. Your intel suggests they have internal decision-making roadblocks.

Task: What should be highlighted?
                `,
                options: {
                    A: "Follow up with urgency, emphasizing that the deal will expire soon.",
                    B: "Move on to another lead without pushing further.",
                    C: "Demand a response immediately to avoid wasting time.",
                    D: "Identify the key decision-maker and offer additional value to align with their priorities."
                },
                correct: "D",
                points: 100
            },
            {
                question: `
Question 4: Mission: The Covert Partnership
Scenario: You've secured a high-value partnership with an external organization, but before the deal is locked in, the Partnership Agreement must be drafted. Your job is to ensure the agreement is airtight, benefiting both parties while avoiding loopholes that could compromise AIESEC’s interests.

Task: What should be included in the agreement to ensure a successful mission?
                `,
                options: {
                    A: "Keep terms vague to allow flexibility, even if it leads to misunderstandings.",
                    B: "Define clear roles, responsibilities, and mutual benefits to ensure alignment.",
                    C: "Focus only on AIESEC’s demands, disregarding the partner’s expectations.",
                    D: "Exclude deadlines or timelines to maintain an open-ended commitment."
                },
                correct: "B",
                points: 100
            },
            {
                question: `
Question 5: Mission: The Shadow Clause
Scenario: A potential partner is eager to sign an agreement, but your intel team spots a hidden clause that could put AIESEC at a disadvantage. The partner insists it’s “just a formality.”
Task: How do you handle this situation?
                `,
                options: {
                    A: "Sign immediately to secure the deal and address concerns later.",
                    B: "Ignore the clause—it’s probably not important.",
                    C: "Conduct a thorough review, negotiate terms, and ensure transparency.",
                    D: "Confront the partner aggressively, assuming bad intent."
                },
                correct: "C",
                points: 100
            }
        ]
    }
};

// Mission Concepts
const missionConcepts = {
    ogv: {
        title: "Welcome Agent!",
        text: "You have been assigned to Operation Outgoing Global Volunteer (oGV), a high-risk intelligence mission where the success of AIESEC’s global impact is in your hands. Your objective is to infiltrate and secure a classified international exchange network while ensuring full compliance with AIESEC’s protocols. However, enemy agents seek to disrupt the exchange process by exploiting loopholes in standards, tracking failures, and breaking key regulations. To survive, you must demonstrate expertise in pipeline management, exchange policies, and impact measurement, ensuring your mission doesn’t collapse due to operational inefficiencies."
    },
    igta: {
        title: "Greetings Agent!",
        text: "Agent, incoming operatives have been deployed to our location, carrying out high-priority assignments that will impact global operations. However, intelligence suggests external forces are working to disrupt their transition—delays, miscommunication, and unforeseen barriers threaten to compromise their success. Your mission is clear: protect, guide, and integrate these operatives into their designated roles, ensuring they can execute their objectives without interference. Any lapse in security could jeopardize not only their mission but the integrity of our entire network."
    },
    igte: {
        title: "Hello Agent!",
        text: "Agent, high-value specialists are arriving at our location, each possessing critical expertise that could shift the balance of global operations. However, intelligence reports indicate hostile disruptions—logistical failures, compliance breaches, and operational gaps—that threaten to derail their assignments. Your mission is to fortify the integration process, ensuring these specialists can execute their objectives without interference. A compromised onboarding sequence could result in mission failure, destabilizing not only their work but our standing in the global network."
    },
    igv: {
        title: "Incoming Agent Alert!",
        text: "Agent, you’ve been assigned to Operation Incoming Global Volunteer (iGV), a critical mission to manage incoming volunteers who are key to AIESEC’s global impact. Your task is to ensure their seamless integration into projects while countering external threats like logistical failures and cultural misunderstandings. Failure to secure their deployment could disrupt AIESEC’s operations and compromise our global network."
    },
    marketing: {
        title: "Marketing Ops Activated!",
        text: "Agent, you’re now part of Operation Marketing Ops, where AIESEC’s global visibility is at stake. Your mission is to execute high-impact campaigns that amplify our mission, but enemy forces are spreading misinformation to undermine our efforts. You must craft strategies, align with AIESEC’s values, and measure impact to ensure our message reaches the right audience without interference."
    },
    bd: {
        title: "Business Dev Mission!",
        text: "Agent, welcome to Operation Business Development (BD), where AIESEC’s growth depends on your ability to secure strategic partnerships. Hostile entities are attempting to sabotage our collaborations through mistrust and miscommunication. Your objective is to build strong alliances, negotiate terms, and ensure mutual success, all while safeguarding AIESEC’s reputation in the global arena."
    }
};

// Game State
let currentDept = null;
let currentQuestion = 0;
let answers = [];
let scores = [];
let timeTaken = [];
let timerInterval;
let timeLeft = 300; // 5 minutes in seconds
let selectedOption = null;

// Google Sheets Backend URL (Replace with your Google Apps Script Web App URL)
const GOOGLE_SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbyT02Hkof1Y_xByNyuD90mgAC_NGjVuShLUxL_OWdJE6AQxYD8P-4-i6o7UpYSOUion/exec"; // Replace with your actual URL

// Load game history from localStorage
function loadHistory() {
    const history = localStorage.getItem('gameHistory');
    return history ? JSON.parse(history) : [];
}

// Save game history to localStorage
function saveHistory(history) {
    localStorage.setItem('gameHistory', JSON.stringify(history));
}

// Send game data to Google Sheets
async function sendToGoogleSheets(data) {
    try {
        const response = await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            mode: 'no-cors', // Use 'no-cors' since Google Apps Script doesn't return CORS headers
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log('Data sent to Google Sheets:', data);
    } catch (error) {
        console.error('Error sending data to Google Sheets:', error);
    }
}

// Evaluate an answer
function evaluateAnswer(selected, correct, timeTaken, timeLimit = 300) {
    let score = 0;
    let feedback = [];

    // Check if the selected option is correct
    if (selected === correct) {
        score += 80;
        feedback.push("Correct! Well done, Agent!");
    } else {
        feedback.push("Incorrect. Review the Mission material and try again next time.");
    }

    // Bonus points for quick answers (up to 20 points)
    const timeUsed = Math.min(timeTaken, timeLimit); // Ensure timeTaken doesn't exceed timeLimit
    const timeRemaining = timeLimit - timeUsed; // Time left after answering

    if (timeRemaining >= 0) {
        // Award more points for faster answers (smaller timeUsed)
        const timeBonus = Math.round((timeRemaining / timeLimit) * 20);
        score += timeBonus;
        feedback.push(`Time bonus: +${timeBonus} points for answering in ${timeUsed} seconds!`);
    } else {
        feedback.push("Time's up! No time bonus awarded.");
    }

    return { score, feedback };
}

// Update progress bar
function updateProgress() {
    const progress = (currentQuestion / missions[currentDept].questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
    document.getElementById('progress').innerText = `${Math.round(progress)}%`;
    document.getElementById("progress-bar").textContent = `${Math.round(progress)}%`;
    document.querySelectorAll(".status").forEach((status, i) => {
        const dept = ["ogv", "igta", "igte", "igv", "marketing", "bd"][i]; // Updated with new departments
        status.textContent = `${agent.progress[dept]}/${missions[dept].questions.length}`;
    });
}

// Start the timer
function startTimer() {
    timeLeft = 300;
    document.getElementById('timer').innerText = `Time Left: ${timeLeft} seconds`;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Time Left: ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitAnswer(true); // Auto-submit when time is up
        }
    }, 1000);
}

// Select an option
function selectOption(option) {
    selectedOption = option;
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.textContent.startsWith(option)) {
            btn.classList.add('selected');
        }
    });
}

// Reset option buttons
function resetOptions() {
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
        btn.style.backgroundColor = ''; // Reset any inline styles
        btn.style.color = ''; // Reset text color
        btn.style.border = ''; // Reset border
    });
}

// Start a new game
function startNewGame() {
    currentDept = null;
    currentQuestion = 0;
    answers = [];
    scores = [];
    timeTaken = [];
    document.getElementById('department-page').style.display = 'block';
    document.getElementById('mission-page').style.display = 'none';
    document.getElementById('questions-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'none';
    document.getElementById('history-page').style.display = 'none';
    updateProgress();
}

// Select a department
document.querySelectorAll(".dept-card").forEach(card => {
    card.addEventListener("click", () => {
        currentDept = card.getAttribute("data-dept");
        console.log("Selected department:", currentDept); // Debug: Log the selected department
        console.log("Mission concept for", currentDept, ":", missionConcepts[currentDept]); // Debug: Log the mission concept

        agent.progress[currentDept] = 0; // Reset progress for the selected department
        document.getElementById('department-page').style.display = 'none';
        document.getElementById('mission-page').style.display = 'block';

        // Ensure the mission concept exists and update the DOM
        if (missionConcepts[currentDept]) {
            document.getElementById('mission-concept-title').innerText = missionConcepts[currentDept].title || "Title Not Found";
            document.getElementById('mission-concept-text').innerText = missionConcepts[currentDept].text || "Text Not Found";
        } else {
            console.error("Mission concept not found for department:", currentDept);
            document.getElementById('mission-concept-title').innerText = "Error: Concept Not Found";
            document.getElementById('mission-concept-text').innerText = "Please check the department configuration.";
        }

        updateProgress();
    });
});

// Proceed to questions
function startGame() {
    document.getElementById('mission-page').style.display = 'none';
    document.getElementById('questions-page').style.display = 'block';
    updateProgress();
    showQuestion();
}

// Show the current question
function showQuestion() {
    if (currentQuestion < missions[currentDept].questions.length) {
        selectedOption = null;
        document.getElementById('question-number').innerText = `Question ${currentQuestion + 1} of ${missions[currentDept].questions.length}`;
        document.getElementById('question-content').innerText = missions[currentDept].questions[currentQuestion].question;
        document.getElementById('feedback').innerText = '';

        // Reset and update options
        resetOptions();
        const options = missions[currentDept].questions[currentQuestion].options;
        document.querySelectorAll('.option-btn').forEach(btn => {
            const optionLetter = btn.textContent.charAt(0); // Get the option letter (A, B, C, D)
            btn.textContent = `${optionLetter}: ${options[optionLetter]}`; // Update the button text
        });

        startTimer();
    } else {
        showResults();
    }
}

// Submit an answer
function submitAnswer(autoSubmit = false) {
    clearInterval(timerInterval);
    if (!selectedOption && !autoSubmit) {
        alert('Please select an option before submitting.');
        startTimer(); // Restart the timer if no option is selected
        return;
    }

    const timeUsed = 300 - timeLeft; // Correctly calculate time used
    const correctAnswer = missions[currentDept].questions[currentQuestion].correct;
    const { score, feedback } = evaluateAnswer(selectedOption, correctAnswer, timeUsed); // Pass timeUsed
    answers.push({
        question: missions[currentDept].questions[currentQuestion].question,
        selected: selectedOption || "None",
        correct: correctAnswer,
        score,
        feedback,
        timeTaken: timeUsed
    });
    scores.push(score);
    timeTaken.push(timeUsed);

    // Update option buttons to show correct and incorrect answers
    document.querySelectorAll('.option-btn').forEach(btn => {
        const option = btn.textContent.charAt(0); // Get the option letter (A, B, C, D)
        if (option === correctAnswer) {
            btn.classList.add('correct'); // Turn the correct answer green
        }
        if (option === selectedOption && selectedOption !== correctAnswer) {
            btn.classList.add('incorrect'); // Turn the selected answer red if incorrect
        }
    });

    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerText = `Score: ${score}/100\nFeedback: ${feedback.join(' ')}`;
    feedbackDiv.className = score >= 80 ? 'success' : 'error';

    agent.progress[currentDept]++;
    agent.points += score;
    document.getElementById("agent-points").textContent = agent.points;

    currentQuestion++;
    updateProgress();
    setTimeout(showQuestion, 2000); // Wait 2 seconds before showing the next question
}

// Show the results
function showResults() {
    document.getElementById('questions-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'block';

    const totalScore = scores.reduce((a, b) => a + b, 0);
    const maxScore = missions[currentDept].questions.length * 100;
    document.getElementById('total-score').innerText = `Total Score: ${totalScore}/${maxScore}`;

    let overallFeedback = '';
    if (totalScore >= maxScore * 0.8) {
        overallFeedback = "Excellent work! You demonstrated a strong understanding of the program.";
    } else if (totalScore >= maxScore * 0.5) {
        overallFeedback = "Good effort! Try to review the material more carefully to improve your score.";
    } else {
        overallFeedback = "Nice try! Review the Mission material and focus on the key concepts.";
    }
    document.getElementById('overall-feedback').innerText = overallFeedback;

    const answersList = document.getElementById('answers-list');
    answersList.innerHTML = '';
    answers.forEach((item, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-item';
        answerDiv.innerHTML = `
            <h4>Question ${index + 1}</h4>
            <p>${item.question}</p>
            <p><strong>Your Answer:</strong> ${item.selected}: ${missions[currentDept].questions[index].options[item.selected]}</p>
            <p><strong>Correct Answer:</strong> ${item.correct}: ${missions[currentDept].questions[index].options[item.correct]}</p>
            <p><strong>Score:</strong> ${item.score}/100</p>
            <p><strong>Time Taken:</strong> ${item.timeTaken} seconds</p>
            <p><strong>Feedback:</strong> ${item.feedback.join(' ')}</p>
        `;
        answersList.appendChild(answerDiv);
    });

    // Save game to history (localStorage)
    const history = loadHistory();
    const gameData = {
        timestamp: new Date().toISOString(),
        department: currentDept,
        totalScore,
        maxScore,
        answers
    };
    history.push(gameData);
    saveHistory(history);

    // Send game data to Google Sheets
    const sheetData = {
        AgentName: agent.name,
        Department: currentDept,
        TotalScore: totalScore,
        MaxScore: maxScore,
        Timestamp: new Date().toISOString(),
        Answers: JSON.stringify(answers)
    };
    sendToGoogleSheets(sheetData);

    updateLeaderboard();
}

// Show game history
function showHistory() {
    document.getElementById('results-page').style.display = 'none';
    document.getElementById('history-page').style.display = 'block';

    const history = loadHistory();
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

    if (history.length === 0) {
        historyList.innerHTML = '<p>No past missions found.</p>';
        return;
    }

    history.forEach((game, gameIndex) => {
        const gameDiv = document.createElement('div');
        gameDiv.className = 'history-item';
        gameDiv.innerHTML = `
            <h4>Mission ${gameIndex + 1} (${game.department.toUpperCase()}) - Completed on ${new Date(game.timestamp).toLocaleString()}</h4>
            <p><strong>Total Score:</strong> ${game.totalScore}/${game.maxScore}</p>
            <h5>Answers:</h5>
        `;
        game.answers.forEach((item, answerIndex) => {
            gameDiv.innerHTML += `
                <p><strong>Question ${answerIndex + 1}:</strong></p>
                <p>${item.question}</p>
                <p><strong>Your Answer:</strong> ${item.selected}: ${missions[game.department].questions[answerIndex].options[item.selected]}</p>
                <p><strong>Correct Answer:</strong> ${item.correct}: ${missions[game.department].questions[answerIndex].options[item.correct]}</p>
                <p><strong>Score:</strong> ${item.score}/100</p>
                <p><strong>Time Taken:</strong> ${item.timeTaken} seconds</p>
                <p><strong>Feedback:</strong> ${item.feedback.join(' ')}</p>
                <hr>
            `;
        });
        historyList.appendChild(gameDiv);
    });
}

// Leaderboard
let leaderboard = [
    { name: "Agent Spark", points: 480 },
    { name: "Agent Vizag", points: 450 },
    { name: "Agent Neon", points: 400 }
];
const sheetId = "1Q8aqU88BUvufZp8ZyUmnWjceeZ77DfVwmbKLiQl5VrQ"; // Replace with your Google Sheet ID
const apiKey = "AIzaSyB55fo5OxQQ3cFCVr_duHTD8hHqrl5FA3k"; // Replace with your API Key
const range = "Sheet1!A2:C"; // Adjust based on your sheet's structure

function updateLeaderboard() {
    const playerEntry = leaderboard.find(entry => entry.name === agent.name);
    if (playerEntry) {
        playerEntry.points = agent.points;
    } else {
        leaderboard.push({ name: agent.name, points: agent.points });
    }
    leaderboard.sort((a, b) => b.points - a.points);
    leaderboard = leaderboard.slice(0, 5); // Top 5 only
    document.getElementById("leaderboard-list").innerHTML = leaderboard.map(item => `<li>${item.name}: ${item.points} points</li>`).join("");
}

// Save and Load Progress
document.getElementById("save-progress").addEventListener("click", () => {
    localStorage.setItem("agentProgress", JSON.stringify(agent));
    alert("Progress Saved, Agent!");
});

document.getElementById("load-progress").addEventListener("click", () => {
    const saved = localStorage.getItem("agentProgress");
    if (saved) {
        agent = JSON.parse(saved);
        document.getElementById("agent-name").textContent = agent.name;
        document.getElementById("agent-points").textContent = agent.points;
        updateProgress();
        updateLeaderboard();
        alert("Progress Loaded, Agent!");
    }
});

// Initial Setup
updateLeaderboard();
startNewGame();
