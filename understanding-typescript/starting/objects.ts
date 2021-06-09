const person: { name: string; age: number; country: string } = {
  name: 'Gabriel',
  age: 26,
  country: 'Brazil',
};

const personArray = {
  name: 'Gabriel',
  age: 26,
  country: ['Brazil', 'Portugal'],
};

let programming: string[];
programming = ['Javascript'];

// any allows anything
let whatever: any[];
whatever = ['a', 5, true];

console.log(person);
