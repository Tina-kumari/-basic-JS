var magic_square=[[8,3,4],
              [1,9,5],
              [6,7,2]
]
var i=0
while (i<length(magic_square)){
    j=0
    sum=0
    while (j<length(magic_square)){
        sum=sum+magic_square[i][j]
        j=j+1
    i=i+1
    }
    console.log(sum)
}
var a=0
while (a<length(magic_square))
    k=0
    sum=0
    while (k<length(magic_square)){
        sum=sum+magic_square[a][k]
        k=k+1
    a=a+1
    console.log(sum)
}

  