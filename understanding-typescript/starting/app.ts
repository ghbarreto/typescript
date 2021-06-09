let userInput: unknown;
// unknown !== to any
let userName: string;

if (typeof userInput === 'string') {
  userName = userInput;
}

// never type
const generateError = (message: string, code: number): never => {
  throw { message: message, error: code };
};

generateError('An error occurred!', 500);
