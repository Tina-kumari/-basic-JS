
var num=require("readline-sync")
var n = num. questionInt("Enter any number:")
if (n>0 && n<10){
    console.log("One digit number")
}
else if (n>10 && n<100){
    console.log("Two digit number")
}
else if (n>100 && n<1000){
    console.log("Three digit number")
}
else{
    console.log("invalid number")
}





       
 