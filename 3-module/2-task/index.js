function filterRange(arr, a, b) {
  let mas = arr.concat();
  let someUsers = mas.splice(a, 1).concat(mas.splice(b - 2, 1));
  return someUsers;
}
