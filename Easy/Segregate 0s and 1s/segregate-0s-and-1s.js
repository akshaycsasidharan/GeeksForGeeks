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
        let res = obj.segregate0and1(arr,n);
        let s = "";
        for(let j = 0;j < n;j++){
            s+=arr[j]+" ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
*/

class Solution {

   segregate0and1(arr, n) {

        let left = 0;
        let right = n - 1;

        while (left < right) {
            while (arr[left] === 0 && left < right) {
                left++;
            }

            while (arr[right] === 1 && left < right) {
                right--;
            }

            if (left < right) {
                let temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }
    }
}