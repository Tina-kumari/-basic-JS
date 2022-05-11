// const a=[7,6,4,5,3,3]
// const b=a.filter(num=>num>3)
// console.log(a)
// function solve(min_diff,m,n){
// 	for( i = 0; i < n-m; i++){
// 		// difference between maximum and minimum
// 		diff = input[i+m-1] - input[i];
// 		min_diff = min(min_diff, diff);
// 	}
// 	return min_diff;
// }
// solve(min_diff,m,n)


def solve(st):
 
   for i in st:
 
       if (st.find(i,(st.find(i)+1))) == -1:
           print(i)
           break
   return
st= 'geeksforgeeks'
 
solve(st)