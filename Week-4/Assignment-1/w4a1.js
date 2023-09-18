// === Method 1: callback ===
function delayedResult(n1, n2, delayTime, callback) {
  const result = n1 + n2;
  setTimeout(() => callback(result), delayTime);
}
delayedResult(4, 5, 3000, (result) => console.log(result)); // shows 9 after 3 seconds
delayedResult(-5, 10, 2000, (result) => console.log(result)); // shows 5 after 2 seconds

// === Method 2: promise ===
function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n1 + n2), delayTime);
  });
}
// delayedResultPromise(4, 5, 3000).then(console.log); // shows 9 after 3 seconds

// === Method 3: async / await ===
async function main() {
  const result = await delayedResultPromise(4, 5, 3000);
  console.log(result);
}

main(); // result will be shown in the console after <delayTime> seconds
