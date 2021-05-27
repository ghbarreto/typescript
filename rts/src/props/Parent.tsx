import { Child2 } from './Child';

const Parent = () => {
  return (
    <Child2 color="red" onClick={() => console.log('clicked')}>
      dasdapsdk
    </Child2>
  );
};

export default Parent;
