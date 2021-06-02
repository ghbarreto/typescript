import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';
import RefUserSearch from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <h2>1st Example</h2>
      <GuestList />
      <hr />
      <h2>2st Example</h2>
      <UserSearch />
      <hr />
      <h2>3rd Example</h2>
      <EventComponent />
      <hr />
      <h2>Ref Example</h2>
      <RefUserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
