//{ Driver Code Starts
// Initial Template for javascript
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
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++){
            arr[i] = input_ar1[i];  
        } 
        let obj = new Solution();
        console.log(obj.firstRepeated(arr, n));
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {

    firstRepeated(arr, n) {
        let elementIndices = {};
        let minIndex = Infinity;  
        
        for (let index = 0; index < n; index++) {
            let value = arr[index];
            
            if (value in elementIndices) {

                minIndex = Math.min(minIndex, elementIndices[value]);
            } else {
                elementIndices[value] = index + 1;
            }
        }
        
        return minIndex === Infinity ? -1 : minIndex;  
    }
}
