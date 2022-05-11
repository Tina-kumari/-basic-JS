var a=require("readline-sync")
var username=a.question("enter the username:")   
if (username==="ckingi"  || "tina" || "mcook" ) {
    console.log("valied username")
} 
else{
    console.log("invalied username,please try again")
} 

var b= require("readline-sync") 
var password= b.question("enter the password:")
if (password==="roshni"  || "uper" || "rupa" ){
    console.log("valied username")  
} 
else{
    console.log("invalied username,access denied") 
}