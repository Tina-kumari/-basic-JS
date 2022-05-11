var Name=['t','i','n','a','n','i','t'];
var new_array=[];
for (var i=Name.length-1; i>=0;i--){
   new_array.push(Name[i]);
}
var count=0;
for (var j=0; j<Name.length; j++){
   if (new_array[j]===Name[j]){
       count++;
   }
}
if(count===Name.length){
   console.log("this is palindrome");
}else{
   console.log("this is not a palindrome");
}
