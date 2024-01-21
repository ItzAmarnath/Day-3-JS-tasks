const isPalindrome = (str) => {
    let i = 0, j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) return false;
        i++; j--;
    }
    return true;
}

const findPalindromes = (arr) => {
    return arr.filter(item => isPalindrome(item.toString()));
}

console.log(findPalindromes([123, 121, 345, 343, 456, 11211]));