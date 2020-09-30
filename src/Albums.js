import React, { Component } from 'react';
import axios from 'axios';

class Albums extends Component {
  constructor(props) {
    super();
    this.state = { albums: [] };
  }

  componentDidUpdate(nextProps) {
    if (nextProps.selectedUserId)

      axios
        .get(

          `https://jsonplaceholder.typicode.com/albums?userId=${nextProps.selectedUserId
          }`
        )
        .then(res => {
          this.setState({
            albums: res.data
          });
        })
        .catch(err => console.log(err));
  }

  handleClickAlbum = albumId => {
    if (albumId === this.props.selectedAlbumId) {
      this.props.selectAlbum(false);
    } else {
      this.props.selectAlbum(albumId);
    }
  };

  render() {
    const albumData = () => this.state.albums.map(el => {
      return <li key={el.id} onClick={() => this.handleClickAlbum(el.id)} > <a href="# " style={{ color: 'black' }}><strong>Album Name:  </strong>{el.title}
      </a></li>
    });

    return (
      <ul style={{ listStyleType: 'none' }}>
        <h5 style={{ color: "#cc2b5e" }}>ALBUMS</h5>
        {albumData()}
      </ul>
    );
  }
}

export default Albums;
