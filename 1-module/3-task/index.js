function ucFirst(str) {
<<<<<<< HEAD
  // if (!str && !str[0].includes(" ")) {
  //   return str;
  // }
  // return str[0].toUpperCase() + str.slice(1);

=======
>>>>>>> e6aee48e6e78405d1da0b15a5f33f007cd54148d
  let firstLetter = str.charAt(0);
  let firstLetterUpperCase = firstLetter.toUpperCase();
  let otherLetters = str.slice(1);

  return `${firstLetterUpperCase}${otherLetters}`;
}
