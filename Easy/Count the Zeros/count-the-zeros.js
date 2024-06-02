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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res=obj.countZeroes(arr,n);
        console.log(res);
    
    }
}
// } Driver Code Ends


//User function Template for javascript




class Solution {
    countZeroes(arr, n) {
        for (let i = 0; i < n; i++) {
            if (arr[i] === 0) {

                return n - i;
            }
        }
        return 0;
    }
}