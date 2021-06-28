function print(text) {
  console.log(text);
}

function isValid(name) {
  // if (name !== "" && name !== "  " && name.length >= 4) {
  //   return name;
  return !!name && !name.includes(" ") && name.length >= 4; //код приподователя
}

function sayHello() {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}
