// regular types (number, string, boolean)
const adding = (n1: number, n2: number, show: boolean, phrase: string) => {
  if (show) {
    return `${phrase} ${n1 + n2 + 'true'}`;
  }
  return n1 + n2;
};

const printResult = true;
const phrase = 'this is true;';

const results = adding(50, 2.8, printResult, phrase);

console.log(results);
