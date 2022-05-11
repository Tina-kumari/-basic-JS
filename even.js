var x=require("readline-sync")
var num = x.questionInt("Enter a number: ")
if (num %2!=0){
    console.log("This is an odd number.")
}
else{
    console.log("This is an even number.")
}