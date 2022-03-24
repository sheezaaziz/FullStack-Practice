import React, { useState, useEffect } from "react";
import { db, auth, functions } from "./firebase";

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [bio, setBio] = useState('');
  const [guides, setGuides] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  const [adminSignedIn, setAdminSignedIn] = useState(false);
  const [guideTitle, setGuideTitle] = useState('');
  const [guideContent, setGuideContent] = useState('');
  const [err, setErr] = useState('');

  const handleSignUpSubmit = (evt) => {
    evt.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log('id:', cred.user.uid);
        return db.collection('users').doc(cred.user.uid).set({
          bio: bio,
        })
      })
      .catch((err) => {
        console.log(err);
        setErr(err.message);
      })
  }

  const handleSignOutSubmit = (evt) => {
    evt.preventDefault();
    auth.signOut()
      .then(() => {
        // console.log('user signed out!');
      })
  }

  const handleSignInSubmit = (evt) => {
    evt.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((cred) => {
        // console.log('successfully signed in!',cred.user);
      })
      .catch((err) => {
        console.log(err);
        setErr(err.message);
      })
  }

  const setUpGuides = () => {
    db.collection('guides').orderBy('title').onSnapshot(snapshot => {
      let items = [];
      snapshot.forEach(doc => {
        let item = {
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
        }
        items.push(item);
      })
      setGuides(items);
    })
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user logged in', user.email);
        user.getIdTokenResult()
          .then((idTokenResult) => {
            user.admin = idTokenResult.claims.admin;
            setAdminSignedIn(user.admin);
          })
        setSignedIn(true);
        setUpGuides();
        setEmail(user.email);
        db.collection('users').doc(user.uid).get()
          .then((doc) => {
            setBio(doc.data().bio);
          })
      } else {
        console.log('user logged out');
        setSignedIn(false);
        setAdminSignedIn(false);
        setEmail('');
        setGuides([]);
      }
    }, (err) => {
      console.log(err);
      // setErr(err);
    })
  }, [auth])

  let guidesList = guides.map((guide, id) => {
    return (
      <li key={guide.id}>
        <div class="collapsible-header grey lighten-4">{ guide.title }</div>
        <div class="collapsible-body white">{ guide.content }</div>
      </li>
    )
  })

  const handleCreateGuideSubmit = (evt) => {
    evt.preventDefault();
    db.collection('guides').add({
      title: guideTitle,
      content: guideContent,
    })
    console.log('creating guide!', guideTitle, guideContent);
  }

  const handleMakeAdminSubmit = (evt) => {
    evt.preventDefault();
    const addAdminRole = functions.httpsCallable('addAdminRole');
    addAdminRole({ email: adminEmail })
      .then((res) => {
        console.log(res);
      })
  }

  let navUI;
  if (adminSignedIn) {
    navUI = (
      <div>
        <li class="logged-in">
          <a href="#" class="grey-text modal-trigger" data-target="modal-account">Account</a>
        </li>
        <li class="logged-in">
          <a href="#" class="grey-text" id="logout" onClick={handleSignOutSubmit}>Logout</a>
        </li>
        <li class="admin">
          <a href="#" class="grey-text modal-trigger" data-target="modal-create">Create Guide</a>
        </li>
      </div>
    )} else if (signedIn) {
      navUI = (
        <div>
          <li class="logged-in">
            <a href="#" class="grey-text modal-trigger" data-target="modal-account">Account</a>
          </li>
          <li class="logged-in">
            <a href="#" class="grey-text" id="logout" onClick={handleSignOutSubmit}>Logout</a>
          </li>
        </div>
      )
    } else {
      navUI = (
        <div>
          <li class="logged-out">
            <a href="#" class="grey-text modal-trigger" data-target="modal-login">Login</a>
          </li>
          <li class="logged-out">
            <a href="#" class="grey-text modal-trigger" data-target="modal-signup">Sign up</a>
          </li>
        </div>
      )
    }

  return (
    <div>
      <h1>Firebase Auth!</h1>
       <nav class="z-depth-0 grey lighten-4">
         <div class="nav-wrapper container">
           <ul id="nav-mobile" class="right hide-on-med-and-down">
             { navUI }
           </ul>
         </div>
       </nav>

       {
         adminSignedIn
         ?
         <form class="center-align admin-actions" onSubmit={handleMakeAdminSubmit}>
           <input type="email" placeholder="email" id="admin-email" required onChange={e => setAdminEmail(e.target.value)}/>
           <button class="btn-small yellow darken-2 z-depth-0">make admin</button>
         </form>
         :
         <br/>
       }

        <div id="modal-signup" class="modal">
          <div class="modal-content">
            <h4>Sign up</h4><br />
            <form id="signup-form" onSubmit={handleSignUpSubmit}>
              <div class="input-field">
                <input type="email" id="signup-email" onChange={e => setEmail(e.target.value)} required />
                <label for="signup-email">Email address</label>
              </div>
              <div class="input-field">
                <input type="password" id="signup-password" required onChange={e => setPassword(e.target.value)} />
                <label for="signup-password">Choose password</label>
              </div>
              <div class="input-field">
                <input type="text" id="signup-bio" required onChange={e => setBio(e.target.value)}/>
                <label for="signup-bio">One line bio</label>
              </div>
              <button class="btn yellow darken-2 z-depth-0">Sign up</button>
            </form>
            <p class="error">{ err }</p>
          </div>
        </div>

        <div id="modal-login" class="modal">
          <div class="modal-content">
            <h4>Login</h4><br />
            <form id="login-form" onSubmit={handleSignInSubmit}>
              <div class="input-field">
                <input type="email" id="login-email" required onChange={e => setEmail(e.target.value)} />
                <label for="login-email">Email address</label>
              </div>
              <div class="input-field">
                <input type="password" id="login-password" required onChange={e => setPassword(e.target.value)}/>
                <label for="login-password">Your password</label>
              </div>
              <button class="btn yellow darken-2 z-depth-0">Login</button>
            </form>
            <p class="error">{ err }</p>
          </div>
        </div>

        <div id="modal-account" class="modal">
         <div class="modal-content center-align">
           <h4>Account details</h4><br />
           <div class="account-details">
             {
              signedIn
              ?
                <div>
                  <p>signed in as {email}</p>
                  <p>{bio}</p>
                  { adminSignedIn ? <p>admin</p> : <p>regular user</p>}
                </div>
              :
                <p>no</p>
              }
           </div>
         </div>
       </div>

       <div id="modal-create" class="modal">
        <div class="modal-content">
          <h4>Create Guide</h4><br />
          <form id="create-form" onSubmit={handleCreateGuideSubmit}>
            <div class="input-field">
              <input type="text" id="title" required onChange={e => setGuideTitle(e.target.value)}/>
              <label for="title">Guide Title</label>
            </div>
            <div class="input-field">
              <textarea id="content" class="materialize-textarea" required onChange={e => setGuideContent(e.target.value)}></textarea>
              <label for="content">Guide Content</label>
            </div>
            <button class="btn yellow darken-2 z-depth-0">Create</button>
          </form>
        </div>
      </div>

      <div class="container">
        <ul class="collapsible z-depth-0 guides">
          { guidesList }
        </ul>
      </div>
    </div>
  );
}
