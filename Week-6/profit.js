//Problem 6.3 Sort array of 0's,1's and 2'sGiven an array of size N containing only 0s, 1s, and 2s; sort the array in ascendingorder. Example 1:Input:N = 5arr[]= {0 2 1 2 0}Output:0 0 1 2 2Explanation: 0's 1's and 2's are segregated into ascending order.Example 2:Input:N = 3arr[] = {0 1 0}Output:0 0 1Explanation: 0s 1s and 2s are segregated into ascending order. Time Complexity: O(N)Expected Auxiliary Space: O(1)Constraints: 1 <= N <= 10^6 0 <= A[i] <= 2Problem 6.4 : Best time to buy and sell stockYou are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock andchoosing a different day in the future to sell that stock.Return the maximum profit youcan achieve from this transaction. If you cannot achieve any profit, return 0.

function profit(a,n){
    let i,j,k=0;
    for(i=0;i<n-1;i++){
        for(j=i+1;j<n;j++){
            let t=a[j]-a[i];
//comparing the price
            if(k<t){
                k=t;
            }
        }
    }
    return k;
}

const prices=[7,1,5,3,5,4];
console.log(profit(prices,prices.length));