let names: Array<string> = [];
names = ['habdsfg', 'akndfg'];
console.log(names);

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve(10);
    } catch (err) {
      reject(err);
    }
  }, 2000);
});

promise.then(data => {
  console.log(data);
});

// U extends <T> makes the contraint U has to be type T
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: 'Trung', hobbies: ['Sports'] },
  { age: 30 }
);
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  // T extends interface Lengthy so we have property length inside,
  // but T itselft has to have the length property (ex: number has not length prop)
  if (element.length > 0) {
    descriptionText = 'Has element';
  }

  return [element, descriptionText];
}

// console.log(countAndDescribe(2)); // Doesn't work
console.log(countAndDescribe('Hello'));
console.log(countAndDescribe(['Hello', 'asd']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value ' + obj[key];
}

console.log(
  extractAndConvert({ aTestingKeyInObject: 'testVal' }, 'aTestingKeyInObject')
);

// Class generics
class DataStorage<T extends boolean | string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Trung');
textStorage.addItem('Manu');
textStorage.removeItem('Manu');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(65);
numberStorage.addItem(100);
numberStorage.addItem(4);
numberStorage.removeItem(100);
console.log(numberStorage.getItems());

// Shoule be careful when working with object type
// const objStorage = new DataStorage<object>();
// const testingObj = { name: 'Manu' };
// objStorage.addItem(testingObj);
// objStorage.addItem({ name: 'Trung' });
// objStorage.removeItem(testingObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  date: Date;
}

// Partial class generic
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.date = date;

  return courseGoal as CourseGoal;
}

// Readonly class generic
const namesReadonly: Readonly<string[]> = ['Max', 'Anna'];
