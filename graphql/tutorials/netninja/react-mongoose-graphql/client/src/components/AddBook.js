import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from '../queries/queries';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  // for submitting book mutation...
  const [addBookMutation, { data, loading, error }] = useMutation(ADD_BOOK);

  const DisplayAuthors = () => {
    const { loading, error, data } = useQuery(GET_AUTHORS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.authors.map(({ name, id }) => (
      <option key={id} value={id}>{name}</option>
    ));
  }

  const AddBook = (evt) => {
    evt.preventDefault();
    console.log(title, genre);
    addBookMutation({
      variables: { name: title, genre: genre, authorId: '890'},
      refetchQueries:[{ query: GET_BOOKS }],
    });
    if (loading) console.log('submitting...');
    if (error) console.log('error: ', error.message);
  }

  const handleUpdateAuthor = (evt) => {
    evt.preventDefault();
  }

  return (
    <form onSubmit={AddBook}>
      <input
        type='text'
        placeholder='title'
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='genre'
        onChange={e => setGenre(e.target.value)}
      />
      <select id='colours' onChange={handleUpdateAuthor}>
        DisplayAuthors()
      </select>
      <button>submit</button>
    </form>
  );
}
