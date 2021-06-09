interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Gabriel',
  age: 26,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet('Hi there!');

// greetable

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person2 implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
