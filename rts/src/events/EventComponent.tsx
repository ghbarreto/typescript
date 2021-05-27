const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEventHandler<HTMLInputElement>) => {
    console.log(event);
  };

  const onDrargStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('Im being dragged');
  };
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me!
      </div>
    </div>
  );
};

export default EventComponent;
