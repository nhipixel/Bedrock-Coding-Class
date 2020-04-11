//BMI program

let height = Number (prompt("Please enter your height (cm)")) * Number(0.01);
let mass = Number (prompt("Please enter your weight (kg)"));

BMI = mass/(height*height);

console.log("Your BMI is " + BMI);

if (BMI<16) {
    alert("You are severely underweight.");
} else if (16<=BMI<=18.5) {
    alert("You are underweight.");
} else if (18.5<BMI<25) {
    alert("You are normal.");
} else if (25<=BMI<=30) {
    alert("You are overweight.");
} else if (BMI>30) {
    alert("You are obese.");
} else {
    alert("error");
}