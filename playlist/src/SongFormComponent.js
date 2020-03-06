import React from 'react';

function SongFormComponent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type='text'
        value={props.song.title}
        name='title'
        placeholder='add song title'
        onChange={props.handleChange}
      />
      <input
        type='text'
        value={props.song.artist}
        name='artist'
        placeholder='add artist'
        onChange={props.handleChange}
      />
      <select
        value={props.song.genre}
        name='genre'
        onChange={props.handleChange}
      >
        <option value=''>Choose Genre...</option>
        <option value='Rock'>Rock</option>
        <option value='Metal'>Metal</option>
        <option value='Jazz'>Jazz</option>
        <option value='Pop'>Pop</option>
        <option value='Punk'>Punk</option>
      </select>
      <select
        value={props.song.rating}
        name='rating'
        onChange={props.handleChange}
      >
        <option value=''>Choose Rating...</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
      <button>Submit</button>
      <h2>Test Title: {props.song.title}</h2>
      <h2>Test Artist: {props.song.artist}</h2>
      <h2>Test Genre: {props.song.genre}</h2>
      <h2>Test Rating: {props.song.rating}</h2>
    </form>
  );
}

export default SongFormComponent;
