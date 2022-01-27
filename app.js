var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var message = document.querySelector("#message");
var checkButton = document.querySelector("#checkButton");

function validateBillAmount() {
    message.style.display = "none";
    if (billAmount.value <= 0) {
        message.style.display = "block";
        message.innerText = "Bill Amount must be greater than 0";
    } else {
        if (cashGiven.value < billAmount.value) {
            message.style.display = "block";
            message.innerText = "cash given must be greater than bill amount";
        } else {
            console.log("Hello");
        }
    }
}

checkButton.addEventListener('click', () => {
    validateBillAmount();
});