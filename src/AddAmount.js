import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { incrementByAmount } from './store/reducers/counterSlice';

const AddAmount = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setValue(Number(e.target.value))}
        value={value}
      ></input>
      <button
        onClick={() => {
          dispatch(incrementByAmount(value));
          setValue(0);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddAmount;
