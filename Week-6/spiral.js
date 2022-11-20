//Problem Description Given a matrix of m * n elements (m rows, n columns), return allelements of the matrix in spiral order.


function spiral(m,n,a){
  let k=0,l=0;
while(k<m&&l<n){
  let i;
//print the first row  
  for(i=k;i<n;++i){
    console.log(a[k][i]);
  }
k++;
//print the last column
  for(i=k;i<m;++i){
      console.log(a[i][n-1]);
      
  }
  n--;
  //print the last row
  if(k<m){for(i=n-1;i>=l;--i){
      
      console.log(a[m-1][i]);
  }
  m--;
//print the first column
  }
  if(l<n){for(i=m-1;i>=k;--i){
      console.log(a[i][l]);
  }
  l++;
  }
}
}
const arr=[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];


let M=arr.length;
let N=arr[0].length;

spiral(M,N,arr)
