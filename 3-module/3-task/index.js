function camelize(str) {
  let arr = str.split("-");
  let result = arr.map(
    (item) => item.slice(0, 1).toUpperCase() + item.slice(1)
  );
  let connect = result.join("");
  return connect;
}
