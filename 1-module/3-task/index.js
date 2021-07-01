function ucFirst(str) {
  if (!str && !str[0].includes(" ")) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}
