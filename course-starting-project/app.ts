function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const num1 = 4;
const num2 = 21.2;
const printResult = true;
const phrase = 'Result is: ';

const result = add(num1, num2, printResult, phrase);
