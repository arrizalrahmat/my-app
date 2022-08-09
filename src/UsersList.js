import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/reducers/userSlice';

const UsersList = () => {
  const {
    users: { users, errorMessage },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const doFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div>
      <button onClick={doFetchUsers}>
        Fetch new users
      </button>
      <p>{errorMessage}</p>
      <table border={'1'}>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el.name.first}</td>
                <td>{el.name.last}</td>
                <td>{el.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
