let timerEl = document.getElementById("timer");
let counter = 0;

function setTimer() {
    timerEl.textContent = counter + " Seconds";
    timerEl.classList.add("seconds");
    counter += 1;
}
let uniqueId = setInterval(setTimer, 1000);

let quoteDisplayEl = document.getElementById("quoteDisplay");
let userText = document.getElementById("quoteInput");
let spinnerEl = document.getElementById("spinner");

function quoteGet() {
    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            let text = jsonData.content;
            quoteDisplayEl.textContent = text;
        });
}
quoteGet();

let resultEl = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");



let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function() {
    quoteGet();
    let counter = 0;

    function setTimer() {
        timerEl.textContent = counter + " Seconds";
        timerEl.classList.add("seconds");
        counter += 1;
    }
    let uniqueId = setInterval(setTimer, 1000);
    resultEl.textContent = "";
});

submitBtn.addEventListener("click", function() {
    let userTyping = userText.value;
    if (userTyping === quoteDisplayEl) {
        resultEl.textContent = "Your typed in " + timerEl + "seconds";
    } else {
        resultEl.textContent = "Your typed wrong sentence";
    }
    clearInterval(uniqueId);
    clearInterval(uniqueId);
});
