// write your func here
function factorial(n) {
    if (n < 0) {
        return "Does not exist.";
    } else if(n === 1 || n === 0){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(3));