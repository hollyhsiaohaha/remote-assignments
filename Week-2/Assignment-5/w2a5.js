function binarySearchPosition(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  let mid = 0;
  while (end - start > 1) {
    mid = Math.floor((start + end) / 2);
    if (target === numbers[mid]) {
      return mid;
    }
    if (target < numbers[mid]) {
      end = mid;
    } else {
      start = mid;
    }
  }
  if (target === numbers[end]) {
    return end;
  }
  if (target === numbers[start]) {
    return start;
  }
  return -1;
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
console.log(binarySearchPosition([1, 2, 5, 6, 8], 8)); // should print 4
console.log(binarySearchPosition([1, 2, 5, 6, 7], 8)); // should print -1
