var arr1 = [5,3,1,2,7];

function loops(array) {
    for (let index = 1; index < array.length; index++) {
        let temp = array[index];
        let x = index - 1;
        while((x >= 0) && (temp < array[x])) {
            array[x + 1] = array[x];
            x--;
        }
        array[x + 1] = temp;
    }
    return array;
}
    
console.log(loops(arr1));