// Agent Data
let agent = {
    name: prompt("Enter your Agent Name:", "Agent X") || "Agent X",
    progress: {
        ogv: 0,
        igv: 0,
        tm: 0,
        bd: 0,
        marcomm: 0
    },
    points: 0,
    badges: []
};

document.getElementById("agent-name").textContent = agent.name;
document.getElementById("agent-points").textContent = agent.points;

// Study Materials (Replace with your Google Doc link)
const STUDY_MATERIALS = "https://docs.google.com/document/d/1_BireEvcYoUEQbtDrUoOEioyTaoYJWAQe6kiYEl_Rg8/edit?usp=sharing";

// Mission Data (All 51 topics with challenging questions)
const missions = {
    ogv: [
        { id: 1, title: "GV Basics", desc: "Understand GV value", game: "scenario", scenario: "An EP asks why GV matters. What’s your response?", options: ["A) Cultural experience", "B) Free travel", "C) Just for fun"], correct: "A) Cultural experience", points: 20 },
        { id: 2, title: "CF Phases", desc: "Master conversion", game: "drag-drop", items: ["Lead", "Contact", "Convert"], correctOrder: ["Lead", "Contact", "Convert"], points: 30 },
        { id: 3, title: "Pitching Basics", desc: "Craft a pitch", game: "codebreaker", code: "GV2025", clue: "The code is the program name and current year", points: 25 },
        { id: 4, title: "Lead Contact", desc: "Engage leads", game: "scenario", scenario: "A lead ghosts you. What’s your next step?", options: ["A) Follow up politely", "B) Give up", "C) Spam them"], correct: "A) Follow up politely", points: 20 },
        { id: 5, title: "EP Qualifications", desc: "Assess EPs", game: "match", pairs: ["Skills: High", "Experience: Low"], correctPairs: [["Skills: High", "Experience: Low"]], points: 15 },
        { id: 6, title: "Parental Permissions", desc: "Secure NOCs", game: "quiz", questions: ["What’s the first step for NOCs? A) Email parents B) Ignore them"], correct: "A) Email parents", points: 15 },
        { id: 7, title: "EP Engagement", desc: "Keep EPs active", game: "text", task: "Propose a detailed engagement plan (30 words)", points: 25 },
        { id: 8, title: "Standards Tracking", desc: "Track standards", game: "simulation", scenario: "An EP reports a bad experience. What do you do?", choices: ["A) Investigate", "B) Ignore"], outcomes: ["A) EP trusts you (+10 points)", "B) EP leaves (-5 points)"], correct: "A) Investigate", points: 20 },
        { id: 9, title: "Crisis Management", desc: "Handle crises", game: "scenario", scenario: "An EP is stuck abroad. What’s your priority?", options: ["A) Contact embassy", "B) Wait it out", "C) Blame the EP"], correct: "A) Contact embassy", points: 30 }
    ],
    igv: [
        { id: 18, title: "GV Value", desc: "Explain GV appeal", game: "text", task: "Write a 30-word pitch explaining GV’s impact", points: 25 },
        { id: 19, title: "IR Locally", desc: "Drive IR locally", game: "quiz", questions: ["What’s key for local IR? A) Clear timelines B) Random emails"], correct: "A) Clear timelines", points: 15 },
        { id: 23, title: "SOPs", desc: "Prevent back-outs", game: "drag-drop", items: ["Set expectations", "Follow up", "Sign contract"], correctOrder: ["Set expectations", "Follow up", "Sign contract"], points: 30 },
        { id: 24, title: "Exchange Standards", desc: "Deliver standards", game: "match", pairs: ["EP: Happy", "Partner: Clear"], correctPairs: [["EP: Happy", "Partner: Clear"]], points: 20 },
        { id: 25, title: "NPS Importance", desc: "Understand NPS", game: "scenario", scenario: "An EP gives a low NPS score. What do you do?", options: ["A) Ask for feedback", "B) Ignore it"], correct: "A) Ask for feedback", points: 20 },
        { id: 26, title: "Engaging EPs", desc: "Engage EPs", game: "text", task: "Plan a 30-word virtual event for EPs", points: 25 },
        { id: 29, title: "IR National", desc: "Scale IR nationally", game: "codebreaker", code: "IRN2025", clue: "The code is IR National and current year", points: 25 }
    ],
    tm: [
        { id: 8, title: "Standards Now", desc: "Compare delivery", game: "match", pairs: ["Now: Fast", "Pre-RE: Slow"], correctPairs: [["Now: Fast", "Pre-RE: Slow"]], points: 15 },
        { id: 17, title: "Standards Pre-RE", desc: "Compare past delivery", game: "quiz", questions: ["Pre-RE issue? A) Speed B) Quality"], correct: "A) Speed", points: 15 },
        { id: 20, title: "Client Sales", desc: "Raise clients", game: "text", task: "Write a 30-word sales pitch for a client", points: 25 },
        { id: 28, title: "GT History", desc: "Know GT value", game: "scenario", scenario: "A client asks about GT’s impact. What do you say?", options: ["A) Youth leadership", "B) Profit focus"], correct: "A) Youth leadership", points: 20 },
        { id: 46, title: "Customer Satisfaction", desc: "Measure satisfaction", game: "simulation", scenario: "A partner complains about delivery. What’s your action?", choices: ["A) Survey them", "B) Ignore"], outcomes: ["A) Partner stays (+10 points)", "B) Partner leaves (-5 points)"], correct: "A) Survey them", points: 20 }
    ],
    bd: [
        { id: 21, title: "Market Research", desc: "Learn research basics", game: "quiz", questions: ["Best research method? A) Survey B) Guess"], correct: "A) Survey", points: 15 },
        { id: 22, title: "SOP Growth", desc: "Implement SOPs", game: "text", task: "List 3 SOPs for growth (30 words)", points: 25 },
        { id: 31, title: "Advanced Research", desc: "Deep dive research", game: "scenario", scenario: "A partner needs data. What’s your first step?", options: ["A) Conduct survey", "B) Guess"], correct: "A) Conduct survey", points: 20 },
        { id: 32, title: "SOP Scaling", desc: "Scale with SOPs", game: "drag-drop", items: ["Plan", "Execute", "Review"], correctOrder: ["Plan", "Execute", "Review"], points: 30 },
        { id: 45, title: "Networking", desc: "Build externals", game: "text", task: "Write a 30-word networking intro", points: 25 },
        { id: 47, title: "Elevator Pitch", desc: "Craft a pitch", game: "codebreaker", code: "BDPITCH", clue: "The code is BD and what you’re crafting", points: 25 },
        { id: 49, title: "Networking Do’s", desc: "Learn networking tips", game: "scenario", scenario: "At an event, how do you network?", options: ["A) Listen actively", "B) Talk only"], correct: "A) Listen actively", points: 20 }
    ],
    marcomm: [
        { id: 38, title: "Branding", desc: "Align to AIESEC", game: "text", task: "Write a 30-word brand tagline for AIESEC", points: 25 },
        { id: 39, title: "Visual Content", desc: "Design basics", game: "quiz", questions: ["Best design tool? A) Canva B) Paint"], correct: "A) Canva", points: 15 },
        { id: 40, title: "Copywriting", desc: "Write engaging copy", game: "text", task: "Write a 30-word event caption", points: 25 },
        { id: 41, title: "Design Skills", desc: "Learn design", game: "scenario", scenario: "A post needs balance. What do you focus on?", options: ["A) Symmetry", "B) Chaos"], correct: "A) Symmetry", points: 20 },
        { id: 42, title: "Showcase", desc: "Share experiences", game: "drag-drop", items: ["Story", "Photo", "Share"], correctOrder: ["Story", "Photo", "Share"], points: 30 },
        { id: 43, title: "Product Events", desc: "Plan events", game: "text", task: "List 3 event ideas (30 words)", points: 25 },
        { id: 44, title: "Event Planning", desc: "Organize events", game: "simulation", scenario: "An event is over budget. What do you do?", choices: ["A) Cut costs", "B) Ignore"], outcomes: ["A) Event succeeds (+10 points)", "B) Event fails (-5 points)"], correct: "A) Cut costs", points: 20 },
        { id: 51, title: "Email Comm", desc: "Write pro emails", game: "codebreaker", code: "EMAIL2025", clue: "The code is the task and current year", points: 25 }
    ]
};

