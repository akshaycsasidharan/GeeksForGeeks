//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n-1);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n-1;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.missingNumber(arr, n));
        
    }
}// } Driver Code Ends
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
*/

// class Solution{
//     missingNumber(array,n){
//         //code here
//     }
    
    class Solution {
        
    missingNumber(arr, N) {
        
        
        let totalSum = N * (N + 1) / 2;
        
        
        let arraySum = 0;
        
        
        for (let i = 0; i < N - 1; i++) {
            arraySum += arr[i];
        }
        
        
        return totalSum - arraySum;
    }
}

