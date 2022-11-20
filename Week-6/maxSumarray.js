//Find the contiguous subarray within an array, A of length N which has the largest sum.Input Format.


function max(a,b){
    let Max=0;
    let i,j;
    for(i=0;i<b;i++){
    let sum=0;
        for(j=i;j<b;j++){
            sum+=a[j];
//comparing which is greater and then replacing it.
            if(sum>Max){
                Max=sum;
            }
        }
    }
    return Max;
}

const A=[-2,1,-3,4,-1,2,1,-5,4];
console.log(max(A,A.length));
