
age=65

a=(age<=18)? "elidge":"notedige"
console.log(a)

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

