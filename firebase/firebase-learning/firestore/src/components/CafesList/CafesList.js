import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';

export default function CafesList() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    // to get particular:
    // db.collection('cafes').where('city', '==', 'ajax').get()

    // old way:
    // db.collection('cafes').orderBy('city').get()
    //   .then((snapshot) => {
    //     let items = [];
    //     snapshot.docs.forEach(doc => {
    //       let item = {
    //         id: doc.id,
    //         name: doc.data().name,
    //         city: doc.data().city,
    //       }
    //       items.push(item);
    //     })
    //     setCafes(items);
    //   })
    //   .catch(err => {
    //       console.log('error retrivering data', err);
    //   });

    // real-time listener way:
    db.collection('cafes').orderBy('name').onSnapshot(snapshot => {
      let items = [];
      snapshot.forEach(doc => {
        let item = {
          id: doc.id,
          name: doc.data().name,
          city: doc.data().city,
        }
        items.push(item);
      })
      setCafes(items);
    })
  }, [db])

  const handleSubmit = (id, evt) => {
    evt.preventDefault();
    db.collection('cafes').doc(id).delete();
  }

  let cafesList = cafes.map((cafe, id) => {
    return (
      <div key={cafe.id}>
        <h2>{cafe.name}</h2>
        <p>id: {cafe.city}</p>
        <p>id: {cafe.id}</p>
        <button
          onClick={(evt) => handleSubmit(cafe.id, evt)}
        >
          delete
        </button >
        <hr/>
      </div>
    )
  })

  return (
    <div>
      { cafesList }
    </div>
  );
}
