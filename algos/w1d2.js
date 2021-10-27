const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// function bubbleSort(nums) {
//     var arr = []; // <-- sort an unsorted array in-place
//     for (let index = 0; index < nums.length; index++) {
//         var max = nums[0];
//         var maxI = 0;
//         for (let x = 0; x < nums.length; x++) {
//             if (nums[x] >= max) {
//                 max = nums[x];
//                 maxI = x;
//             }
//         }
//         //  array in-place
//         arr.unshift(max);
//         nums.splice(maxI, 1);
//         console.log(arr);
//         console.log(nums);
//     }
//     return arr;
// }

// console.log(bubbleSort(nums1))
function bubbleSortRecursive(nums, current = Math.floor(nums.length / 2)) {
    if (!current) {
        return nums;
    }
    if (nums[current] > nums[current + 1]) {
        let temp = nums[current];
        nums[current] = nums[current + 1];
        nums[current + 1] = temp;
        return bubbleSortRecursive(nums, current + 1);
    }
    if (nums[current] < nums[current + 1]) {
        return bubbleSortRecursive(nums, current - 1);
    }
    if (nums[current] > nums[current - 1]) {
        return bubbleSortRecursive(nums, current + 1);
    }
    if (nums[current] < nums[current - 1]) {
        let temp = nums[current];
        nums[current] = nums[current - 1]
        nums[current - 1] = temp;
        return bubbleSortRecursive(nums, current - 1);
    }
    return nums;
}

console.log(bubbleSortRecursive(nums1));