const arr = ['a', 'b', 'a', 'a', 'c', 'c'];

const count = [];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
  if (count[element]) {
    count[element] += 1;
  } 
  else {
    count[element] = 1;
  }
}
console.log(count); 


function age(x){
    return new promise(resolve=>{
        setTimeout(()=>{
            resolve(x)
        },1000)
    })
}
async function b(){
    x=await age(689)
      console.log(x)

}
b();
var x=1
var y=-9
console.log(y)