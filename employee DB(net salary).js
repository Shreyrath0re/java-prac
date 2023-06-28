class Employee {
  constructor(name, id, basicSalary, HRA, allowances) {
    this.name = name;
    this.id = id;
    this.basicSalary = basicSalary;
    this.HRA = HRA;
    this.allowances = allowances;
  }
  getSalary() {
    const grossSalary = this.basicSalary + this.HRA + this.allowances;
    const netSalary = grossSalary * 0.9; 
    return netSalary;
  }
}
const employee1 = new Employee("John Doe", 1, 5000, 1000, 500);
const employee2 = new Employee("Jane Smith", 2, 6000, 1200, 600);
console.log("Net Salary for Employee 1: Rs.", employee1.getSalary());
console.log("Net Salary for Employee 2: Rs.", employee2.getSalary());
