// The first parameter should be the weight and the second should be the height.
function bmiCalculator (weight, height) {
    var newHeight = height* height;
    var bmi = Math.round(weight/newHeight);
    var interpretation = "";
    if(bmi<18.5){
        interpretation = "Your BMI is " + bmi + ", so you are underweight."; //results for < 18.5
    }else if (bmi>=18.5 && bmi <= 24.9){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight."; //results for 18.5 < bmi < 24.9
    }else if(bmi>24.9){
        interpretation = "Your BMI is " + bmi + ", so you are overweight."; //results for bmi > 24.9
    } 
    return interpretation;
}



var bmi = bmiCalculator(100, 2); 
console.log(bmi);