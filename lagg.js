
var n=require("readline-sync")
const num1 = n.question("Enter first number: ");
const num2 = n.question("Enter second number: ");
const num3 = n.question("Enter third number: ");
if(num1 >= num2 && num1 >= num3) {
    console .log(num1)
}
else if (num2 >= num1 && num2 >= num3) {
   
    console .log(num2)
}
else if (num3 >= num1 && num3 >= num2){
    console.log(num3)
}
else {
    console .log("invailid")
}

