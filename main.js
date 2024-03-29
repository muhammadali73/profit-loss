let message;

function pl() {
    const cp = parseFloat(prompt("What is the cost price of your product"));
    const sp = parseFloat(prompt("What is the selling price of your product"));

    if (isNaN(cp) || isNaN(sp)) {
        alert('Please enter all fields');
    }

    const result = sp - cp;

    if(result < 0) {
        message = "Your loss is Rs. " + Math.abs(result).toFixed(2);
    } else if(result > 0) {
        message = "Your profit is Rs. " + result.toFixed(2);
    } else {
        message = "You have neither profit nor loss in this product";
    }

    document.getElementById("pl").innerText = message;
}
