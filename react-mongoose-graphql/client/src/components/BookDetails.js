import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOK } from '../queries/queries';

export default function BookDetails({bookId}) {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: bookId }
  });

  const displayBookDetails = () => {
    if (data && data.book) {
      return (
        <div>
          <h2>{ data.book.name }</h2>
          <p>id: { data.book.id }</p>
          <p>{ data.book.genre }</p>
          <p>{ data.book.author.name }</p>
          <p>All books by this author:</p>
        </div>
      );
    }
  };

  return (
    <div>
      {displayBookDetails()}
    </div>
  );
};
