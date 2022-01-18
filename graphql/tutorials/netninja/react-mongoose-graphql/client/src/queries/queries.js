// import React, { useState } from 'react';
import { gql } from '@apollo/client';

const GET_BOOKS = gql`
  query getBooksQuery {
    books {
      name
      id
    }
  }
`;

const GET_BOOK = gql`
  query ($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

const GET_AUTHORS = gql`
  query getBooksQuery {
    authors {
      name
      id
    }
  }
`;

const ADD_BOOK = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { GET_BOOKS, GET_BOOK, GET_AUTHORS, ADD_BOOK };
