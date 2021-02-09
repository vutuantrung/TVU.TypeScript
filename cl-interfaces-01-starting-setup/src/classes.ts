abstract class Departement {
  static fiscalYear = 2020;
  protected readonly id: string;
  private name: string;
  protected employees: string[] = [];

  // constructor(private id: string, public n: string) { <- need to remove the fields
  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
    console.log(Departement.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Departement): void;
  // describe(this: Departement) {
  //   console.log('Deparment: ' + this.name + ' ' + this.id);
  // }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.name);
    console.log(this.employees);
    console.log(this.employees.length);
  }
}

class ITDepartement extends Departement {
  public admins: string[] = [];

  constructor(id: string, admins: string[]) {
    // Call the constructor of the base class
    super(id, 'IT');
    this.admins = admins;
  }

  describe(this: ITDepartement) {
    console.log(
      `ITDepartement: id = ${this.id} has ${this.employees.length} employees.`
    );
  }
}

class AccountingDepartement extends Departement {
  private lastReport: string;
  private static instance: AccountingDepartement;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw Error('no report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('no report to add');
    this.addReport(value);
  }

  static getInstance() {
    if (AccountingDepartement.instance) return this.instance;
    this.instance = new AccountingDepartement('d2', []);

    return this.instance;
  }

  public reports: string[] = [];

  constructor(id: string, reports: string[]) {
    // Call the constructor of the base class
    super(id, 'IT');
    this.reports = reports;
    this.lastReport = reports[0];
  }

  // override the base's method
  addEmployee(name: string) {
    if (name === 'trung') return;
    this.employees.push(name);
  }

  describe(this: AccountingDepartement) {
    console.log(
      `AccountingDepartement: id = ${this.id} has ${this.employees.length} employees.`
    );
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }
}

const employee1 = Departement.createEmployee('test employee');

// const accounting = new Departement('598dfs', 'Accounting');
// accounting.addEmployee('Max');
// accounting.addEmployee('John');
// accounting.printEmployeeInformation();

const itAccounting = new ITDepartement('itd1', ['trung', 'yolo']);
console.log(itAccounting);

// const accAccounting = new AccountingDepartement('accd1', ['tesk 1', 'task 2']);
// console.log(accAccounting);
// console.log(accAccounting.mostRecentReport);
// accAccounting.mostRecentReport = 'Manu';
// const accountingCopy = { name: 'Trung', describe: accounting.describe };
// accountingCopy.describe();

// accAccounting_1 is same as accAccounting_2
const accAccounting_1 = AccountingDepartement.getInstance();
const accAccounting_2 = AccountingDepartement.getInstance();
