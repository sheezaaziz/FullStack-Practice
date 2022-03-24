import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// contexts
import { useAuth } from '../../contexts/UserAuthenticationContext';

export default function SignIn() {
  const { signin, error } = useAuth();
  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignInSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    if (await signin(email, password)) {
      setLoading(false);
      history.push('/profile');
    }
  }

  return (
    <div>
      <h1>sign in</h1>
      { loading && <p>signing in...</p> }
      { error.length > 0 && <p>{error}</p> }
      <p>or, <Link to='/signup'>sign up</Link></p>
      <form onSubmit={handleSignInSubmit}>
        <input type='text' placeholder='email' required onChange={e => setEmail(e.target.value)}/>
        <br/>
        <input type='password' placeholder='password' required onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button>sign in</button>
      </form>
    </div>
  )
}
