import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// contexts
import { useAuth } from '../../contexts/UserAuthenticationContext';
import { useUsersInfo } from '../../contexts/UsersInfoContext';
// styles
import styles from './Profile.module.css';

export default function Profile() {
  const { currentUser, signout } = useAuth();
  const { usersColours, colour, username, initializeProfile, updateColour, imgURL, uploadImg } = useUsersInfo();
  const history = useHistory();
  const [newColour, setNewColour] = useState('');
  const [image, setImage] = useState(null);

  const handleSignOutSubmit = async (evt) => {
    await signout();
    history.push('/signin');
  }

  const handleUpdateColour = (evt) => {
    setNewColour(evt.target.value);
  }

  const handleSubmitUpdateColour = (evt) => {
    evt.preventDefault();
    updateColour(newColour, currentUser.uid);
  }

  const handleImgChange = (evt) => {
    if (evt.target.files[0]) {
      setImage(evt.target.files[0]);
    }
  }

  const handleUploadImg = () => {
    uploadImg(image, currentUser.uid);
  }

  useEffect(() => {
    if (currentUser) {
      initializeProfile(currentUser.uid);
    }
  })

  let backgroundColour;
  if (colour === 'red') backgroundColour = styles.red;
  if (colour === 'blue') backgroundColour = styles.blue;
  if (colour === 'green') backgroundColour = styles.green;
  if (colour === 'orange') backgroundColour = styles.orange;

  return (
    <div>
      <h1>profile</h1>
        <h1>welcome, { username }</h1>
        <p>current dp:</p>
        <img src={imgURL || 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png'} alt={'display pic'}/>
        <br/>
        <p>upload new dp:</p>
        <input type="file" onChange={handleImgChange}/>
        <button onClick={handleUploadImg}>upload img</button>
        <p className={backgroundColour}>current colour: { colour }</p>
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
      <button onClick={handleSignOutSubmit}>sign out</button>
      <p>view <Link to='/lobby'>lobby</Link></p>
    </div>
  )
}
