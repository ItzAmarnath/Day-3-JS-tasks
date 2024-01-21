var array = [3, 7, 10, 11, 13, 16, 19, 20];

var primeNumbers = (function() {
 var primeNumbers = [];
  
 function isPrime(num) {
    for(var i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
      if(num % i === 0) return false; 
    return num > 1;
 }
  
 for(var i = 0; i < array.length; i++) {
    if(isPrime(array[i])) {
      primeNumbers.push(array[i]);
    }
 }
  
 return primeNumbers;
})();

console.log(primeNumbers);