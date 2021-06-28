function print(text) {
  console.log(text);
}

function isValid(name) {
<<<<<<< HEAD
  // if (name !== "" && name !== "  " && name.length >= 4) {
  //   return name;
    return !!name && !name.includes(' ') && name.length >= 4;  //код приподователя
  }
=======
  return !!name && !name.includes(' ') && name.length >= 4;
>>>>>>> dc0690e756e73a16cd05612d2ed09185b4fd6521
}

function sayHello() {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}
