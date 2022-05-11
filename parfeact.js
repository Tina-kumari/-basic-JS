// num=[6,7,3,84,85,45,25,154,508]

const n=require("readline-sync");
var num=n.question("enter number: ")
var i=1
var sum=0
while (i<(num)){
    if (num%i===0){
        sum=sum+i
    i=i+1
    }
}
if (sum===num){
    console.log("this is a perfact number")
}else{
    console.log("this is a not perfact number")
}