function add(n1: number, n2: number): number {
  return n1 + n2;
}

function concatNames(name1: string, name2: string): string {
  return name1.toString() + name2.toString();
}

function printResult(number: number): void {
  console.log('Result: ' + number);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineValues: Function;
combineValues = add;
console.log(combineValues(8, 25.2));

let concatStrings: (a: string, b: string) => string;
concatStrings = concatNames;
console.log(concatStrings('VU', 'Trung'));

addAndHandle(10, 320, printResult);
