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
        let [n,k] = readLine().trim().split(" ").map((x) => parseInt(x)); 
        let arr = readLine().trim().split(" ").map((x) => parseInt(x)); 
        let obj = new Solution();
        let res = obj.getPairsCount(arr,n,k);
        console.log(res);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @return {number}
*/

class Solution {
    
    getPairsCount(arr, n, k) {
        let count = 0;
        let freq = {};

        for (let i = 0; i < n; i++) {
            let complement = k - arr[i];


            if (freq[complement]) {
                count += freq[complement];
            }


            if (freq[arr[i]]) {
                freq[arr[i]]++;
            } else {
                freq[arr[i]] = 1;
            }
        }

        return count;
    }
}


