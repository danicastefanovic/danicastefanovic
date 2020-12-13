const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#sacuvajRezultatBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const continue_btn = info_box.querySelector(".buttons .restart");

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
}

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')


}