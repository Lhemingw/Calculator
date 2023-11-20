// This function clears all the values.  Clears value with empty string.
function clearScreen(){
    console.log("working...");
    document.getElementById("result").value = " ";
}
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
// function display2(value) {
//     document.getElementById("result").value %= value;
// }
// This function evaluates the expression and returns the result
function calculate() {
    console.log("percentage");
    console.log("calculate");
    // var input = document.getElementById("result").value;
     // Check if the input contains a percentage sign
    // if (input.includes('%')) {
        // If the input contains a percentage sign, calculate the percentage
        // var parts = input.split('%');
        // Ensure there are two parts and they are valid numbers
        // if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
        //     var percentage = parseFloat(parts[0]);
        //     var number = parseFloat(parts[1]);

            // Calculate the percentage and update the result
            // var result = (percentage / 100) * number;
            // document.getElementById("result").value = result;
        // } else {
            // Invalid input if it doesn't match the expected format
    //         document.getElementById("result").value = "Error";
    //     }
    // } else {
        // If there is no percentage sign, evaluate the expression
    //     var result = eval(input);
    //     document.getElementById("result").value = result;
    // }

    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}