enum Moving {
  Run,
  Walk,
}

type AddFn = (a: number, b: number) => number;
// Define interface as a Type
interface IAddFn {
  (a: number, b: number): number;
}

interface Named {
  readonly name: string;
  outputName?: string; // this ? mark says that this property is optional
}

interface Speak extends Named {
  greeting(phrase: string): void;
}

interface Move {
  movingType?: Moving;
  moving(): void;
}

class Person implements Speak, Move {
  name!: string;
  move?: Moving;

  //   constructor(name: string, movingType: Moving = Moving.Walk) {
  constructor(name: string, movingType?: Moving) {
    this.name = name;
    this.move = movingType ? movingType : Moving.Walk;
  }

  greeting(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }

  moving(): void {
    console.log(this.move);
  }
}

const user1 = new Person('Trung', Moving.Walk);
const user2 = new Person('John');

user1.greeting('Hello');
user1.moving();
