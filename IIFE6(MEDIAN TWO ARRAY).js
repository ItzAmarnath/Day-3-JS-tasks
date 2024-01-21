function findMedian(arr1, arr2) {
    
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  
    
    const n = merged.length;
  
    
    if (n % 2 === 1) {
      return merged[Math.floor(n / 2)];
    }
  
    
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  }
  
  
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  console.log(findMedian(arr1, arr2)); 