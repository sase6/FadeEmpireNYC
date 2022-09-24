import React, {useState} from 'react';
import LandingPage from './Landing/Landing.jsx';
import TeamPage from './Team/Team.jsx';

export default () => {
  const [page, setPage] = useState('home');

  return (
    <div id="app">
      <LandingPage page={page} setPage={setPage}/>
      <TeamPage />
    </div>
  );
};