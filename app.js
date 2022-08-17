const checkButton = document.querySelector('#checkButton');
const inputCashGiven = document.querySelector('#cash-given');
const inputBill = document.querySelector("#bill-amount");
const message = document.querySelector('#message');
const container = document.querySelector('.container');
const noOfNotes = [2000, 500, 100, 20, 10, 5, 1];
const nextButton = document.querySelector('#next');
var notes = document.querySelectorAll(".note");
var cashGiven = 0;
var billAmount = 0;
function setMessage(msg) {
    message.innerText = msg;
}
function hideMessage() {
    message.innerText = "";
}
function returnAmount(amountToReturn) {
    var amount = amountToReturn;
    for (let i = 0; i < noOfNotes.length; i++) {
        var NoOfNote = Math.trunc(amount / noOfNotes[i]);
        notes[i].innerText = NoOfNote;
        amount = amount % noOfNotes[i];
        if (amount == 0) { //decrese no of iteration
            break;
        }
    }
}
function checkBillValidation() {
    hideMessage();
    if (billAmount < 0 || !billAmount && billAmount !== 0) {
        setMessage("Invalid bill amount");
    } else if (billAmount == 0) {
        setMessage("No Need for calculation.");
    } else {
        container.style.display = "block";
    }
}
function checkCashValidation() {
    cashGiven = Number(inputCashGiven.value);
    hideMessage();
    if (cashGiven == 0) {
        setMessage('do you wanna wash plates?');
        return false;
    } else if (billAmount > cashGiven) {
        setMessage("cash given should be greater than bill amount");
        return false;
    } else {
        return true;
    }
}
nextButton.addEventListener('click', () => {
    billAmount = Number(inputBill.value);
    checkBillValidation();
})
checkButton.addEventListener('click', () => {
    if (checkCashValidation()) {
        var amountToReturn = cashGiven - billAmount;
        returnAmount(amountToReturn);
    }
})