// Google Sheets Web App URL (Replace with your URL)
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1Q8aqU88BUvufZp8ZyUmnWjceeZ77DfVwmbKLiQl5VrQ/edit?usp=sharing";

// Modal Logic
const modal = document.getElementById("mission-modal");
const closeBtn = document.querySelector(".close");
const missionTitle = document.getElementById("mission-title");
const missionDesc = document.getElementById("mission-desc");
const missionGame = document.getElementById("mission-game");
const completeBtn = document.getElementById("complete-mission");
const missionResult = document.getElementById("mission-result");
const missionTimer = document.getElementById("mission-timer");
const missionPoints = document.getElementById("mission-points");
const studyLink = document.getElementById("study-link");

let currentDept, currentIndex, timer, timeLeft, currentPoints;

document.querySelectorAll(".dept-card").forEach(card => {
    card.addEventListener("click", () => {
        currentDept = card.getAttribute("data-dept");
        currentIndex = agent.progress[currentDept];
        if (currentIndex < missions[currentDept].length) {
            showMission(currentDept, currentIndex);
        } else {
            alert("All missions in this department completed, Agent!");
            checkBadges();
        }
    });
});

function showMission(dept, index) {
    const mission = missions[dept][index];
    missionTitle.textContent = mission.title;
    missionDesc.textContent = mission.desc;
    missionResult.textContent = "";
    missionGame.innerHTML = "";
    timeLeft = 30;
    currentPoints = mission.points;
    missionTimer.textContent = timeLeft;
    missionPoints.textContent = currentPoints;
    studyLink.href = STUDY_MATERIALS;

    if (mission.game === "quiz") {
        missionGame.innerHTML = `<p>${mission.questions[0]}</p><input type="text" id="quiz-answer"><button onclick="checkQuiz('${mission.correct}')">Submit</button>`;
    } else if (mission.game === "drag-drop") {
        missionGame.innerHTML = `<div class="drag-area" id="drag-area">${mission.items.map(item => `<div draggable="true" class="drag-item">${item}</div>`).join("")}</div>`;
        setupDragDrop(mission.correctOrder);
    } else if (mission.game === "text") {
        missionGame.innerHTML = `<textarea id="text-answer" placeholder="${mission.task}"></textarea>`;
    } else if (mission.game === "match") {
        missionGame.innerHTML = `<div class="match-area" id="match-area">${mission.pairs.map(pair => `<span class="match-item">${pair}</span>`).join("")}</div>`;
        setupMatch(mission.correctPairs);
    } else if (mission.game === "scenario") {
        missionGame.innerHTML = `<p>${mission.scenario}</p>${mission.options.map((opt, i) => `<button onclick="checkScenario('${opt}', '${mission.correct}')">${opt}</button>`).join("")}`;
    } else if (mission.game === "codebreaker") {
        missionGame.innerHTML = `<p>Clue: ${mission.clue}</p><input type="text" id="code-answer"><button onclick="checkCodebreaker('${mission.code}')">Submit</button>`;
    } else if (mission.game === "simulation") {
        missionGame.innerHTML = `<p>${mission.scenario}</p>${mission.choices.map((choice, i) => `<button onclick="runSimulation('${choice}', '${mission.correct}', '${mission.outcomes[i]}')">${choice}</button>`).join("")}`;
    }

    modal.style.display = "block";
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        missionTimer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            missionResult.textContent = "Time’s up! Mission Failed.";
            playSound("fail");
            setTimeout(() => modal.style.display = "none", 1000);
        }
    }, 1000);
}

