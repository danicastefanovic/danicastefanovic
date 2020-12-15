function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;

    sessionStorage.setItem("name", name);

    location.href = "kviz.html";
}
const welcome_form_btn = document.querySelector("welcome_form button");
const info_box = document.querySelector(".info_box");
const continue_btn = info_box.querySelector(".buttons .restart");
// if startQuiz button clicked
welcome_form_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
}


// if continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}