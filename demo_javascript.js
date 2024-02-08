// // sleep for 5 seconds
// setTimeout(function () {
//   var target = document.getElementById("script-target");
//   target.innerHTML = "***Updated by JavaScript***";
// }, 5000);

//let myglobal = 50;
//someFunction();
someOtherFunction();

var numbers = new Array("One", "Two", "Three");
var numbers2 = ["One", "Two", "Three"];
var collection = { name: "John", age: 25 };

function someFunction() {
  hoisted = 100;
  var myLocal = 25;
  for (var i = 1; i < 10; i++) {
    let block = myLocal + i;
    block += hoisted;
    console.log(block);
  }
  var hoisted;
}


function someOtherFunction() {
  var myVar = 25;
  let val = 50;
  for (var i = 1; i < 10; i++) {
    let val = i;
    console.log(val);
  }
  console.log("value = " + val);
}

let pi = Math.PI; // 3.141592653589793
let e = Math.E; // 2.718281828459045
let rand = Math.random(); // 0.0 <= rand < 1.0
let min = Math.min(1, 2, 3, 4, 5); // 1
let max = Math.max(1, 2, 3, 4, 5); // 5
let abs = Math.abs(-100); // 100
let floor = Math.floor(1.99); // 1
let ceil = Math.ceil(1.01); // 2
let round = Math.round(1.49); // 1
let sqrt = Math.sqrt(100); // 10
let pow = Math.pow(2, 3); // 8
let sin = Math.sin(90); // 0.8939966636005579
let cos = Math.cos(0); // 1
let tan = Math.tan(45); // 1.6197751905438615
let asin = Math.asin(0.5); // 0.5235987755982989
let acos = Math.acos(0.5); // 1.0471975511965979
let atan = Math.atan(1); // 0.7853981633974483
let log = Math.log(10); // 2.302585092994046
let exp = Math.exp(10); // 22026.465794806718

let s1 = "test".replace(/te/i, "example"); // s1 is "examplest";
let s2 = /de/.test("demo"); // s2 is true;

let n1 = 2 + 3 * 4; // n1 = 14
let n2 = (2 + 3) * 4; // n2 = 20
let n3 = 2 + (3 * 4); // n3 = 14 (brackets not needed)
let n4 = ++n3; // increment: n4 = n3 + 1 = 15
let n5 = n4 % 4; // n5 = 3 (remainder of n4/4)

let x = 5;
x += 2; // x = 7 
x -= 3; // x = 4
x /= 2; // x = 2 
x *= 7; // x = 14
x %= 3; // x = 2 (remainder of 14/3)
x **= 2; // x = 4 (x squared)
if (x != 4) console.log("x is not the expected value");
if (x != '4') console.log("x is not the expected value");

if ('0' == 0) console.log("0 == '0'");
if ('' == 0) console.log("0 == ''");
if (false == '0') console.log("false == '0'");
if (undefined == null) console.log("undefined == null");

if ('0' === 0) console.log("0 === '0'");
if ('' === 0) console.log("0 === ''");
if (false === '0') console.log("false === '0'");
if (undefined === null) console.log("undefined === null");

let v = typeof "some string" // v = "string"
console.log(v);
let v2 = [1, 2, 3];
let v3 = v2 instanceof Array; // v3 = true
console.log(v3);

let a = 4, b = 5;
let v4 = a > b ? "a > b" : "a <= b";
console.log(v4);


let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result); // Output: "Hello World"  

console.log("apple" == "banana"); // false
console.log("apple" != "banana"); // true
console.log("5" === "5"); // true 
console.log("5" !== "5"); // false
console.log("apple" > "banana"); // false  
console.log("apple" < "banana"); // true  
console.log("apple" >= "banana"); // false
console.log("apple" <= "banana"); // true 

// return the first n numbers in the Fibonacci series as an array
function F(n) {
  var f = [0, 1];
  for (var i = 2; i < n; i++) f[i] = f[i - 1] + f[i - 2];
  return f;
}
console.log(F(10));

