let array = ['apple', 'orange', 'banana'];
let newArray = array.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
console.log(newArray);