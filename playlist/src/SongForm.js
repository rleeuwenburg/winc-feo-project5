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
    this.props.onSubmit({
      title: this.state.title,
      artist: this.state.artist,
      genre: this.state.genre,
      rating: this.state.rating
    });
    this.setState({
      title: '',
      artist: '',
      genre: '',
      rating: ''
    });
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
