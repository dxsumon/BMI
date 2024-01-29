/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// THIS IS THE CODE


// var weight = 64;
// var height = 230;
// var bmi = weight /((height*height)/10000);
// if(bmi < 18.5){
//     console.log("You are underweight");
// }
// else if(bmi >= 18.5 && bmi <=24.9){
//     console.log("You are normal");
// }
// else if (bmi >=25 && bmi <= 29.9){
//     console.log("You are overweight");
// }
// else{
//     console.log("You are obese");
// }


// This is website code
var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var bmi, height, weight;

calculateButton.addEventListener("click", ()=> {
    height = heightInput.value;
    weight = weightInput.value;
    bmi = (weight /((height*height)/10000)).toFixed(2);
    result.innerText = bmi;

    if(bmi <18.5){
        statement.innerText="You are underweight";
    }else if(bmi>=18.5  && bmi <= 24.9){
        statement.innerText="You are normal";
    }
    else if(bmi >= 25 && bmi<=29.9){
        statement.innerText="You are over weight";
    }
    else{
        statement.innerText= "You are obese";
    }
}
);
