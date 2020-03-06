import React from 'react';
import SongForm from './SongForm';

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: []
    };
    this.addSong = this.addSong.bind(this);
  }

  addSong() {
    console.log('ik ga iets adden');
  }
  // = song => {
  // doe iets om de state aan te passen

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <table style={{ width: '100%' }}>
          <thead>
            <tr className='song-header'>
              <th className='song-row__header'>Song</th>
              <th className='song-row__header'>Artist</th>
              <th className='song-row__header'>Genre</th>
              <th className='song-row__header'>Rating</th>
            </tr>
          </thead>

          <tbody>
            {/* <SongList songs={this.state.songs} /> */}
            <tr className='song-row'>
              <th className='song-row__item'>Whatever Title</th>
              <th className='song-row__item'>Whatever Artist</th>
              <th className='song-row__item'>Whatever Genre</th>
              <th className='song-row__item'>Whatever Rating</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongOverview;
