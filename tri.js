var pop=require("readline-sync")
var  a=pop.questionInt("Enter no1:") 
var  b=pop.questionInt("Enter no2:") 
var  c=pop.questionInt("Enter no3:")
if(a==b && b==c ){
    console.log("Equilateral triangle")
}
else if( a==b || a==c || b==c){
    console.log("isosceles triangle")
}   
else {
    console.log("Scalene triangle")
}
