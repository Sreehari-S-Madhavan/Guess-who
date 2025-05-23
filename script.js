let players = [];
let currentIndex = 0;
let spyIndex = -1;
let secretWord = "";
let votes = {};

function startGame() {
  const num = parseInt(document.getElementById("numPlayers").value);
  secretWord = document.getElementById("secretWord").value.trim();
  if (!secretWord || num < 3 || num > 6) return alert("Enter a valid word and 3-6 players");

  players = new Array(num).fill("Civilian");
  spyIndex = Math.floor(Math.random() * num);
  players[spyIndex] = "Spy";
  votes = {};
  currentIndex = 0;

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("roleReveal").classList.remove("hidden");
  showRole();
}

function showRole() {
  document.getElementById("playerLabel").innerText = `Player ${currentIndex + 1}`;
  document.getElementById("roleText").innerText = players[currentIndex] === "Spy"
    ? "You are the SPY. Try to blend in!"
    : `You are a CIVILIAN. The word is: ${secretWord}`;
}

function nextPlayer() {
  currentIndex++;
  if (currentIndex < players.length) {
    showRole();
  } else {
    document.getElementById("roleReveal").classList.add("hidden");
    document.getElementById("voting").classList.remove("hidden");
    renderVoting();
  }
}

function renderVoting() {
  const voteDiv = document.getElementById("voteButtons");
  voteDiv.innerHTML = "";
  for (let i = 0; i < players.length; i++) {
    const btn = document.createElement("button");
    btn.innerText = `Vote Player ${i + 1}`;
    btn.onclick = () => castVote(i);
    voteDiv.appendChild(btn);
  }
}

function castVote(index) {
  votes[index] = (votes[index] || 0) + 1;
  if (Object.values(votes).reduce((a, b) => a + b, 0) >= players.length) {
    checkResult();
  }
}

function checkResult() {
  const votedSpy = Object.entries(votes).reduce((a, b) => b[1] > a[1] ? b : a)[0];
  const resultText = document.getElementById("resultText");
  resultText.innerText = votedSpy == spyIndex
    ? `Player ${parseInt(votedSpy) + 1} was the SPY! Civilians win!`
    : `Wrong guess! The real SPY was Player ${spyIndex + 1}. Spy wins!`;

  document.getElementById("voting").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
}