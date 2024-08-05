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
        let str = readLine().trim();
        let obj = new Solution();
        let res = obj.removeDuplicates(str);
        console.log(res);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} n
 * @return {string} 
*/

class Solution {
    removeDuplicates(str){
     let result = '';     
    let seen = {};       

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!seen[char]) {
            result += char;
            seen[char] = true;
        }
    }

    return result;
    }
}



