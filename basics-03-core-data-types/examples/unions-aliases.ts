// alias type
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConvserion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = `${input1.toString()} ${input2.toString()}`;
  }

  if (resultConvserion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }

  return result;
}

const combinedAges = combine(10, 20.3, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('10', '20.3', 'as-number');
console.log(combinedStringAges);

const combineNames = combine('Tuan', 'Trung', 'as-text');
console.log(combineNames);

// using alias type for object
type User = { name: string; age: number };
const user1: User = { name: 'ToRung', age: 28 };

function greet(user: User) {
  console.log('Hi, i am ' + user.name);
}

greet(user1);
