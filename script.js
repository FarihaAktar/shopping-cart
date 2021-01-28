// iphone11  button handler
const plusButton = document.getElementById("plus-btn");
plusButton.addEventListener('click', function(){
    getInputNumber("phone-quantity", 1);
    updateSpanText("phone-budget", 1219);
})
const minusButton = document.getElementById("minus-btn");
minusButton.addEventListener('click', function(){
    getInputNumber("phone-quantity", 1 * -1);
    updateSpanText("phone-budget", -1 * 1219);

})
// iphone11 phone case button handler
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
// check out button handler
const checkOutBtn = document.getElementById("check-out-btn");
checkOutBtn.addEventListener('click', function(){
    const phoneBudget = parseFloat(document.getElementById("phone-budget").innerHTML);
    const phoneCaseBudget = parseFloat(document.getElementById("phoneCase-budget").innerHTML);
    const subTotal = phoneBudget + phoneCaseBudget;
    document.getElementById("sub-total").innerHTML = subTotal;
    document.getElementById("total").innerHTML = subTotal;
    
})

// definition of functions
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

