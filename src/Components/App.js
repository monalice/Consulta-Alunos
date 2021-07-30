import React from 'react';
import Filters from './Filters';
import Title from './Title';
import Results from './Results';
import { SearchProvider } from '../Contexts/SearchContext';

export default function App() {
  return (
    <React.StrictMode>
      <SearchProvider>
          <Title />
          <Filters />
          <Results />
        </SearchProvider>
    </React.StrictMode>
  )
};
