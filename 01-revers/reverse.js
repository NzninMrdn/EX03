// write your func here
function reverseString(str) {
    return str.split('').reverse().join('');
}

const input = "this is a string";
const output = reverseString(input);

console.log(output);
