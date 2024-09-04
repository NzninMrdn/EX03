// write your func here
function isPalindrome(str) {
    // Invert string to lowercase letters and delete spaces
    const cleanedStr = str.toLowerCase().replace(/\s+/g, '');
    
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

const input = "racecar";
if (isPalindrome(input)) {
    console.log(true);
} else {
   console.log(false);
}
