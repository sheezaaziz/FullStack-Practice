import React, { useState, useEffect } from 'react';

import { firebase, functions, auth, db } from './firebase';

export default function App() {
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [signModalOpen, setSignModalOpen] = useState(true);
  const [signInModalOpen, setSignInModalOpen] = useState(true);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedError, setSignedError] = useState('');
  const [requestText, setRequestText] = useState('');
  const [requests, setRequests] = useState([]);
  const [upvoteError, setUpvoteError] = useState('');

  const openRequestModal = (evt) => {
    evt.preventDefault();
    setRequestModalOpen(true);
  }

  const closeRequestModal = (evt) => {
    evt.preventDefault();
    setRequestModalOpen(false);
  }

  const openSignInModal = (evt) => {
    evt.preventDefault();
    setSignInModalOpen(true);
    setSignUpModalOpen(false);
    setSignedError('');
  }

  const openSignUpModal = (evt) => {
    evt.preventDefault();
    setSignUpModalOpen(true);
    setSignInModalOpen(false);
    setSignedError('');
  }

  const handleRegisterForm = (evt) => {
    evt.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log('signed up!', cred.user);
        setSignedError('');
      })
      .catch((err) => {
        console.log('ERROR!', err);
        setSignedError(err.message);
      })
  }

  const handleLoginForm = (evt) => {
    evt.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log('signed in!', cred.user);
        setSignedError('');
      })
      .catch((err) => {
        console.log('ERROR!', err);
        setSignedError(err.message);
      })
  }

  const handleSignOutSubmit = (evt) => {
    evt.preventDefault();
    auth.signOut()
      .then(() => {
        console.log('user signed out!');
      })
  }

  const createRequest = (evt) => {
    evt.preventDefault();
    const addRequest = firebase.functions().httpsCallable("addRequest");
    addRequest({
      text: requestText,
    })
      .then(() => {
        setRequestModalOpen(false);
        setSignedError('');
      })
      .catch((err) => {
        setSignedError(err.message);
      })
  }

  const setUpRequests = () => {
    db.collection('requests').orderBy('upvotes', 'desc').onSnapshot(snapshot => {
      let items = [];
      snapshot.forEach(doc => {
        let item = {
          id: doc.id,
          text: doc.data().text,
          upvotes: doc.data().upvotes,
        }
        items.push(item);
      })
      setRequests(items);
    })
  }

  const upvoteRequest = (id) => {
    const upvote = firebase.functions().httpsCallable('upvote');
    upvote({ id })
      .catch((err) => {
        setUpvoteError(err.message);
        setTimeout(() => {
          setUpvoteError('');
        }, 2000);
      })
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user logged in', user.email);
        setSignModalOpen(false);
        setUpRequests();
      } else {
        console.log('user logged out');
        setSignModalOpen(true);
        setUpRequests([]);
      }
    }, (err) => {
      console.log(err);
      // setErr(err);
    })
  }, [auth])

  let requestsList = requests.map((request, id) => {
    return (
      <li key={request.id}>
        <span class="text">{ request.text }</span>
        <div>
          <span class="votes">{ request.upvotes }</span>
          <i class="material-icons upvote" onClick={() => upvoteRequest(request.id)}>arrow_upward</i>
        </div>
      </li>
    )
  })

  return (
    <div>
      {
        upvoteError != ''
        ?
          <div class="notification active">{ upvoteError }</div>
        :
          null
      }
      {
        signModalOpen
        ?
        <div class="auth open">
          {
            signInModalOpen
            ?
            <div class="modal">
              <h2>Login</h2>
              <form class="login" onSubmit={handleLoginForm}>
                <input type="text" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <button>Login</button>
                <p class="error">{ signedError }</p>
              </form>
              <div>No account? <a class="switch" onClick={openSignUpModal}>Register instead</a></div>
            </div>
            :
            <div class="modal">
              <h2>Register</h2>
              <form class="register" onSubmit={handleRegisterForm}>
                <input type="text" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <button>Register</button>
                <p class="error">{ signedError }</p>
              </form>
              <div>Got an account? <a class="switch" onClick={openSignInModal}>Login instead</a></div>
            </div>
          }
        </div>
        :
        <span></span>
      }

      {
        requestModalOpen
        ?
        <div class="new-request">
          <div class="modal">
            <p class="modal-close" onClick={closeRequestModal}>X Close</p>
            <h2>Request a Tutorial</h2>
            <form onSubmit={createRequest}>
              <input type="text" name="request" placeholder="Request..." onChange={e => setRequestText(e.target.value)}/>
              <button>Submit Request</button>
              <p class="error">{ signedError }</p>
            </form>
          </div>
        </div>
        :
        <span></span>
      }

     <header>
       <nav>
         <a class="add-request" onClick={openRequestModal}>add request</a>
         <a class="sign-out" onClick={handleSignOutSubmit}>sign out</a>
       </nav>
     </header>

     <section class="content">
       <h1>Tutorial Requests</h1>
       <ul class="request-list">
         { requestsList }
       </ul>
     </section>
    </div>
  );
}