function checkQuiz(correct) {
    const answer = document.getElementById("quiz-answer").value.trim().toLowerCase();
    if (answer === correct.toLowerCase()) {
        missionResult.textContent = "Correct! Ready to complete mission.";
        playSound("success");
    } else {
        missionResult.textContent = "Wrong—try again, Agent!";
        currentPoints -= 5;
        missionPoints.textContent = currentPoints;
        playSound("fail");
    }
}

function setupDragDrop(correctOrder) {
    const dragArea = document.getElementById("drag-area");
    let draggedItem = null;

    dragArea.addEventListener("dragstart", (e) => {
        draggedItem = e.target;
    });

    dragArea.addEventListener("dragover", (e) => e.preventDefault());

    dragArea.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("drag-item") && e.target !== draggedItem) {
            const allItems = [...dragArea.querySelectorAll(".drag-item")];
            const draggedIndex = allItems.indexOf(draggedItem);
            const targetIndex = allItems.indexOf(e.target);
            if (draggedIndex < targetIndex) {
                e.target.parentNode.insertBefore(draggedItem, e.target.nextSibling);
            } else {
                e.target.parentNode.insertBefore(draggedItem, e.target);
            }
        }
    });

    completeBtn.addEventListener("click", () => {
        const currentOrder = [...dragArea.querySelectorAll(".drag-item")].map(item => item.textContent);
        if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
            missionResult.textContent = "Order correct! Ready to complete.";
            playSound("success");
            completeMission();
        } else {
            missionResult.textContent = "Incorrect order—try again!";
            currentPoints -= 5;
            missionPoints.textContent = currentPoints;
            playSound("fail");
        }
    }, { once: true });
}

