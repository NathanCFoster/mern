function findConsqSums(arr, k) {
    let temp = [];
    let pointerA = 0;
    let pointerB = 0;
    let tempI = 0;
    while(pointerA < arr.length){
        let sum = 0;
        let pushedTemp = [];
        while(sum <= k && (sum + arr[pointerB]) <= k){
            sum += arr[pointerB];
            pushedTemp.push(arr[pointerB]);
            pointerB++;
            
            // if (temp[tempI + 1] && temp[tempI] == temp[tempI - 1]) {
            //     pointerB ++;
            // }
        }
        if (sum == k) {
            temp.push(arr.slice(pointerA, pointerB));
        }
        pointerA++;
    }
    return temp;
}


console.log(findConsqSums([2,5,3,6,7,0,0,23,11], 16));