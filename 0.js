// a=[3,4,5,7,9]
// b=[]
// for(var i=a.length-1; i>=0; i--){
//     b.push(a[i])
// }
// console.log(b)


let arr = [1, 4, 7, 45, 7,43, 44, 25, 6, 4, 6, 9],
    sorted = false;

while(!sorted) {
  sorted = true;
  for(var i=0; i < arr.length; i++) {
    if(arr[i] < arr[i-1]) {
      let temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
      sorted = false;
    }
  }
}
console.log(arr)