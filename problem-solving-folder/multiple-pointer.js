// COUNT UNIQUE VALUES BOTH POINTERS: FIRST IN THE ARRAY, LAST IN THE ARRAY
// This function counts unique values in a sorted array using two pointers.
const multiplePointer = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let pair = [];
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return pair = [arr[left], arr[right]];
            console.log(`Pair found: ${arr[left]}, ${arr[right]}`);
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
    console.log("No pair found");
    return null; // Return null if no pair found
}

multiplePointer([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]



// COUNT UNIQUE VALUES USING MULTIPLE POINTERS
// This function counts unique values in a sorted array using multiple pointers.
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    
    return i + 1;
}
// Test
console.log(countUniqueValues([1, 1, 1, 1, 2, 3, 4, 5, 6, 6, 7]));



