let userInput: unknown;
let userName: string;

userInput = 'Trung';

// This doesn't work: userName = userInput;
// we need to add it into a condition
if (typeof userInput === 'string') {
  userName = userInput;
}

console.log(userName);

// type "any" allows every types, every type is valid
// but type "unknown" we need to check if variable's type is valid or not

// this function never return something
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError('Error occured', 500);
console.log(result);
