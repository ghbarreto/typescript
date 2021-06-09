// union types
const add = (n1: number | string, n2: number | string) => {
  let res;
  typeof n1 === 'number' && typeof n2 === 'number'
    ? (res = n1 + n2)
    : (res = n1.toString() + n2.toString());

  return res;
};

const combine = add(32, 26);
console.log(combine);

const combineStrings = add('Gabriel', 'Thais');
console.log(combineStrings);

// type aliases
type AddNumberOrString = number | string;
