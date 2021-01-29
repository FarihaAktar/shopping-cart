// iphone11  button handler
const plusButton = document.getElementById("plus-btn");
plusButton.addEventListener('click', function () {
    handleProductChange("phone", true);

})

const minusButton = document.getElementById("minus-btn");
minusButton.addEventListener('click', function () {
    handleProductChange("phone", false);


})
// iphone11 phone case button handler
const phoneCasePlusBtn = document.getElementById("plus-btn-ofPhoneCase");
phoneCasePlusBtn.addEventListener('click', function () {
    handleProductChange("phoneCase", true);

})

const phoneCaseMinusBtn = document.getElementById("minus-btn-ofPhoneCase");
phoneCaseMinusBtn.addEventListener('click', function () {
    handleProductChange("phoneCase", false);

})
// definition of functions

function handleProductChange(product, isIncrease) {
    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + "-quantity").value = productNewCount;
    let productBudget = 0;
    if (product == 'phone') {
        productBudget = productNewCount * 1219;

    }
    if (product == 'phoneCase') {
        productBudget = productNewCount * 59;

    }
    document.getElementById(product + "-budget").innerHTML = productBudget;
    calculateTotal();
}


function calculateTotal() {
    const phoneCount = getInputValue("phone");
    const phoneCaseCount = getInputValue("phoneCase");
    const subTotalPrice = phoneCount * 1219 + phoneCaseCount * 59;


    document.getElementById("sub-total").innerHTML = subTotalPrice;
    const tax = Math.round(subTotalPrice * 0.1);
    document.getElementById("tax-amount").innerHTML = tax;
    const totalPrice = subTotalPrice + tax;

    document.getElementById("total").innerHTML = totalPrice;

}


function getInputValue(product) {
    const productInput = document.getElementById(product + '-quantity');
    const productCount = parseInt(productInput.value);
    return productCount;
}
