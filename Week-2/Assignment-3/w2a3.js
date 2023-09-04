function count(input) {
  const countObj = new Object();
  input.forEach(alphabet => {
    if (alphabet in countObj) {
      countObj[alphabet] ++;
    } else {
      countObj[alphabet] = 1;
    }
  })
  return countObj;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}


function groupByKey(input) {
  const groupedObj = new Object();
  input.forEach(alphaObj => {
    if (alphaObj.key in groupedObj) {
      groupedObj[alphaObj.key] += alphaObj.value;
    } else {
      groupedObj[alphaObj.key] = alphaObj.value;
    }
  })
  return groupedObj;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}