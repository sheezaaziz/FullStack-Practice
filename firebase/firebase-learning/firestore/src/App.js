import React from 'react';

import CafesList from './components/CafesList/CafesList';
import AddCafesForm from './components/CafesForm/AddCafesForm';

export default function App() {

  return (
    <div>
      <h1>Cafes</h1>
      <AddCafesForm/>
      <CafesList/>
    </div>
  );
}