function setupMatch(correctPairs) {
    const matchArea = document.getElementById("match-area");
    let selected = [];

    matchArea.addEventListener("click", (e) => {
        if (e.target.classList.contains("match-item")) {
            e.target.classList.toggle("selected");
            selected = [...matchArea.querySelectorAll(".selected")].map(item => item.textContent);
            if (selected.length === 2) {
                const pair = selected.sort().join(" - ");
                const correct = correctPairs.map(p => p.sort().join(" - "));
                if (correct.includes(pair)) {
                    missionResult.textContent = "Match correct! Ready to complete.";
                    playSound("success");
                } else {
                    missionResult.textContent = "Match incorrect—try again!";
                    currentPoints -= 5;
                    missionPoints.textContent = currentPoints;
                    playSound("fail");
                    matchArea.querySelectorAll(".selected").forEach(item => item.classList.remove("selected"));
                }
                selected = [];
            }
        }
    });
}

function checkScenario(selected, correct) {
    if (selected === correct) {
        missionResult.textContent = "Correct decision! Ready to complete mission.";
        playSound("success");
    } else {
        missionResult.textContent = "Wrong decision—try again, Agent!";
        currentPoints -= 5;
        missionPoints.textContent = currentPoints;
        playSound("fail");
    }
}

function checkCodebreaker(correctCode) {
    const answer = document.getElementById("code-answer").value.trim().toUpperCase();
    if (answer === correctCode) {
        missionResult.textContent = "Code cracked! Ready to complete mission.";
        playSound("success");
    } else {
        missionResult.textContent = "Incorrect code—try again, Agent!";
        currentPoints -= 5;
        missionPoints.textContent = currentPoints;
        playSound("fail");
    }
}

