const array = [
  [0, 1, 2, 3, 45],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
];

console.log(array);
function toCsvText(array) {
  return array.map((element) => element.join(",")).join("\n");
}
console.log(toCsvText(array));
