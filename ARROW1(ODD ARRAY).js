const printOdds = (arr) => {
    arr.forEach((el) => {
      if (el % 2 != 0) console.log(el);
    });
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  printOdds(numbers);