let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

console.log(catName, quote)


function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
       let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  
  function printManyTimes(str) {
    "use strict";
  
     const SENTENCE = str + " is cool!";
    for ( let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    
  
  }
  printManyTimes("freeCodeCamp");


  const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;


}
editInPlace();
console.log(S);


function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS)
    
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();
  console.log(MATH_CONSTANTS)

 
 
 
  const magic = () =>
 {
  "use strict";
  return new Date();
};
console.log(new Date)



const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3)); 


  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  
  
  const {today, tomorrow} = HIGH_TEMPERATURES;

Co


  let a = 8, b = 6;


[a, b] = [b, a];


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  
   const [a, b, ...arr] = list;
 
  return arr;
}
const arr = removeFirstTwo(source);
console.log(source)

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  const half = ({ max, min }) => (max + min) / 2.0;

  console.log(stats)

  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
   
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

console.log(result)

const createPerson = (name, age, gender) => {
  "use strict";
  
  return {
    name, 
    age, 
    gender
  };
 
};
console.log(naame, age, gender)

const bicycle = {
  gear: 2,
  setGear (newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}


const carrot = new Vegetable('carrot');
console.log(carrot.name); 




class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}


const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
thermos.temperature = 26;
temp = thermos.temperature; 

console.log(Thermostat)

<html>
  <body>
    
<script type="module" src="index.js"></script>
    
  </body>
</html>

  function uppercaseString(string) {
    return string.toUpperCase();
  }
export { uppercaseString };
const lowercaseString = (string) => {
  return string.toLowerCase()
}
export { lowercaseString };



import {uppercaseString, lowercaseString} from "./string_functions.js"


uppercaseString("hello");
lowercaseString("WORLD!");

"use strict";
export default function subtract(x, y) {
  return x - y;
}

import subtract from "./math_functions.js";
subtract(7,4);

const makeServerRequest = new Promise((resolve, reject) => {
})

const makeServerRequest = new Promise((resolve, reject) => {
  
  let responseFromServer;
    
  if(responseFromServer) {
  resolve("We got the data");
  } else {  
   reject("Data not received");
  }
});
console.log(Promise)

const makeServerRequest = new Promise((resolve, reject) => {
  
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});

const makeServerRequest = new Promise((resolve, reject) => {
  
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error => {
  console.log(error);
});