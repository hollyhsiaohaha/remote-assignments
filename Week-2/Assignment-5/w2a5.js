function binarySearchPosition(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  let mid = 0;
  while (end >= start) {
    mid = Math.floor((start + end) / 2)
    if (target < numbers[mid]) {
      end = mid;
    } else if (target > numbers[mid]) {
      start = mid;
    } else {
      return mid;
    }
  }
  return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3