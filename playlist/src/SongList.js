import React from 'react';

function SongList(props) {
  return (
    <tbody>
      {props.songs.map(song => (
        <tr key='id'>
          <th className='song-row__item'>{song.title}</th>
          <th className='song-row__item'>{song.artist}</th>
          <th className='song-row__item'>{song.genre}</th>
          <th className='song-row__item'>{song.rating}</th>
        </tr>
      ))}
    </tbody>
  );
}

export default SongList;
