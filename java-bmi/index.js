//BMI program chua bai

var height = Number(prompt("Please enter your height (cm)"));
var mass = Number(prompt("Please enter your weight (kg)"));

height = height/100;

var BMI = mass/(height*height);

console.log("Your BMI is " + BMI);

if (BMI<16) {
    alert("You are severely underweight.");
} else if (16<= BMI && BMI <=18.5) {
    alert("You are underweight.");
} else if (18.5<BMI && BMI <25) {
    alert("You are normal.");
} else if (25<=BMI && BMI <=30) {
    alert("You are overweight.");
} else if (BMI>30) {
    alert("You are obese.");
} else {
    alert("error");
}
