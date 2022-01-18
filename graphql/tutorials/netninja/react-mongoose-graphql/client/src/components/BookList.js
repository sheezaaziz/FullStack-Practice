import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../queries/queries';
import BookDetails from './BookDetails';

export default function BookList() {
  const [selected, setSelected] = useState('');

  const DisplayBooks = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);

    return data.books.map(({ name, id }) => (
      <li key={id} onClick={() => setSelected(id)}>{name}</li>
    ));
  }

  return (
    <div>
      <ul id='book-list'>
        { DisplayBooks() }
      </ul>
      <BookDetails bookId={selected}/>
    </div>
  );
}
