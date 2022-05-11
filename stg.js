console.log("program for strong pasward")
console.log("creat new password")
var n=require("readline-sync")
var chr=n.question("enter the uper case letter")
if (chr>="A" && chr<="Z"){
    var chr2=n.question("enter the lower case letter")
}
    if (chr2>="a" && chr<="z"){
        var num=n.question("enter the number")
    }
        if (num>="1" && num<="9" ){
            var sc=n.question("enter the special chracter")
        }    
            if (sc=="@" || "#" || "&"||"-"){
                console.log(chr+chr2+num+sc)
            }    
            else{
                console.log("invailid specialcharacter")
            }   
   


