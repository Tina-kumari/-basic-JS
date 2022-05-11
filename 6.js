list1 = [1,23,7,9,4,5,6]
list2 = [20,0,9,1,4,5,6]
elements=[]
for(var i of list1){
   if (!list2.includes(i)){
       elements.push(i)
   }
}
console.log(elements);


// a=[3,56,5,5,3]
// b=[4,3,56,9]
// e=[]
// for(i of a){
//     if(!b.includes(i)){
//        e.push(i)
//     }
// }
// console.log(e)