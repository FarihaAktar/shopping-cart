// iphone11 "+" button handler
const plusButton = document.getElementById("plus-btn");
plusButton.addEventListener('click', function(){
    const numberOfPhone = document.getElementById("phone-quantity").value;
    const parseNumber = parseFloat(numberOfPhone);
    const totalNumberOfPhone = parseNumber + 1;
    document.getElementById("phone-quantity").value = totalNumberOfPhone;

    
})