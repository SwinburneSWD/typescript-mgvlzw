// Import stylesheets
import './style.css';

// ---- var sucks, let's use let
let numText: string = "1";

let numInt: number = 1;


let ans = numInt * 2;

// ---- if ----
if(ans < 10) {
  console.log("ans is less than 10.", ans);
} else if (ans < 20) {
  console.log("ans is less than 20.", ans);
} else {
  console.log("....");
}

// ---- for -----
for(let i=0; i<10; i++) {
  //console.log(i);
}

// ---- Array ----
let numArray: number[] = [];
numArray.push(10);
numArray.push(90);
numArray.push(60);
numArray.push(40);
numArray.push(20);

//console.log("NumArray is: ", numArray);

// ---- foreach ----

// --- "of" gets the value in the array
for(let num of numArray) {
  //console.log(num);
}

// --- "in" gets the index in the array
for(let num in numArray) {
  //console.log(num);
}

// --- Typescript creates JS ---
let word: string = "10";
let number: number = 10;

if(word == number) {
  //console.log("This shouldn't happen");
}



// ---- Class are custom Types ----
class Person {
  firstName: string;
  secondName: string;

  constructor(firstName: string, secondName: string) {
    this.firstName = firstName;
    this.secondName = secondName;

    this.greeting();
  }

  // methods
  greeting(): void {
    // string interpolation.  ie.  variables inside a string without a heap of + sign tomfoolery
    // *NOTE: They're no talking marks, they're ticks.  Above tab key to the left of 1 key.  
    // Often referred to as the key used for cheats in DOOM engine games
    //console.log(`Hi my name is ${this.firstName} ${this.secondName}`);
  }

}

// initialise an object
let p1: Person = new Person("John", "Smith");

// ---- Interfaces (contracts) -----
// ---- can't make objects from an interface -----
interface Animal {
  name: string;
  species: string;
  
  makeSound(): string;
}

// classes implement interfaces and must fulfil the contract
class Lion implements Animal {
  // these two fulfil the contract from animal
  name: string;
  species: string;

  // add whatever I like
  pride: string
  
  constructor(name: string, species: string, pride: string) {
    this.name = name;
    this.species = species;
    this.pride = pride;
  }

  // fulfilling contracts also require defining the methods
  makeSound(): string {
    return "ROAR!";
  }

  hunt(location: string): void {
    //console.log(`Hunting at ${location}`);
  }
}

// --- accessing html ---
const appDiv: HTMLElement = document.getElementById("app");

appDiv.innerHTML = 'Hello!';

let selected: string;

const dropdown: HTMLSelectElement = <HTMLSelectElement>document.getElementById('dropdown');

selected = dropdown.value;
//console.log(selected)

// --- events ---
function getValueButtonHandler(): void {
  const resultsDiv: HTMLElement = document.getElementById('result');
  resultsDiv.innerHTML = dropdown.value;
}

const button: HTMLButtonElement = <HTMLButtonElement>document.getElementById('getSelected-btn');

button.addEventListener('click', () => getValueButtonHandler());