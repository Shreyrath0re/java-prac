class BankAccount {
  constructor(name, bankAccountNumber, accountBalance, accountType, ifsc) {
    this.name = name;
    this.bankAccountNumber = bankAccountNumber;
    this.accountBalance = accountBalance;
    this.accountType = accountType;
    this.ifsc = ifsc;
  }
}
const customer1 = new BankAccount("John Doe", "1389944", 5000, "saving", "IFSC500");
const customer2 = new BankAccount("Jane Smith", "2378424289", 6000, "credit", "IFSC600");
const customer3 = new BankAccount("shrey rathore", "456789", 10000,"saving", "IFSC231");
console.log("customer1 name:",customer1.name, "balance:", customer1.accountBalance);
console.log("customer2 name:",customer2.name, "balance:", customer2.accountBalance);
console.log("customer3 name:",customer3.name, "balance:", customer3.accountBalance);
const averageBalance = (customer1.accountBalance + customer2.accountBalance +customer3.accountBalance) / 3;
console.log("average bank balance: ", averageBalance);