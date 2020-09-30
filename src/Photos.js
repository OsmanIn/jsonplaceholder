import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components';

const Styles = styled.div`
.carousel-control-next-icon, 
.carousel-control-prev-icon{   
    display:none;
 }`;

class Photos extends Component {
  constructor(props) {
    super();
    this.state = { photos: [] };
  }

  componentDidUpdate(nextProps) {
    axios
      .get(
        // using the query in the url it takes less to load up because it doesn't have to load up all the items
        `https://jsonplaceholder.typicode.com/photos?albumId=${nextProps.selectedAlbumId}`
      )
      .then(res => {
        this.setState({
          photos: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const photoData = () => this.state.photos.map(el => {
      return <Carousel.Item key={el.id} >
        <img className="d-block w-100" src={el.thumbnailUrl} alt="" />
        <Carousel.Caption>
          <p>{el.title}</p>
        </Carousel.Caption>
      </Carousel.Item>
    });

    return (
      <Styles>
        <h5 style={{ color: "#cc2b5e" }}>PHOTOS</h5>
        <Carousel>
          {photoData()}
        </Carousel>
      </Styles >
    )
  }
}
export default Photos;