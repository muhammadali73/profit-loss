let message;

function pl() {
    const cp = parseFloat(prompt("What is the cost price of your product"));
    const sp = parseFloat(prompt("What is the selling price of your product"));

    if (isNaN(cp) || isNaN(sp)) {
        alert('Please enter all fields');
    }

    const result = sp - cp;

    if(result < 0) {
        message = "You've encountered a loss of Rs. " + Math.abs(result).toFixed(2);
    } else if(result > 0) {
        message = "You've gained a profit is Rs. " + result.toFixed(2);
    } else {
        message = "This product has resulted in neither gain nor loss.";
    }

    document.getElementById("pl").innerText = message;
}
