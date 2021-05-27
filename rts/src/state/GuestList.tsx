import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  const show = () => {
    return guests.map(e => {
      return <li>{e}</li>;
    });
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>{show()}</ul>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
