// write your func here
function arraySimilarity(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; 
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false; 
        }
    }

    return true;
}

const array1 = [1, 2, '3', 4, 'five']
const array2 = [1, 2, 3, 4, '5']
const array3 = [1, 2, '3', 4, 'five']

console.log(arraySimilarity(array1, array2));
console.log(arraySimilarity(array1, array3));