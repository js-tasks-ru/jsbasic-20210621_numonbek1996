function sumSalary(salaries) {
  let sumOfSalaries = 0;

  for (let key in salaries) {
<<<<<<< HEAD
    let isSalary =
      typeof salaries[key] === "number" && Number.isFinite(salaries[key]);
=======
    let isSalary = typeof salaries[key] === 'number' && Number.isFinite(salaries[key]);
>>>>>>> 4112b26936ba566281a88adeece21dca742e6f29

    if (isSalary) {
      sumOfSalaries += salaries[key];
    }
  }

  return sumOfSalaries;
}
