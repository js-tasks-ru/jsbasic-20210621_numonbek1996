function ucFirst(str) {
  if (!str && !str[0].includes(" ")) {
    return "error!!";
  }
  return str[0].toUpperCase() + str.slice(1);
}
ucFirst("вася");
ucFirst(" ");
