import { useSelector } from 'react-redux';

const Greetings = () => {
  const state = useSelector((state) => state);

  const createElements = (n) => {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(i);
    }
    return result;
  };

  return (
    <div>
      {state.counter.value
        ? createElements(state.counter.value).map(
            (el, i) => {
              return <p>Hello Hacktiv8</p>;
            }
          )
        : null}
    </div>
  );
};

export default Greetings;
