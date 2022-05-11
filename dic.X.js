// var prompt = require('readline-sync');
// var n = prompt.questionInt('How many more times? ');
// d={}
// for (i=0; i<=n; i++){
//     d[i]=i**2
// }
// console.log(d)


var readline = require('readline-sync');
var students={}
for (let step = 0; step <10; step++){
   var name =readline.question("Enter your name:");
   var marks=readline.questionInt("Enter the marks");
   students[name]=marks;
}
console.log(students);