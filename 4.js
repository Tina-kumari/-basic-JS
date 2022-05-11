// var dic1={1:10, 2:20};          
// var dic2={3:30,2:40};
// var dic3={5:50,6:60};
// for (i in dic1){
//     for(j in dic2){
//         if (i==j){
//             dic3[i]=dic1[i]+dic2[j]
//             break
//         }
//         else{
//             dic3[i]=dic1[i]
//             dic3[i]=dic2[j]
//         }
//     }
// }
// console.log(dic3)

// a={1:100,2:200,3:300,4:400}
// sum=0
// for(i=1; i=a.length; i++){
//     sum=sum+a[i]
// }
// console.log(a)


// var readline = require('readline-sync');
// let n =readline.question('Enter the property name:');
// let dict={"name":"Raju", "marks":56}
// for (i in dict){
// if (i==n){
//   console.log("exists");
//   break
// }else{
//   console.log("not exist");
//   break
// }
// }




// var dic={
//     'date1':156,'date2':20,'date9':340,
// }
// var sum=0
// for(i in dic){
//     sum=sum+dic[i]
// }
// console.log(sum)

// var myDict= {
//     1: 'NAVGURUKUL',
//     2: 'IN',
//     3:{  
//          'A' : 'WELCOME',
//          'B' : 'To',
//          'C' : 'DHARAMSALA'
//         }
//     }
//  for (i in myDict){
//     if ((typeof myDict[i]) === ""){
//         delete myDict[i]['F']
//     }
//  }
//  console.log(myDict);

// list=['one','two','three','four']
// list1=[1,34,56,78]
// dic={}
// for(i in list1){
//     dic[list[i]]=[list1[i]]
// }
// console.log(dic)


// a={1:23,2:56,3:89,4:78}
// sum=0
// for(i in a){
//     sum=sum+a[i]
// }
// console.log(sum)


// a=['tina','kumar','luli','poonam']
// b=[34,465,43,78]
// dic={}
// for (i in b){
//     dic[a[i]]=[b[i]]
// }
// console.log(dic)


// const list = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
// let a = [];
// for (i of list) {
//   for (j in i) {
//       if (!a.includes(i[j])) { 
//         a.push(i[j]);
//       }
//   }
// }
// console.log(a);

// let a=[1,2,4,5,3,58,89]
// var (for i of a){
//     // console.log(i)
// }
// console.log(i)


// var prompt=require("readline-sync")
// var n=prompt.question("how many marks")
// d={}
// for(i=0; i<=n;i++){
//     d[i]=i**2
// }
// console.log(d)

// var a={"tina":400,"kumar":100,"poonam":200}
// sum=0
// for(i in a){
//     sum=sum+a[i]
// }
// console.log(sum)



// var a={"tina":10,"kumar":58,3:{n:"welcome","aachuki":90}}
// for (i in a){
//     if ((typeof a)=== "object"){
//         detele a[i]["A"]
//     }
// }
// console.log(a)


// const list = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
// let uniques_list = [];
// for (i of list) {
//   for (j in i) {
//       if (!uniques_list.includes(i[j])) { 
//         uniques_list.push(i[j]);
//       }
//   }
// }
// console.log(uniques_list);


