var a=require("readline-sync")
var num=a.question("enter the number")

if (num%1==0 && num%2!=0 ){
    console.log(num,"it is a prime number")
}
else{
    console.log(num,"it is not prime number")
}