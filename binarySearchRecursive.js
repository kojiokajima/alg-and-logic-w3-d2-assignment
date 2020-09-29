// 17 numbers, mid: 9 (index of 8)
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 26, 27, 29];
// fix the original array
const fixedArray = testArray;

const binarySearchRecursive = function (arr, target) {
    // initialize a variable(mid-index)
    let middle = Math.floor((arr.length) / 2);

    // base case
    if (arr[middle] === target) {
        return fixedArray.indexOf(arr[middle]);
    } else if (arr[middle] < target) {
        // cut an original array and set in a new array
        let newArray = arr.filter(element => element > arr[middle]);
        return binarySearchRecursive(newArray, target);
    } else {
        // cut an original array and set in a new array
        let newArray = arr.filter(element => element < arr[middle]);
        return binarySearchRecursive(newArray, target);
    }
}

console.log(binarySearchRecursive(testArray, 27));