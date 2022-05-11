// dict1 = {'a': 12, 'for': 25, 'c': 9}

// dict2 = {'Geeks': 100, 'geek': 200, 'for': 300}
// for (key in dict2) {
// if (key in dict1){
//     dict2[key]=dict2[key]+dict1[key]
// else{
//     pass
//   }
// }
// }
// console.log(dict2)

// dict1 = {'a': 12, 'for': 25, 'c': 9}

// dict2 = {'Geeks': 100, 'geek': 200, 'for': 300}
 
// // b=c[dict1]+c[dict1]
// sum=0
// for(i in dict2){
//     sum=sum+dict2[i]
// }
// console.log(sum)

// var prompt = require('readline-sync');
// var n = prompt.questionInt('How many more times? ');
// d = {}
// for (let i = 0; i <= n; i++) {
//    d[i] = i ** 2
// }
// console.log(d);

// const person = {
//     name: 'Jack',
//     age:26
// }

// // object 2
// const student = {
//     gender: 'male'
// }

// // merge two objects
// const newObj = {...person, ...student};

// console.log(newObj);

// hello = () => {
//     return "Hello World!";
//   } 


// dict2 = [{'Geeks': 100, 'geek': 200, 'for': 300}]
// a=[]
// for (i of dict2){
//     for(j in i){
//         if(!a.inculdes(i[j])){
//             a.push(i[j])
//         }
//     }
// }
// console.log(a)

// var readline = require('readline-sync');
// var number =readline.question("Enter your number:");
// var s={}
// for(i=0; i<number; i++){
//     name=readline.question("enter the number")
//     marks=readline.question("enter the marks")
//     s[name]=marks
// }
// console.log(s)

var array1 = [1, 22, 24, 46];
while(array1.length > 0) {
array1.pop(3);
}
console.log(array1)