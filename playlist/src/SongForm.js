import React from 'react';

class SongForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      artist: '',
      genre: '',
      rating: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Submit geklikt');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.title}
          name='title'
          placeholder='add song title'
          onChange={this.handleChange}
        />
        <input
          type='text'
          value={this.state.artist}
          name='artist'
          placeholder='add artist'
          onChange={this.handleChange}
        />
        <select
          value={this.state.genre}
          name='genre'
          onChange={this.handleChange}
        >
          <option value=''>Choose Genre...</option>
          <option value='Rock'>Rock</option>
          <option value='Metal'>Metal</option>
          <option value='Jazz'>Jazz</option>
          <option value='Pop'>Pop</option>
          <option value='Punk'>Punk</option>
        </select>
        <select
          value={this.state.rating}
          name='rating'
          onChange={this.handleChange}
        >
          <option value=''>Choose Rating...</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <button>Submit</button>
        <h2>Test Title: {this.state.title}</h2>
        <h2>Test Artist: {this.state.artist}</h2>
        <h2>Test Genre: {this.state.genre}</h2>
        <h2>Test Rating: {this.state.rating}</h2>
      </form>
    );
  }
}

export default SongForm;
