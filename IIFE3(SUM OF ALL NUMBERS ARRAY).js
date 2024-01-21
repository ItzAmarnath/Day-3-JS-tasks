const array = [1, 2, 3, 4, 5];
const sum = (function() {
 let total = 0;
 array.forEach(num => total += num);
 return total;
})();

console.log(sum);