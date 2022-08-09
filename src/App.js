import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
} from './store/reducers/counterSlice';
import Greetings from './Greetings';
import AddAmount from './AddAmount';
import UsersList from './UsersList';

function App() {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleCounter = (op) => {
    if (op === '+') {
      dispatch(increment());
    } else if (op === '-') {
      dispatch(decrement());
    }
  };

  const determineContent = (intention) => {
    switch (intention) {
      case 'greetings':
        return <h1>Hello everyone</h1>;
      case 'introductions':
        return <h1>My name is Arrizal</h1>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <h1>counter</h1>
      <h1>{state.counter.value}</h1>
      <button onClick={() => handleCounter('+')}>+</button>
      <button onClick={() => handleCounter('-')}>-</button>
      <br></br>
      {determineContent('greetings')}
      {determineContent('introductions')}
      <AddAmount /> <br />
      <Greetings />
      <UsersList />
    </div>
  );
}

export default App;
