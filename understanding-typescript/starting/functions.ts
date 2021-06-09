const add = (n1: number, n2: number) => {
  return n1 + n2;
};

// void type
const printing = (num: number): void => {
  console.log('result: ' + num);
  // does not return anything
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

printing(add(2, 10));

// function types
let functionTypes: (a: number, b: number) => number;

functionTypes = add;
