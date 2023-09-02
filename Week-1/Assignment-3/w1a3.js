function countAandB(input) {
  let count = 0;
  input.forEach(element => {
    if (element === 'a' || element === 'b') {
      count++;
    }
  });
  return count;
}
function toNumber(input) {
  const res_list = [];
  input.forEach(element => {
    res_list.push(element.charCodeAt() - 'a'.charCodeAt() + 1)
  });
  return res_list;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]