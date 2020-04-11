let a = Number(prompt("Enter a number"));
fact = 1;
for (let i=a; i>0; i--) {
    fact = fact *i;
}
console.log("Factorial is " + fact);
