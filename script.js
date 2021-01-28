// iphone11 "+" button handler
const plusButton = document.getElementById("plus-btn");
plusButton.addEventListener('click', function(){
    // const numberOfPhone = document.getElementById("phone-quantity").value;
    // const parseNumber = parseFloat(numberOfPhone);
    // const totalNumberOfPhone = parseNumber + 1;
    // document.getElementById("phone-quantity").value = totalNumberOfPhone;
    getInputNumber("phone-quantity", 1);
    updateSpanText("phone-budget", 1219);

    // const phoneBudget = document.getElementById("phone-budget").innerHTML;
    // const phoneBudgetNumber = parseFloat(phoneBudget);
    // const totalPhoneBudget = phoneBudgetNumber + 1219;
    // document.getElementById("phone-budget").innerHTML = totalPhoneBudget;
})
const minusButton = document.getElementById("minus-btn");
minusButton.addEventListener('click', function(){
    getInputNumber("phone-quantity", 1 * -1);
    updateSpanText("phone-budget", -1 * 1219);

})
const phoneCasePlusBtn = document.getElementById("plus-btn-ofPhoneCase");
phoneCasePlusBtn.addEventListener('click', function(){
    getInputNumber("phoneCase-quantity", 1);
    updateSpanText("phoneCase-budget", 59);
})
const phoneCaseMinusBtn = document.getElementById("minus-btn-ofPhoneCase");
phoneCaseMinusBtn.addEventListener('click', function(){
    getInputNumber("phoneCase-quantity", -1 * 1);
    updateSpanText("phoneCase-budget", -1 * 59);
})

// definition of function
function getInputNumber(id, num){
    const amount = document.getElementById(id).value;
    const parseNumber = parseFloat(amount);
    const totalAmount = parseNumber + num;
    document.getElementById(id).value = totalAmount;
    return totalAmount;
}

function updateSpanText(id, num){
    const budget = document.getElementById(id).innerHTML;
    const budgetNumber = parseFloat(budget);
    const totalBudget = budgetNumber + num;
    document.getElementById(id).innerHTML = totalBudget;
}

