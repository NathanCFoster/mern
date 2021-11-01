// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arrs1 = [1, 3, 3, 5, 8, 10,];
var arrs2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

// function mergeDedupe(arr1, arr2) {
//     // don't use set
//     const newArr = new Set();
//     let i = 0;
//     while (arr1.length != 0 || arr2.length != 0) {
//         if (arr1[i] < arr2[i]) {
//             newArr.add(arr1[i]);
//             newArr.add(arr2[i]);
//         } else {
//             newArr.add(arr2[i]);
//             newArr.add(arr1[i]);
//         }
//         arr1.shift();
//         arr2.shift();
// i++;
//         
//     }
//  

function mergeDedupe(arr1, arr2) {
    const newArr = [];
    let i = 0;
    let i2 = 0;
    while (arr1.length > i || arr2.length > i2) {
        for (let x = 0; x < newArr.length; x++) {
            if (newArr[x] == arr1[i]) {
                i++;
            }
            if (newArr[x] == arr2[i2]) {
                i2++;
            }
        }
        if (arr1[i] < arr2[i2]) {
            newArr.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[i2]) {
            newArr.push(arr2[i2]);
            i2++;
        } else {
            newArr.push(arr1[i]);
            i2++;
            i++;
        }

    }
    return newArr;
}
console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]));
 // [ 1, 3, 4, 5, 8, 10 ]
 console.log(mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]));
 // [1, 2, 3, 4, 5, 6, 8, 10, 12]