# # let arr = [1, 4, 7, 45, 7,43, 44, 25, 6, 4, 6, 9],
# #     sorted = false;

# # while(!sorted) {
# #   sorted = true;
# #   for(var i=0; i < arr.length; i++) {
# #     if(arr[i] < arr[i-1]) {
# #       let temp = arr[i];
# #       arr[i] = arr[i-1];
# #       arr[i-1] = temp;
# #       sorted = false;
# #     }
# #   }
# # }
# class meeting:
#     def __init__(self, start, end, pos):
        
#         self.start = start
#         self.end = end
#         self.pos = pos
# def maxMeeting(l, n):
#     ans = []
#     l.sort(key = lambda x: x.end)
#     ans.append(l[0].pos)
#     time_limit = l[0].end
#     for i in range(1, n):
#         if l[i].start > time_limit:
#             ans.append(l[i].pos)
#             time_limit = l[i].end
#     for i in ans:
#         print(i + 1, end = " ")
        
#     print()

# if __name__ == '__main__':
#     start = [ 1, 3, 0, 5, 8, 5 ]
#     end = [ 2, 4, 6, 7, 9, 9 ]
#     n = len(start)
#     l = []
 
#     for i in range(n):
#         l.append(meeting(start[i], end[i], i))
#     print(" scheduled in one room meetings is maximum are:")     
#     # FunctionCall
#     maxMeeting(l, n)


# function solve(min_diff,m,n){
# 	for( i = 0; i < n-m; i++){
# 		// difference between maximum and minimum
# 		diff = input[i+m-1] - input[i];
# 		min_diff = min(min_diff, diff);
# 	}
# 	return min_diff;
# }
# solve(min_diff,m,n)





def solve(st):
 
   for i in st:
 
       if (st.find(i,(st.find(i)+1))) == -1:
           print(i)
           break
   return
st= 'tinakumari'
 
solve(st)



