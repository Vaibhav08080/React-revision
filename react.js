console.log("Hi this is the react revision");

let a = false;
let b = true;

console.log(a && b);

// it will first check only the first value if its true
// then only it will check the other one is true or not

function getName(name) {
  return name;
}

console.log(a && getName("meow"));

//the first value is false thereofre it is also returning th e
// false

let c = false;
let d = true;
//in scenario of or it will check the second value too

// template literals

let name1 = "vaibhav";
let name2 = "john";
console.log(name1 + " " + name2, `${name1} ${name2}`);

// ternary operator

let showRecipeOne = false;
function getRecipieName(re) {
  return re;
}

function getRecipieName2(re) {
  return re;
}

if (showRecipeOne) {
  console.log(getRecipieName("meow"));
} else {
  console.log(getRecipieName2("ladle ghop ghop"));
}

// condition ? statement 1 : statement 2

const id = 1;
const productName = "Apple watch";
const rating = 5;

const product = {
  id,
  productName,
  rating,
};

const product2 = {
  description: "meowww",
  id,
  productName,
  rating,
};
//destructuring the array and object

const { description } = product2;
console.log(description);

const array = [1, 2, 3];

console.log(...array)

const [arrayfirstname, arraysecondname] = array;

console.log(arrayfirstname, arraysecondname);









function multiplicationoftwonumbers(num1=1,num2=4){
    return num1*num2
}

console.log(multiplicationoftwonumbers(1,2))


