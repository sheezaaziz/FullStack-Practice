import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// contexts
import { useAuth } from '../../contexts/UserAuthenticationContext';

export default function SignUp() {
  const { signup, error } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUpSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    if (await signup(email, password, username)) {
      setLoading(false);
      history.push('/profile');
    }
  }

  return (
    <div>
      <h1>sign up</h1>
      { loading && <p>creating account...</p> }
      { error.length > 0 && <p>{error}</p> }
      <p>or, <Link to='/signin'>sign in</Link></p>
      <form onSubmit={handleSignUpSubmit}>
        <input type='text' placeholder='email' required onChange={e => setEmail(e.target.value)}/>
        <br/>
        <input type='text' placeholder='username' required onChange={e => setUsername(e.target.value)}/>
        <br/>
        <input type='password' placeholder='password' required onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button disabled={loading}>sign up</button>
      </form>
    </div>
  )
}
