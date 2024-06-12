//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);

        let a = new Array(n);
        let b = new Array(m);

        input_line = readLine().split(' ');
        for (let i = 0; i < n; i++) {
            a[i] = parseInt(input_line[i]);
        }

        input_line = readLine().split(' ');
        for (let i = 0; i < m; i++) {
            b[i] = parseInt(input_line[i]);
        }
        let obj = new Solution();

        let ans = obj.NumberofElementsInIntersection(a, b, n, m);
        console.log(ans);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/
class Solution {
    
    NumberofElementsInIntersection(a, b, n, m) {
        
        let elementsInA = {};
        
        for (let i = 0; i < n; i++) {
            elementsInA[a[i]] = true;
        }
        
        let intersectionCount = 0;
        

        for (let j = 0; j < m; j++) {
            
            if (elementsInA[b[j]]) {
                intersectionCount++;

                delete elementsInA[b[j]];
            }
        }
        
        return intersectionCount;
    }
}