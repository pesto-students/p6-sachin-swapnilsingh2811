//Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

function ascending(m,a){
    let i,j,t,temp;
    for(i=0;i<m-1;i++){
        t=i;
        for(j=i+1;j<m;j++){
            if(a[j]<a[t]){
        t=j;
//swapping the elements of array
        temp=a[i];
        a[i]=a[t];
        a[t]=temp;
       
        
            }
        }
    }
    return a;
    
}

const arr=[0,2,1,2,0];
console.log(ascending(arr.length,arr));