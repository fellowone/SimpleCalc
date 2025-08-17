function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = "";

    if (isNaN(num1)) {
        document.getElementById("result").innerText = "Please enter at least the first number!";
        return;
    }

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                result = "Error: Division by zero!";
            } else {
                result = num1 / num2;
            }
            break;
        case "square":
            result = num1 ** 2;
            break;
        case "cube":
            result = num1 ** 3;
            break;
        default:
            result = "Invalid Operation!";
    }

    document.getElementById("result").innerText = "Result: " + result;
}
