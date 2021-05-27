interface ChildProps {
  color: string;
  onClick: () => void;
}
// two ways to display a react component with ts
export const Child = ({ color, onClick }: ChildProps) => {
  return <div>Child {color}</div>;
};

export const Child2: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      Color {color} {children}
    </div>
  );
};
