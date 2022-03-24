import React, { useState } from 'react';
import { db } from '../../firebase';

export default function AddCafesForm() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    db.collection('cafes').add({
      name: name,
      city: city,
    })
    console.log('submitting!', name, city);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        name="city"
        placeholder="city"
        onChange={e => setCity(e.target.value)}
      />
    <button>add cafe</button>
    </form>
  )
}
