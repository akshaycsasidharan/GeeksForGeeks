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
        let input_line = readLine().split(' ');
        let s = input_line[0];
        let obj = new Solution();
        let ans = obj.nonrepeatingCharacter(s);
        if(ans=='$')
        ans='-1';
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
*/
class Solution {

    nonrepeatingCharacter(s) {
        
        let charCount = {};

        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }


        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            if (charCount[char] === 1) {
                return char;
            }
        }

        return '$';
    }
}