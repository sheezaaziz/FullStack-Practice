import React, { useState, useEffect } from 'react';
import { db, auth } from '../../firebase';

export default function UserAuthentication() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpSubmit = (evt) => {
    evt.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log('id:', cred.user.uid);
        return db.collection('users').doc(cred.user.uid).set({
          username: username,
          colour: '',
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleSignInSubmit = (evt) => {
    evt.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log('successfully signed in!',cred.user);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleSignOutSubmit = (evt) => {
    evt.preventDefault();
    auth.signOut()
      .then(() => {
        console.log('user signed out!');
      })
  }

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       db.collection('users').doc(user.uid).get()
  //         .then((doc) => {
  //           setUsername(doc.data().username);
  //         })
  //     } else {
  //       console.log('no user is signed in');
  //     }
  //   }, (err) => {
  //     console.log(err);
  //   })
  //   console.log('user signed in', username);
  // }, [auth])

  return (
    <div>
      <button onClick={handleSignOutSubmit}>sign out</button>
      <h1>sign up</h1>
      <form onSubmit={handleSignUpSubmit}>
        <input type='text' placeholder='email' required onChange={e => setEmail(e.target.value)}/>
        <br/>
        <input type='text' placeholder='username' required onChange={e => setUsername(e.target.value)}/>
        <br/>
        <input type='password' placeholder='password' required onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button>sign up</button>
      </form>
      <h1>sign in</h1>
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
