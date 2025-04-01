// Agent Data
let agent = {
    name: prompt("Enter your Agent Name:", "Agent X") || "Agent X",
    progress: {
        ogv: 0,
        igv: 0,
        tm: 0,
        bd: 0,
        marcomm: 0
    }
};

document.getElementById("agent-name").textContent = agent.name;

// Mission Data (Truncated for brevity—expand with all 51 topics)
const missions = {
    ogv: [
        { id: 1, title: "GV Basics", desc: "Learn GV value props", game: "quiz", questions: ["Why go on GV? A) Fun B) Skills", "B) Skills"] },
        { id: 2, title: "Pitching 101", desc: "Master the pitch", game: "drag-drop", items: ["Problem", "Solution", "Call to Action"] },
        { id: 3, title: "CF Phases", desc: "Understand conversion", game: "quiz", questions: ["First CF phase? A) Lead B) Contact", "A) Lead"] },
        { id: 4, title: "Lead Contact", desc: "Contact leads fast", game: "text", task: "Write a 10-word follow-up message" },
        { id: 5, title: "EP Prep", desc: "Grade a CV", game: "match", pairs: ["Skills: High", "Experience: Low"] },
        { id: 6, title: "Permissions", desc: "Get parental NOCs", game: "quiz", questions: ["Why NOCs? A) Safety B) Fun", "A) Safety"] },
        { id: 7, title: "EP Engagement", desc: "Keep EPs active", game: "text", task: "Write a 15-word engagement idea" },
        { id: 8, title: "Crisis Management", desc: "Handle firefighting", game: "quiz", questions: ["First step? A) Panic B) Assess", "B) Assess"] }
        // Add 1 more for 9 total
    ],
    igv: [
        { id: 18, title: "GV Value", desc: "Understand GV appeal", game: "text", task: "Write a 20-word GV pitch" },
        { id: 19, title: "IR Upscale", desc: "Drive IR locally", game: "quiz", questions: ["IR key? A) Timelines B) Chaos", "A) Timelines"] },
        { id: 23, title: "SOPs", desc: "Prevent back-outs", game: "text", task: "List 3 SOP steps" },
        { id: 24, title: "Standards Delivery", desc: "Deliver exchange standards", game: "match", pairs: ["EP: Happy", "Partner: Clear"] }
        // Add 3 more for 7 total
    ],
    tm: [
        { id: 8, title: "Standards Now", desc: "Compare delivery", game: "match", pairs: ["Now: Fast", "Pre-RE: Slow"] },
        { id: 20, title: "Client Sales", desc: "Raise clients", game: "text", task: "Write a 10-word sales pitch" },
        { id: 28, title: "GT History", desc: "Know GT value", game: "quiz", questions: ["GT focus? A) Youth B) Profit", "A) Youth"] }
        // Add 2 more for 5 total
    ],
    bd: [
        { id: 21, title: "Market Research", desc: "Learn research basics", game: "quiz", questions: ["Best method? A) Survey B) Guess", "A) Survey"] },
        { id: 22, title: "SOP Growth", desc: "Implement SOPs", game: "text", task: "List 2 growth SOPs" },
        { id: 45, title: "Networking", desc: "Build externals", game: "text", task: "Write a 15-word networking intro" }
        // Add 4 more for 7 total
    ],
    marcomm: [
        { id: 38, title: "Branding", desc: "Align to AIESEC", game: "text", task: "Write a 15-word brand tagline" },
        { id: 39, title: "Visual Content", desc: "Design basics", game: "quiz", questions: ["Best tool? A) Canva B) Paint", "A) Canva"] },
        { id: 42, title: "Showcase", desc: "Share experiences", game: "drag-drop", items: ["Story", "Photo", "Share"] }
        // Add 5 more for 8 total
    ]
};

// Google Sheets Web App URL (Replace with your URL from Step 1)
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyT02Hkof1Y_xByNyuD90mgAC_NGjVuShLUxL_OWdJE6AQxYD8P-4-i6o7UpYSOUion/exec";

// Modal Logic
const modal = document.getElementById("mission-modal");
const closeBtn = document.querySelector(".close");
const missionTitle = document.getElementById("mission-title");
const missionDesc = document.getElementById("mission-desc");
const missionGame = document.getElementById("mission-game");
const completeBtn = document.getElementById("complete-mission");
const missionResult = document.getElementById("mission-result");

let currentDept, currentIndex;

document.querySelectorAll(".dept-card").forEach(card => {
    card.addEventListener("click", () => {
        currentDept = card.getAttribute("data-dept");
        currentIndex = agent.progress[currentDept];
        if (currentIndex < missions[currentDept].length) {
            showMission(currentDept, currentIndex);
        } else {
            alert("All missions in this department completed, Agent!");
        }
    });
});

function showMission(dept, index) {
    const mission = missions[dept][index];
    missionTitle.textContent = mission.title;
    missionDesc.textContent = mission.desc;
    missionResult.textContent = "";
    
    missionGame.innerHTML = "";
    if (mission.game === "quiz") {
        missionGame.innerHTML = `<p>${mission.questions[0]}</p><input type="text" id="quiz-answer"><button onclick="checkQuiz('${mission.questions[1]}')">Submit</button>`;
    } else if (mission.game === "drag-drop") {
        missionGame.innerHTML = `<div class="drag-area">${mission.items.map(item => `<div draggable="true">${item}</div>`).join("")}</div>`;
    } else if (mission.game === "text") {
        missionGame.innerHTML = `<textarea id="text-answer" placeholder="${mission.task}"></textarea>`;
    } else if (mission.game === "match") {
        missionGame.innerHTML = `<div class="match-area">${mission.pairs.map(pair => `<span>${pair}</span>`).join("")}</div>`;
    }
    
    modal.style.display = "block";
}

closeBtn.addEventListener("click", () => modal.style.display = "none");

function checkQuiz(correct) {
    const answer = document.getElementById("quiz-answer").value.trim().toLowerCase();
    if (answer === correct.toLowerCase()) {
        missionResult.textContent = "Correct! Ready to complete mission.";
    } else {
        missionResult.textContent = "Wrong—try again, Agent!";
    }
}

completeBtn.addEventListener("click", () => {
    const mission = missions[currentDept][currentIndex];
    let completed = false;

    if (mission.game === "quiz") {
        const answer = document.getElementById("quiz-answer").value.trim().toLowerCase();
        completed = answer === mission.questions[1].toLowerCase();
    } else if (mission.game === "text") {
        const text = document.getElementById("text-answer").value.trim();
        completed = text.length > 0;
    } else {
        completed = true; // Drag-drop and match simplified for demo
    }

    if (completed) {
        agent.progress[currentDept]++;
        updateProgress();
        saveToGoogleSheets(mission);
        missionResult.textContent = "Mission Success, Agent!";
        setTimeout(() => modal.style.display = "none", 1000);
    } else {
        missionResult.textContent = "Mission Failed—Try Again!";
    }
});

function saveToGoogleSheets(mission) {
    const data = {
        agentName: agent.name,
        department: currentDept,
        missionTitle: mission.title,
        score: 10
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
        updateProgress();
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

const leaderboard = ["Agent Spark: 80%", "Agent Vizag: 65%", "Agent Neon: 50%"];
document.getElementById("leaderboard-list").innerHTML = leaderboard.map(item => `<li>${item}</li>`).join("");