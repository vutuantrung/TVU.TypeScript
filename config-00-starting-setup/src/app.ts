const userName = 'Trun';

console.log(userName);

// using ! to check if existe the button
const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', () => {
    console.log('Clicked!');
  });
}

const testArr: string[] = [];
testArr.push('hello', 'world');

const add_ver1 = (a: number, b: number = 1) => {
  return a + b;
};

const add_ver2 = (a: number, b: number) => a + b;

const add_ver3 = (param_string: string, ...numbers: number[]) => {
  console.log(param_string);
  return numbers.reduce((acc, cur) => (acc += cur));
};

const result_add_ver3 = add_ver3('here', 15, 3, 5, 98);
console.log(result_add_ver3);

const printOutput_ver1 = (output: string | number) => console.log(output);

const printOutput_ver2: (a: string | number) => void = (
  output: string | number
) => console.log(output);

const person = {
  name: 'trung',
  age: 28,
};

const { name: testUserName, age: number } = person;
