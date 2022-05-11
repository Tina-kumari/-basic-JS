function solve(num,target){
    for(i=0; i<num.length;i++){
        for (j=0 ; j<num.length;j++){
            if(num[i]+num[j]==target){
                return num{i,j}
            }
        }
        return 
    }
}
test=[2,78,11,17]
target=9
console.log(solve(test,target))