function runSimulation(choice, correct, outcome) {
    missionResult.textContent = outcome;
    if (choice === correct) {
        playSound("success");
        if (outcome.includes("+")) {
            const bonus = parseInt(outcome.match(/\+(\d+)/)[1]);
            currentPoints += bonus;
            missionPoints.textContent = currentPoints;
        }
    } else {
        playSound("fail");
        if (outcome.includes("-")) {
            const penalty = parseInt(outcome.match(/\-(\d+)/)[1]);
            currentPoints -= penalty;
            missionPoints.textContent = currentPoints;
        }
    }
}

closeBtn.addEventListener("click", () => {
    clearInterval(timer);
    modal.style.display = "none";
});

function completeMission() {
    clearInterval(timer);
    agent.progress[currentDept]++;
    agent.points += currentPoints;
    document.getElementById("agent-points").textContent = agent.points;
    updateProgress();
    saveToGoogleSheets(missions[currentDept][currentIndex]);
    missionResult.textContent = "Mission Success, Agent! +" + currentPoints + " points";
    playSound("success");
    modal.classList.add("confetti");
    setTimeout(() => modal.style.display = "none", 2000);
    checkBadges();
    updateLeaderboard();
}

completeBtn.addEventListener("click", () => {
    const mission = missions[currentDept][currentIndex];
    let completed = false;

    if (mission.game === "quiz") {
        const answer = document.getElementById("quiz-answer").value.trim().toLowerCase();
        completed = answer === mission.correct.toLowerCase();
    } else if (mission.game === "text") {
        const text = document.getElementById("text-answer").value.trim();
        completed = text.length >= 30; // Require at least 30 words
        if (!completed) {
            missionResult.textContent = "Response too short—need 30 words!";
            playSound("fail");
        }
    } else if (mission.game === "scenario") {
        completed = missionResult.textContent.includes("Correct");
    } else if (mission.game === "codebreaker") {
        const answer = document.getElementById("code-answer").value.trim().toUpperCase();
        completed = answer === mission.code;
    } else if (mission.game === "simulation") {
        completed = missionResult.textContent.includes("(+");
    } else if (mission.game === "drag-drop" || mission.game === "match") {
        completed = missionResult.textContent.includes("correct");
    }

    if (completed) {
        completeMission();
    } else if (!missionResult.textContent) {
        missionResult.textContent = "Complete the challenge first, Agent!";
        playSound("fail");
    }
});

function saveToGoogleSheets(mission) {
    const data = {
        agentName: agent.name,
        department: currentDept,
        missionTitle: mission.title,
        score: currentPoints
    };

    fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(result => {
        if (result.result === "success") {
            console.log("Data saved to Google Sheets!");
        } else {
            console.error("Save failed:", result.error);
        }
    })
    .catch(error => console.error("Error:", error));
}

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
        alert("Mission Loaded, Agent!");
    }
});

function updateProgress() {
    const total = Object.values(agent.progress).reduce((a, b) => a + b, 0);
    document.getElementById("progress-bar").textContent = `${Math.round(total / 51 * 100)}%`;
    document.querySelectorAll(".status").forEach((status, i) => {
        const dept = ["ogv", "igv", "tm", "bd", "marcomm"][i];
        status.textContent = `${agent.progress[dept]}/${missions[dept].length}`;
    });
}

function checkBadges() {
    const deptNames = {
        ogv: "Field Agent",
        igv: "Infiltrator",
        tm: "HQ Crew",
        bd: "Deal Decoder",
        marcomm: "Propaganda Pro"
    };
    for (const dept in agent.progress) {
        if (agent.progress[dept] === missions[dept].length && !agent.badges.includes(dept)) {
            agent.badges.push(dept);
            alert(`Badge Earned: Master ${deptNames[dept]}!`);
        }
    }
}

let leaderboard = [
    { name: "Agent Spark", points: 80 },
    { name: "Agent Vizag", points: 65 },
    { name: "Agent Neon", points: 50 }
];

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

function playSound(type) {
    const sound = document.getElementById(type === "success" ? "success-sound" : "fail-sound");
    sound.play().catch(error => console.log("Sound play failed:", error));
}

// Initial leaderboard render
updateLeaderboard();
