function checkSpam(str) {
  let strLowerCase = str.toLowerCase();

  return strLowerCase.includes("1xbet") || strLowerCase.includes("xxx");
}
checkSpam("1XbeT now");
checkSpam("free xxxxx");
checkSpam("innocent rabbit");
