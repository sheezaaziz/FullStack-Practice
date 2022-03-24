import React, { useState, useEffect } from 'react';
import { db, auth } from '../../firebase';

export default function UserZone() {
  const [signedIn, setSignedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [colour, setColour] = useState('');
  const [newColour, setNewColour] = useState('');
  const [userUid, setUserUid] = useState('');
  const [usersColours, setUsersColours] = useState([]);

  const handleUpdateColour = (evt) => {
    setNewColour(evt.target.value);
  }

  const handleSubmitUpdateColour = (evt) => {
    evt.preventDefault();
    db.collection('users').doc(userUid).update({
      colour: newColour,
    })
    setColour(newColour);
  }

  const getUserColours = () => {
    db.collection('users').onSnapshot((snapshot) => {
      let selectedColours = [];
      snapshot.forEach(doc => {
        let selectedColour = doc.data().colour;
        selectedColours.push(selectedColour);
      })
      setUsersColours(selectedColours);
    })
  }

  const handleUserSignIn = (id) => {
    setSignedIn(true);
    db.collection('users').doc(id).get()
      .then((doc) => {
        setUsername(doc.data().username);
        setColour(doc.data().colour);
        setUserUid(id);
      })
  }

  const handleUserSignOut = () => {
    setSignedIn(false);
    setUsername('');
    setColour('');
    setUserUid('');
    console.log('no user is signed in');
  }

  useEffect(() => {
    getUserColours();
    auth.onAuthStateChanged((user) => {
      if (user) {
        handleUserSignIn(user.uid);
      } else {
        handleUserSignOut();
      }
    }, (err) => {
      console.log(err);
    })
    console.log('user signed in', username, colour);
  }, [])

  return (
    <div>
      {
        signedIn
        ?
          <div>
            <h1>welcome { username }!</h1>
            <p>current colour: { colour }</p>
            <form onSubmit={handleSubmitUpdateColour}>
              <select id='colours' onChange={handleUpdateColour}>
                <option value='' disabled selected hidden>choose a colour</option>
                <option
                  value='red'
                  disabled={usersColours.includes('red')}
                >
                  red
                </option>
                <option
                  value='blue'
                  disabled={usersColours.includes('blue')}
                >
                  blue
                </option>
                <option
                  value='green'
                  disabled={usersColours.includes('green')}
                >
                  green
                </option>
                <option
                  value='orange'
                  disabled={usersColours.includes('orange')}
                >
                  orange
                </option>
              </select>
              <br/><br/>
              <button>update colour</button>
            </form>
          </div>
        :
        null
      }
    </div>
  )
}
