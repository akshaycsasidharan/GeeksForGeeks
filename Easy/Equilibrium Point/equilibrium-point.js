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
        let a = new Array(n);
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            a[i] = input_ar[i];
        let obj = new Solution();
        console.log(obj.equilibriumPoint(a, n));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number}
*/

class Solution {

    equilibriumPoint(arr, n) {

        let sum = 0;
        for (let i=0 ;i<n;i++) {
            sum +=arr[i];
        }
        

        let curr = 0;
        

        for (let j = 0; j < n; j++) {
            
            sum -= arr[j];
            

            if (curr === sum) {
                return j + 1; 
            }
            

            curr += arr[j];
        }
        

        return -1;
    }
}
