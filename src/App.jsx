import React, {useState} from 'react';
import LandingPage from './Landing/Landing.jsx';

export default () => {
  const [page, setPage] = useState('home');

  return (
    <div id="app">
      <LandingPage page={page} setPage={setPage}/>
    </div>
  );
};