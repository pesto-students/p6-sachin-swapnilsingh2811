//Given an one-dimensional unsorted array A containing N integers.You are also given aninteger B, find if there exists a pair of elements in the array whose difference is B.Return1 if any such pair exists else return 0. Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105.


function difference(a,n,b){
    let i,j,y,z;
    for(i=0;i<n-1;i++){
        for(j=i+1;j<n;j++){
            k=a[j]-a[i];
//checking the matching input is negative or positive            
            if(k<0 && b>0){
                 z=k*-1;
//checking if pair is matching with target or not 
               if(z==b){
                    return 1; 
                }
            }else if(k>0 && b<0){
                 y=k*-1;
               if(y==b){
                return 1;
            }
        }
        if(k==b){
            return 1;
        }
    }
}
    return 0;
}
const A=[5,10,3,2,50,80];
const B=78;
console.log(difference(A,A.length,B));