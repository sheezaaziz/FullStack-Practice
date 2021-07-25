import React from 'react';
import { gql, useQuery } from '@apollo/client';

// graphql queries
const BOOK_LIST = gql`
  query getBooksQuery {
    books {
      name
      id
    }
  }
`;

export default function BookList() {
  const { loading, error, data } = useQuery(BOOK_LIST);

  const DisplayBooks = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
      
    return data.books.map(({ name, id }) => (
      <li key={id}>{name}</li>
    ));
  }

  return (
    <div>
      <ul id='book-list'>
        { DisplayBooks() }
      </ul>
    </div>
  )
}
