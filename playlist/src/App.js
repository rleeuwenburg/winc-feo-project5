import React from 'react';
import SongOverview from './SongOverview';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Project W5D5: Winc Lil' Playlist</h1>
      <SongForm />
      <br />
      <SongList />
    </div>
  );
}

export default App;
