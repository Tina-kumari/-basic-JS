num=[3,4,6,8,6,9]
var a=num[0]
for (var i=1; i<num.length; i++){
    if (num[i]<a){
        a=num[i]
    }
}
console.log(a)
