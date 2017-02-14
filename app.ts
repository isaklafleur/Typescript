// ==========================
// TYPES
// ==========================

// string
let myName: string = 'Isak';
// myName = 28;

// number
let myAge: number = 27.5;
// myAge = "Max";

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = "27";

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100;

// tuples - typescript
let address: [string, number] = ["Yxstabacken 639", 99];

// enum - typescript
enum Color {
  Gray, // 0
  Green = 100, // 1
  Blue // 2
}
let myColor: Color = Color.Blue;
console.log(myColor)

// any - avoid using this type!
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);


// ======================
// FUNCTIONS
// ======================

function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

function sayHello(): void {
  console.log("Hello");
  //return myName; // by using void, the function should not return a value, if it does TypeScript return a value.
}

function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
//console.log(multiply(2, "Isak"));
console.log(multiply(2,2));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
// myMultiply();
console.log(myMultiply(5, 2));

// ====================
// OBJECTS
// ====================

let userData: {name: string, age: number, job: string } = {
  name: "Isak",
  age: 34,
  job: "teacher"
};

// userData = {};

/*
userData = {
  a: "Hello",
  b: 22
};
*/

// complex object
let complex: {data: any[], output: (all: boolean) => number[]} = {
  data: [100,3.55, 10],
  output: function (all: boolean): number[] {
    return this.data
  }
};
// complex = {};




// type alias
type Complex = {data: any[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [100,3.55, 10],
  output: function (all: boolean): number[] {
    return this.data
  }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;

// check types
let finalValue = 10;
if (typeof finalValue == "number") {
  console.log("Final value is a number");
}

// never type
function neverReturns():never {
  throw new Error("An error!");
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
// canThisBeAny = 12;


// ======================================
// Understanding the TypeScript Compiler
// ======================================

let myName2: string = "Isak";
let myAge2: number = 27;
let anything;
anything = 12;

/*
function controlMe(isTrue: boolean) {
  let result: number;
  if (isTrue) {
    result = 12;
  }
  return result;
}
*/

function controlMe(isTrue: boolean, somethingElse: boolean) {
  let result: number;
  if (isTrue) {
    result = 12;
  }
  result = 33;
  return result;
}

// ===============================
// let and const variables in ES6
// ===============================

// var creates a global scope
// let variable creates a block scope
let variable = "test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // Won't work

// Block scope
function reset() {
  // console.log(variable);
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

// =====================
// Arrow Functions - E6
// =====================

// common function
console.log("Arrow functions");
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(10, 3));

// arrow functions
const multiplyNumbers = (number1: number,  number2: number) => number1 + number2;
console.log(multiplyNumbers(10,3));

const greet = () => {
  console.log("Hello!");
}
greet();

const greetFriend = friend => console.log(friend);

greetFriend("Isak");
