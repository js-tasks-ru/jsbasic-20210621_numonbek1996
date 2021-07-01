function ucFirst(str) {
  // if (!str && !str[0].includes(" ")) {
  //   return str;
  // }
  // return str[0].toUpperCase() + str.slice(1);

  let firstLetter = str.charAt(0);
  let firstLetterUpperCase = firstLetter.toUpperCase();
  let otherLetters = str.slice(1);

  return `${firstLetterUpperCase}${otherLetters}`;
}
