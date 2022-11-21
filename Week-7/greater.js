//Next greater element of an element in the array is the nearest element on the rightwhich is greater than the current element. If there does not exist next greater of currentelement, then next greater element for current element is -1. For example, next greaterof the last element is always -1.


function greater(a,n){
    let i,j,next;
    
     for (i = 0; i < n; i++)
        {
          next = -1;
          for (j = i + 1; j < n; j++)
          {
            if (a[i] < a[j])
            {
              next = a[j];
              break;
            }
          }
          console.log( next);
          
        }
      
   
}

const A=[1,3,2,4];

greater(A,A.length);