function makeFriendsList(friends) {
  // ваш код...
  document.body.innerHTML = `<ul></ul>`;
  const list = document.querySelector("ul");

  // for (key in friends) {
  //   let row = document.createElement("li");
  //   row.innerHTML = `<li>${key}</li>`;
  //   document.querySelector(".name").appendChild(row);
  //   for (let i = 0; i < friends[key].length; i++) {
  //     let row = document.createElement("li");
  //     row.innerHTML = `
  //     <li>${friends[key][i]}</li>
  //     <li>${friends[key][i]}</li>
  //     `;
  //   }
  // }

  friends.forEach((item) => {
    list.innerHTML += `<li>${item.firstName}${" "}${item.lastName}</li>`;
  });
}
