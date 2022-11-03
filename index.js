let homeScore = 0;
let awayScore = 0;

let homeScoreText = document.getElementById("home-score");
let awayScoreText = document.getElementById("away-score");

function homePlus1() {
    homeScore += 1;
    homeScoreText.textContent = homeScore;
}

function homePlus2() {
    homeScore += 2;
    homeScoreText.textContent = homeScore;
}

function homePlus3() {
    homeScore += 3;
    homeScoreText.textContent = homeScore;
}

function awayPlus1() {
    awayScore += 1;
    awayScoreText.textContent = awayScore;
}

function awayPlus2() {
    awayScore += 2;
    awayScoreText.textContent = awayScore;
}

function awayPlus3() {
    awayScore += 3;
    awayScoreText.textContent = awayScore;
}

function reset() {
    homeScore = 0;
    awayScore = 0;
    homeScoreText.textContent = 0;
    awayScoreText.textContent = 0;
}
