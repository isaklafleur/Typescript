var myName = 'Isak';
var myAge = 27.5;
var hasHobbies = false;
var myRealAge;
myRealAge = 27;
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
var address = ["Yxstabacken 639", 99];
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function sayHello() {
    console.log("Hello");
}
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 2));
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 2));
var userData = {
    name: "Isak",
    age: 34,
    job: "teacher"
};
var complex = {
    data: [100, 3.55, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.55, 10],
    output: function (all) {
        return this.data;
    }
};
var myRealRealAge = 27;
myRealRealAge = "27";
var finalValue = 10;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
function neverReturns() {
    throw new Error("An error!");
}
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
var myName2 = "Isak";
var myAge2 = 27;
var anything;
anything = 12;
function controlMe(isTrue, somethingElse) {
    var result;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result;
}
var variable = "test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
console.log("Arrow functions");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 + number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello!");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Isak");
