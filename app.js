var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var message = document.querySelector("#message");
var checkButton = document.querySelector("#checkButton");
var notes = document.querySelectorAll(".note");
var NoteArray = [2000,500,100,20,10,5,1];

function calculateNoOfteNotes(value){
    for(let i=0; i<NoteArray.length; i++)
    {
        var NoOfNote = Math.trunc(value/NoteArray[i]);
        notes[i].innerText = NoOfNote;
        value = value % NoteArray[i];
    }
}

function validateBillAmount(bill,GivenAmount) {
    message.style.display = "none";
    if (bill <= 0) {
        message.style.display = "block";
        message.innerText = "Bill Amount must be greater than 0";
    } else {
        if (parseInt(GivenAmount) < parseInt(bill)) {
            message.style.display = "block";
            message.innerText = "cash given must be greater than bill amount";
        } else {
            var ReturnAmount = GivenAmount-bill;
            calculateNoOfteNotes(ReturnAmount);
        }
    }
}

checkButton.addEventListener('click', () => {
    validateBillAmount(billAmount.value,cashGiven.value);
});