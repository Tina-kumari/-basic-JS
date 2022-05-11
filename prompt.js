
var number=require("readline-sync")
var age = number.question("Enter your age","18");
if (age < 18) {
            console.log("You cannot enter the club");
        } 
else {
            console.log("You can enter the club");
        }
