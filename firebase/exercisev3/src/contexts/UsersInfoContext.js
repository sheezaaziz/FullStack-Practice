import React, { useContext, createContext, useState, useEffect } from 'react';
import { db, storage } from '../firebase';
import axios from 'axios';

const UsersInfoContext = createContext();

export function useUsersInfo() {
  return useContext(UsersInfoContext);
}

export function UsersInfoProvider({ children }) {
  const [username, setUsername] = useState('');
  const [colour, setColour] = useState('');
  const [usersColours, setUsersColours] = useState([]);
  const [usersInfo, setUsersInfo] = useState([]);
  const [imgURL, setImgURL] = useState('');

  const getUserColours = () => {
    const axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
      }
    };
    return axios
      .get('https://us-central1-gamelobbydtiv3.cloudfunctions.net/getUserColours', axiosConfig)
      .then((res) => {
        setUsersColours(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const initializeProfile = (id) => {
    db.collection('users').doc(id).get()
      .then((doc) => {
        setUsername(doc.data().username);
        setColour(doc.data().colour);
        setImgURL(doc.data().imgURL);
      })
  }

  const updateColour = async (newColour, id) => {
    const data = {
        newColour,
        id,
    };
    const axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
      }
    };
    return axios
      .post('https://us-central1-gamelobbydtiv3.cloudfunctions.net/updateUserColour', data, axiosConfig)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getUsersInfo = () => {
    db.collection('users').onSnapshot((snapshot) => {
      let users = [];
      snapshot.forEach(doc => {
        let user = {
          id: doc.id,
          username: doc.data().username,
          colour: doc.data().colour,
          imgURL: doc.data().imgURL,
        };
        users.push(user);
      })
      setUsersInfo(users);
    })
  }

  const uploadImg = (image, userID) => {
    const uploadTask = storage.ref(`DPs/${userID}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref('DPs')
          .child(userID)
          .getDownloadURL()
          .then((url) => {
            db.collection('users').doc(userID).update({
              imgURL: url,
            })
          })
      }
    )
  }

  useEffect(() => {
    getUserColours();
    getUsersInfo();
  }, [])

  const value = {
    usersColours,
    colour,
    username,
    initializeProfile,
    updateColour,
    usersInfo,
    imgURL,
    uploadImg,
  }

  return (
    <UsersInfoContext.Provider value={value}>
      {children}
    </UsersInfoContext.Provider>
  )
}
