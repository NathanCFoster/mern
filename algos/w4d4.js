/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 # character means a backspace character.
    i.e., after processing the backspaces, are the two strings equal?
    Bonus: solve in O(n) time
*/


const S1 = "aclp";
// a -> ab -> a -> ac
const T1 = "ad#clp";
// a -> ab -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
// a -> ab -> a -> 
const T2 = "c#d#";
// c ->  -> d -> 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a ->  ->  -> c
const T3 = "#a#c";
//  -> a ->  -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a ->  -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(S, T) {
    let temp = [];
    let tempCompare = [];

    // loop throughout the first string and second string...
    for (let index = 0; index < S.length; index++) {
        // if there is a hash at the current index... pop the last value we inputted
        if (S[index] == "#") {
            temp.pop();
        } else {
            temp.push(S[index]);
        }   
    }
    
    // do the same for the other string...
    for (let index = 0; index < T.length; index++) {
        if (T[index] == "#") {
            tempCompare.pop();
        } else {
            tempCompare.push(T[index]);
        }   
    }

    // join both the strings for an if check...
    let str1 = temp.join();
    let str2 = tempCompare.join();

    // finally we return whether or not the two are equal
    return str1 == str2;
}

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))