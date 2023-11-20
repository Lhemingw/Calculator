// THESE ARE VIDEO NOTES class Calculate {
//     constructor() {
//         this.total = 0;
//         console.log("initial total: ", this.total);
//     }
//     //add numbers
//     addNumbers(a, b) {
//         return (this.total = a + b);
//     }

//     //subtract
//     subtractNumbers(a, b) {
//         return this.total = a - b;
//     }

//     //multiply
//     multiplyNumbers(a, b) {
//         return this.total = a * b;
//     }

//     //divide
//     divideNumbers(a, b) {
//         return this.total = a / b;
//     }
// }

// class App {
//     constructor() {
//         this.calc = new Calculate();

//         //store the first number
//         this.firstPrompt = prompt('Please enter your first number');
//         this.firstNumber = parseInt(this.firstPrompt);
//         console.log(typeof this.firstNumber, this.firstNumber);
//         while(isNaN(this.firstNumber)) {
//             this.firstPrompt = prompt('Please enter your first number');
//             this.firstNumber = parseInt(this.firstPrompt);
//         }

//         //store the operator (+, -, *, /)
//         this.validOperators = ["+", "-", "*", "/"];

//         this.operator = prompt('Please enter an operator (+, -, *, /)');
//         console.log(this.operator);

//         //while loop to check if the operator is valid
//         while (!this.validOperators.includes(this.operator)) {
//             this.operator = prompt('Please enter a VALID operator (+, -, *, /)');
//         } 

//         //store the second number
//         this.secondPrompt = prompt('Please enter your second number');
//         this.secondNumber = parseInt(this.secondPrompt);
//         console.log(typeof this.secondNumber, this.secondNumber);
//         while(isNaN(this.secondNumber)) {
//             this.secondPrompt = prompt('Please enter your second number');
//             this.secondNumber = parseInt(this.secondPrompt);
//         }
        

//     }
//     //call the calculations above
//     callCalculations() {
        
//         //switch statement
//         switch(this.operator) {
//             case "+":
//                 this.calc.addNumbers(this.firstNumber, this.secondNumber);

//                 break;
//             case "-":
//                 this.calc.subtractNumbers(this.firstNumber, this.secondNumber);
//                 break;
//             case "*":
//                 this.calc.multiplyNumbers(this.firstNumber, this.secondNumber);
//                 break;
//             case "/":
//                 this.calc.divideNumbers(this.firstNumber, this.secondNumber);
//                 break;
//             default:
//                 alert("Invalid number or operator");
//                 break;
//         }
//         this.equation = `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.calc.total}`
      

//         alert(this.equation);
//         console.log(this.equation)

//     }
//     //display the results of the calculation
//     displayResult() {
//         this.equation = `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.calc.total}`
      

//         alert(this.equation);
//         console.log(this.equation)
//     }
// }

// let startApp = new App();
// startApp.callCalculations();
// //startApp.displayResult();
//THIS IS MINE

class Calculate {
  constructor() {
    this.total = 0;
    console.log("initial total:", this.total);
  }
  //add
  addNumbers(a, b) {
    return (this.total = a + b);
  }
  //subtract
  subtractNumbers(a, b) {
    return this.total = a - b;
  }
  //multiply
  multiplyNumbers(a, b) {
    return this.total = a * b;
  }
  //divide
  divideNumbers(a, b) {
    return this.total = a / b;
  }
}
// let firstCalculation =new Calculate()
// console.log(firstCalculation.divideNumbers(10, 20)); checkin if it works

class App {
  constructor() {
    this.calc = new Calculate();
    //prompts (3) literly a prompt window
    // store 1st num
    this.firstPrompt = prompt("Please enter your first number");
    this.firstNumber = parseInt("this.firstPrompt");
    console.log(typeof this.firstNumber, this.firstNumber);
    while(isNaN(this.firstNumber)) {
        this.firstPrompt = prompt('Please enter your first number');
        this.firstNumber = parseInt(this.firstPrompt);
    }
    //store operation(+ - * /)
    this.validOperators =["+", "-", "*", "/"];
    this.operator = prompt("please enter an Operator(+, -, *, /) ");
    console.log(this.operator);
    //while loop to check if the operator is valid
    while (!this.validOperators.includes(this.operator)) {
        this.operator = prompt('Please enter a VALID operator (+, -, *, /)');
    } 
    //store 2nd num
    this.secondPrompt = prompt("Please enter you second number");
    this.secondNumber = parseInt(this.secondPrompt);
    console.log(typeof this.secondNumber, this.secondNumber);
    while(isNaN(this.secondNumber)) {
        this.secondPrompt = prompt('Please enter your second number');
        this.secondNumber = parseInt(this.secondPrompt);
    }
  }    
    //arnt you suppose to declare a variable and then do a prompt and then
    //I think in () you write that?  Yes. We need a variable because that is the whatever the value that the user
    // passes in is going to get sorted into the variable.
    //prompts will pass in what ever so even if you pass in a number it will pass in a string
    
 
  //call calculation above
  callCalculations() {
    //switch statement
    switch (this.operator) {
      case "+":
        this.calc.addNumbers(this.firstNumber, this.secondNumber);
        break;
      case "-":
        this.calc.subtractNumbers(this.firstNumber, this.secondNumber);
        break;
      case "*":
        this.calc.multiplyNumbers(this.firstNumber, this.secondNumber);
        break;
      case "/":
        this.calc.divideNumbers(this.firstNumber, this.secondNumber);
        break;
        default:
        alert("Invalid number or operator");
        break;
    }
    this.equation = `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.calc.total}`
      
        alert(this.equation);
    console.log(this.equation);
    }
  
//   //display the results of the calculation
  
    

  displayResult() {
    this.equation = `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.calc.total}`
      
     alert(this.equation);
console.log(this.equation)
}
}
 
    
let startApp = new App();
startApp.callCalculations();
  
// startApp.displayResult();
