//- open webpack.config.js then change the entry point from
//entry: "./src/playground/redux-101.js", to
//entry: "./src/playground/destructuring.js",
//- restart dev-server
//C:\ComputerD\react-course-projects032021\xpensify-app3>yarn run dev-server

// console.log("destructuring");
const person = {
  name: "Ola",
  age: 20,
  location: {
    city: "Lagos Island",
    temp: 32,
  },
};
//We can print the object property like this
// console.log(`${person.name} is ${person.age}.`);
// console.log(`It's ${person.location.temp} in ${person.location.city}.`);

//Alternatively, we can print the object property like this
// const name = person.name;
// const age = person.age;
// console.log(`${name} is ${age}.`);

// const temp = person.location.temp;
// const city = person.location.city;
// console.log(`It's ${temp} in ${city}.`);

//Object Destructuring means converting object property into variable for the purpose of easy access.
// const { name, age } = person;
// console.log(`${name} is ${age}.`);

// const { temp, city } = person.location;
// console.log(`It's ${temp} in ${city}.`);

//changing the local destructuring variable
// const { temp: temperature, city } = person.location;
// console.log(`It's ${temperature} in ${city}.`);

//creating a default value for the local destructuring variable
// const { name="Anonymous", age } = person;
// console.log(`${name} is ${age}.`);

//combining default value with changing of local destructuring variable
// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);

//challenge area
const book = {
  title: "Ego is the Enemy.",
  author: "Ryan Holiday",
  publisher: {
    // name: "Penguin",
  },
};
//-Print out console.log(publisherName) using object destructuring
//-Add default value on the local destructured variable called Self-Published if their is no publisher name
const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

//ES6 Array Destructuring
//Array Destructuring means converting array item or element into variable for the purpose of easy access.
// const address = [
//   "1299 Okepopo Street",
//   "Lagos Island",
//   "Lagos State",
//   "Nigeria",
//   "123",
// ];
// console.log(`You are in ${address[1]}, ${address[2]}.`);

// const city = address[1];
// const state = address[2];
// console.log(`You are in ${city}, ${state}.`);

//using Array destructuring
// const [street, city, state, , zip] = address; //it is matching the local variable with the position
// console.log(
//   `You are in ${street}, ${city}, ${state}, with zip code of ${zip}.`
// );

//set default value for Array destructuring
const address = ["1299 Okepopo Street", "Lagos Island"];
const [street, city, state = "Oyo State"] = address;
console.log(`You are in ${street}, ${city}, ${state}`);

//challenge area
const item = ["coffee (hot)", "N100.00", "N200.00", "N300.00"];
//print out console.log(`A medium coffee (hot) costs N200.00`)
//using the first and third item in the array to print out the above
const [itemName, , mediumPrice, highPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
console.log(`A high ${itemName} costs ${highPrice}`);

//Refactoring and Organizing
//- open webpack.config.js to switch the entry point from
//entry: "./src/playground/destructuring.js", to
//entry: "./src/playground/redux-101.js",
//- restart the dev-server
