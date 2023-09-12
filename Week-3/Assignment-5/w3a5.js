function twoSum(nums, target) { // O(n^2)
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
  return -1;
}

function twoSum2(nums, target) { // O(n)
  const discovered = {};
  for (let i = 0; i < nums.length; i += 1) {
    const anotherNum = target - nums[i];
    if (discovered[anotherNum] !== undefined) {
      return [discovered[anotherNum], i];
    }
    discovered[nums[i]] = i;
  }
  return -1;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([11, 2, 15, 7], 9));
console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([11, 2, 15, 7], 9));

/*
For example:
twoSum([2, 7, 11, 15], 9); Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/
