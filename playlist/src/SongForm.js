import React from 'react';
import SongFormComponent from './SongFormComponent';

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
    this.handleSubmit = this.handleSubmit.bind(this);
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
    // addSong={this.addSong};
  }

  render() {
    return (
      <SongFormComponent
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        song={this.state}
      />
    );
  }
}
export default SongForm;
