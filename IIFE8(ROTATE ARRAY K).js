function rotateArray(arr, k) {
    const length = arr.length;
    const newArr = new Array(length);
  
    for (let i = 0; i < length; i++) {
      newArr[(i + k) % length] = arr[i];
    }
  
    for (let i = 0; i < length; i++) {
      arr[i] = newArr[i];
    }
  
    return arr;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const k = 2;
  console.log(rotateArray(arr, k));