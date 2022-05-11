
var number=require("readline-sync")
var num1 = number.question("Enter a first num")
var num2 = number.question("Enter a second num")
if( num1 > num2){
    diff = num1 - num2
}
else
     diff = num2 - num1
console.log("The difference of",num1,"and",num2, "is",diff)