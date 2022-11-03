let homeScore = 0;
let awayScore = 0;

let homeScoreText = document.getElementById("home-score");
let awayScoreText = document.getElementById("away-score");
let homeSection = document.getElementById("home-score-section");
let awaySection = document.getElementById("away-score-section");

function homePlus1() {
    homeScore += 1;
    homeScoreText.textContent = homeScore;
    highlightWinningTeam();
}

function homePlus2() {
    homeScore += 2;
    homeScoreText.textContent = homeScore;
    highlightWinningTeam();
}

function homePlus3() {
    homeScore += 3;
    homeScoreText.textContent = homeScore;
    highlightWinningTeam();
}

function awayPlus1() {
    awayScore += 1;
    awayScoreText.textContent = awayScore;
    highlightWinningTeam();
}

function awayPlus2() {
    awayScore += 2;
    awayScoreText.textContent = awayScore;
    highlightWinningTeam();
}

function awayPlus3() {
    awayScore += 3;
    awayScoreText.textContent = awayScore;
    highlightWinningTeam();
}

function reset() {
    homeScore = 0;
    awayScore = 0;
    homeScoreText.textContent = 0;
    awayScoreText.textContent = 0;
    homeScoreText.className = "score";
    awayScoreText.className = "score";
}

function highlightWinningTeam() {
    if (homeScore > awayScore) {
        homeScoreText.className = "score highlight";
        awayScoreText.className = "score";
    } else if (awayScore > homeScore) {
        awayScoreText.className = "score highlight";
        homeScoreText.className = "score";
    } else {
        homeScoreText.className = "score";
        awayScoreText.className = "score";
    }
}
