let arr = [1, 2, 3, 4, 1, 2];
let newArr = arr.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(newArr);