var sDay = "Wednesday"
switch (sDay) {
  case "Sunday": iDay = 0; break;
  case "Monday": iDay = 1; break;
  case "Tuesday": iDay = 2; break;
  case "Wednesday": iDay = 3; break;
  case "Thursday": iDay = 4; break;
  case "Friday": iDay = 5; break;
  case "Saturday": iDay = 6; break;
  case "Unknown": // FALLS THROUGH
  default: iDay = -1;
}

var done = false;
while (!done) {
  // do something
  done = true;
}

// var j = 1;
// do {
//   console.log(j);
//   j++;
// } while (j <= 20);

let array1 = [15, 32, 13, 49, -5];
let sum = 0;
for (let i in array1) {
  sum += array1[i];
}
console.log("sum = " + sum); // sum = 104

let car = { make: "Ford", model: "Escort", mileage: 55000, year: 2010 };
for (let x in car) {
  console.log(x + " = " + car[x]);
}
// Output:
// make = Ford
// model = Escort
// mileage = 55000
// year = 2010


let array2 = [15, 32, 13, 49, -5];
for (let x of array2) {
  console.log(x);
}
// Output: 15 32 13 49 -5 (one per line)

function reverse(str) {
  let reversed = "";
  for (ch of str) {
    reversed = ch + reversed;
  }
  return reversed;
}



function clickme(e) {
  var target = document.getElementById("script-target");
  // set the target element's innerHTML to the event type
  target.innerHTML = e.type;
}

// register a click event handler for the button
var button = document.getElementById("clickme");
button.addEventListener("click", clickme);

let h2s = document.querySelectorAll("h2");
for(let h2 of h2s) {
  h2.style.color = "red";
  // h2.innerText = "Hey! I'm an H2!";
  h2.textContent = "Hey! I'm an H2!";
  // replace the clas of an element
  h2.className = "myclass";
  // add a css class to the element
  h2.classList.add("myclass");
  // remove a css class from the element
  h2.classList.remove("myclass");
}

// let anchor = document.querySelector("a");
// anchor.href = "http://www.google.com";

const node = document.createElement("h2");
const textnode = document.createTextNode("Content of new h2 element");
node.appendChild(textnode);
let target = document.getElementById("script-target")
target.appendChild(node);

// all h2 elements with class "myclass"
let elems = document.querySelectorAll("h2.myclass");
// the first button with a type of "reset"
let reset = document.querySelector("button[type=reset]");
// any h2 element inside a section element with class "myclass"
let elem = document.querySelector("section.myclass > h2");
// all h1, h2 and h3 elements
let headers = document.querySelectorAll("h1,h2,h3");

// let h2 = document.querySelector("h2");
// h2.style.color = "red";
// h2.innerText = "Hey! I'm an H2!";

let h1s = document.getElementsByTagName("h1");
if (h1s.length > 0) {
  h1s[0].style.color = "blue";
  h1s[0].innerText = "Hey! I'm an H1!";
}




let str = "Hello, World!";
reversedString = reverse(str);
console.log(reversedString); // Output: "!dlroW ,olleH"

console.log(reverse("Hello, World!")); // Output: "!dlroW ,olleH"

// while(true) {
//   // do something
//   if(finished) break;
// }

let n, sum1 = 0, nums = [15, 32, 13, 49, -5];
for (n of nums) sum1 += n;
console.log("sum1 = " + sum1); // sum = 104



// var done = false;
//  {
//   // do something
//   // lot’s more code
//   // update the value of done
//   if(finished) done = true;
// } while (!done);


// if(v2 > 10) doSomething();

// if(v2 > 10) {
//     doSomething();
// }
// else if(v2 === 10) {
//     doSomeSpecialThing();
//   }
// else {
//   doSomethingElse();
// }


// if (Amount > Price) {
//   createCreditNote();
// }
// createReceipt();
