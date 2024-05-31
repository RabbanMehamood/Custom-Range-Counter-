let userFromInputEl = document.getElementById("fromUserInput");
let userToInputEl = document.getElementById("toUserInput");
let startBtnEl = document.getElementById("startBtn");
let counterTextEl = document.getElementById("counterText");

startBtnEl.onclick = function() {
    let userFromInputValue = userFromInputEl.value;
    let userToInputElValue = userToInputEl.value;



    if (userFromInputValue === "" || userToInputElValue === "") {
        alert("Enter the from value");
    }
    let startcounter = parseInt(userFromInputValue);


    let endCounter = parseInt(userToInputElValue);
    let sessionId = setInterval(function() {
        if (startcounter <= endCounter) {
            counterTextEl.textContent = startcounter;
            startcounter += 1;
        } else {
            clearInterval(sessionId);
        }
    }, 1000);
};
