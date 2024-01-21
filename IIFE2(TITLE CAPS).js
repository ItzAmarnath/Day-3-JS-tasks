var stringArray = ['this is a string', 'and this is another string', 'one more string here'];

console.log(stringArray.map(string => string.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ')));