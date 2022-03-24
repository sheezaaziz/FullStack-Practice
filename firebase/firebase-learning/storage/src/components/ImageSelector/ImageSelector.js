import React, { useState } from 'react';

import { storage } from '../../firebase';

export default function ImageSelector() {
  const [image, setImage] = useState(null);
  const [imgURL, setImgURL] = useState('');
  const [progress, setProgress] = useState(0);

  const handleImgChange = (evt) => {
    if (evt.target.files[0]) {
      setImage(evt.target.files[0]);
    }
  }

  const handleUploadImg = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        const transferProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(transferProgress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => setImgURL(url))
      }
    )
  }

  return (
    <div>
      <progress value={progress} max='100'/>
      <br/>
      <input type="file" onChange={handleImgChange}/>
      <br/>
      <button onClick={handleUploadImg}>upload img</button>
      <br/>
      <img src={imgURL} alt={image.name}/>
    </div>
  )
}
