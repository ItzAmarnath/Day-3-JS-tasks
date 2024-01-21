function findPalindromes(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var reversedElement = arr[i].toString().split('').reverse().join('');
        var element = arr[i].toString();

        if (element === reversedElement) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(findPalindromes([123, 121, 232, 11211, 123456, 654321])); // [121, 232, 11211, 654321]