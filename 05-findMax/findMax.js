// write your func here
function findMax(array) {

    if (array.length === 0) {
        return undefined; 
    }

    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]; 
        }
    }

    return max; 
}

const numbers = [3, 5, 7, 2, 8, -10, 4];
const largestNumber = findMax(numbers);
console.log(largestNumber); 