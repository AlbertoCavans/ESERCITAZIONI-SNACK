const numbs = [4, 5, 3, 1, 11, 21, 30, 0, 2, 44, 19, 99, 100, 2, 3, 1];

const even = [];
const odds = [];

for (let i = 0; i < numbs.length; i++) {
  let numb = numbs[i];
  if (numb % 2 == 0) {
    even.push(numb);
  } else {
    odds.push(numb);
  }
}
console.log(even);
console.log(odds);
