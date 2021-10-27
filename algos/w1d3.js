const myArr = [3, 2, 9, 5, 1, 4, 8, 10, 15, 12]
function selectionSort(array) {
    for (let index = 0; index < array.length; index++) {
        var tempI = index;
        for (let j = index; j < array.length; j++) {
            if (array[j] < array[tempI]) {
                tempI = j;
            }
        }
        tempSwitch = array[index];
        array[index] = array[tempI];
        array[tempI] = tempSwitch;
    }
    return array;
}

console.log(selectionSort(myArr));
console.log(myArr.sort());
function compare(a, b) {
    return a - b;
}

console.log(myArr.sort(compare));