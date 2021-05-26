interface ChildProps {
  color: string;
}
// two ways to display a react component with ts 
export const Child = ({ color }: ChildProps) => {
  return <div>Child {color}</div>;
};

export const Child2: React.FC<ChildProps> = ({ color }) => {
  return <div>Color {color}</div>;
};
