const message: string = "Hello, World!";
console.log(message);

const userName: string = "Zyna Dev";

function welcome(userName: string): string {
  return `Hello, ${userName}`;
}

console.log(welcome(userName));
console.log(userName.toUpperCase());
console.log(welcome(userName));

const numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number * 2);
});

// Number
let num: number = 3;
console.log("number: " + num);

// String
let str: string = "Hello, Zyna!";
console.log(str);

// Boolean
let isTrue: boolean = true;
if (isTrue) {
  console.log(`isTrue: ${isTrue}`);
}

// Object
const user: {
  name: string;
  age: number;
} = {
  name: "Zyna Dev",
  age: 21,
};

console.log(user);

// Array
const array: number[] = [1, 2, 3, 4, 5];
console.log(array);

const skills: (string | number)[] = ["Zyna", 21];
skills.push("dev");
console.log(skills);

// Tuple
const skill2: readonly [string, number] = ["Nga", 21];
console.log(skill2);

const skill3: [string, number?] = ["Hello"];
console.log(skill3);

// Enum
enum API_STATUS {
  PENDING = "PENDING",
  FULFILLING = "FULFILLING",
  REJECTED = "REJECTED",
}

let pending = API_STATUS.PENDING;
console.log(pending);

enum API {
  PENDING,
  FULFILLING,
  REJECTED,
}

let pending2 = API.PENDING;
console.log(pending2);

// Any Type
let anyType: any = "any type";
console.log(`Any: ${anyType}`);

anyType = true;
console.log(`Any: ${anyType}`);

// Void Type
const sum = (a: number, b: number): number => a + b;
console.log(sum(2, 6));

const hello = (message: string): void => {
  console.log(`Hello, ${message}`);
};
hello("Nga");

// Never
function handleError(errorMessage: string): never {
  throw new Error(errorMessage);
}

// Union type
function sumNumberOrString(a: any, b: any): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  else if (typeof a === "string" && typeof b === "string") return a.concat(b);
  return "Invalid parameters";
}

console.log(`SumNum: ${sumNumberOrString(2, 6)}`);
console.log(`SumString: ${sumNumberOrString("Zyna", "dev")}`);
console.log(`SumError: ${sumNumberOrString("Nga", 21)}`);

type numberString = number | string;

function sumNumberOrStringUnion(a: numberString, b: numberString): numberString {
  if (typeof a === "number" && typeof b === "number") return a + b;
  else if (typeof a === "string" && typeof b === "string") return a.concat(b);
  return "Invalid parameters";
}

console.log(`SumNum: ${sumNumberOrStringUnion(2, 6)}`);
console.log(`SumString: ${sumNumberOrStringUnion("Zyna", "dev")}`);
console.log(`SumError: ${sumNumberOrStringUnion("Nga", 21)}`);

//Default Parameters
function hi(hi = 'Hi Nga') {
  console.log(hi);
}

console.log(hi("Hi Zyna"));
console.log(hi());

const createArray = (...spread: number[]): number[] => {
  return spread;
};

let myArray: number[] = createArray(1, 2, 3, 4, 5);

console.log(myArray);

const [arr0, ...rest] = myArray;

console.log(arr0);
console.log(rest);

// Overloading declarations
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;

function addNew(a: any, b: any): any {
  return a + b;
}

console.log(`addNum: ${addNew(1, 4)}`);
console.log(`addString: ${addNew('Hello', ' Zyna')}`);

// Class
class Card {
  private name: string;
  private price: number;
  readonly productionDate: Date;

  constructor(name: string, price: number, productionDate: Date) {
    this.name = name;
    this.price = price;
    this.productionDate = productionDate;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
  getProductionDate(): Date {
    return this.productionDate;
  }

  setName(name: string): void {
    this.name = name;
  }

  setPrice(price: number): void {
    if(price < 0){
      throw new Error("price must be greater than 0");
    }
    this.price = price;
  }

  getDetails(): string {
    return `Card: ${this.name}, Price: $${this.price}, Production Date: ${this.productionDate}`;
  }
}

let itachi = new Card("Itachi", 50000, new Date());
console.log(itachi.getName());

itachi.setName("Itachi Luxury");
console.log(itachi.getDetails());

// Class TS
class Car {
  private _name: string;
  private _price: number;
  readonly _productionDate: Date;

  constructor(name: string, price: number, productionDate: Date) {
    this._name = name;
    this._price = price;
    this._productionDate = productionDate;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get productionDate(): Date {
    return this._productionDate;
  }

  set name(_name: string) {
    this._name = _name;
  }

  set price(_price: number) {
    if (_price < 0) {
      throw new Error("Price must be greater than 0");
    }
    this._price = _price;
  }

  get detail(): string {
    return `
    Car: ${this._name}
    Price: ${this._price}
    Production Date: ${this._productionDate}`;
  }
}

let toyota = new Car("Toyota", 50000, new Date());

toyota.name = "Toyota Camry";

console.log(toyota.detail);

//Inheritance (Kế thừa)
class Mazda extends Car {
  private _color: string;
  constructor(name: string, price: number, productionDate: Date, color: string) {
    super(name, price, productionDate);
    this._color = color;
  }

  //Overwrite
  set color(color: string) {
    this._color = color;
  }

  get color(): string {
      return this._color;
  }

  get detail(): string {
    return `
    Car: ${this.name}
    Color: ${this._color}
    Price: ${this.price}
    Production Date: ${this.productionDate}`;
  }
}

let mazda = new Mazda("Mazda", 60000, new Date(), "Red");
console.log(mazda.detail);

//Static
class Circle {
  static pi: number = 3.14;
  public num: number = 100;

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }
}

let num1 = new Circle();
console.log(num1.num);
console.log(Circle.calculateArea(10));

// Abstract Classes
abstract class Employee {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  abstract getSalary(): number;

  get fullName(): string {
    return this._firstName + " " + this._lastName;
  }

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

class EmployeeIT extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.salary;
  }
}

class EmployeeIOT extends Employee {
  constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.rate * this.hours;
  }
}

let e1 = new EmployeeIT('Zyna', 'Dev', 1500);
let e2 = new EmployeeIOT('Zyna', 'Dev', 10, 120);

console.log(e1.compensationStatement());
console.log(e2.compensationStatement());

//Interface
interface IPerson{
  firstName: string;
  lastName: string;
  age?: number;
}

function getFullName(person): string {
  return `${person.firstName} ${person.lastName}`;
}

let person: IPerson = {
  firstName: 'Zyna',
  lastName: 'Dev',
}

console.log(getFullName(person));

interface IUser{
  name: string;
  age: number;
  salary: number;

  getSalary:(salary: number) => number;
}

class User implements IUser {
  name: string;
  age: number;
  salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  getSalary(salary: number): number {
    return this.salary;
  }
}

let zyna = new User('Zyna', 21, 1000);

console.log(zyna);