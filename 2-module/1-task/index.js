function sumSalary(salaries) {
  if (salaries.Ann == "" && salaries.Pete == "" && salaries.John == "") {
    return false;
  }
  return salaries.Ann + salaries.Pete + salaries.John;
}
