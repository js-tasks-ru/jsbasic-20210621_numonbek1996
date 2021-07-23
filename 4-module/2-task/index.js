function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let stroka = table.rows[i];
    stroka.cells[i].style.backgroundColor = "red";
  }
}
