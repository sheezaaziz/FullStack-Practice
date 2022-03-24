import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// contexts
import { useAuth } from '../../contexts/UserAuthenticationContext';
import { useUsersInfo } from '../../contexts/UsersInfoContext';
// styles
import './Lobby.module.css';

export default function Lobby() {
  const { signout } = useAuth();
  const { usersInfo } = useUsersInfo();
  const history = useHistory();

  const handleSignOutSubmit = async (evt) => {
    await signout();
    history.push('/signin');
  }

  const tableBody = (
    usersInfo.map((row) => (
      <tr key={row.id}>
        <td><img src={row.imgURL || 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png'} alt={'display pic'}/></td>
        <td>{row.username}</td>
        <td>{row.colour}</td>
      </tr>
    ))
  )

  return (
    <div>
      <h1>lobby</h1>
      <p>back to <Link to='/profile'>profile</Link></p>
      <button onClick={handleSignOutSubmit}>sign out</button>
        <table>
          <thead>
            <tr>
              <th>dp</th>
              <th>username</th>
              <th>colour</th>
            </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </table>
    </div>
  )
}
