import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
//import SearchBar from './search';
import Users from './Users';
import Albums from './Albums';
import Photos from './Photos';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Styles = styled.div`
 .main{ 
  padding-top:50px;
  
 }
 .row{
  width:90%;
  margin:0 auto; 
  padding:25px;
   background-color:white;
 }
 .h1{
  text-align:-webkit-center
}
.h2{
  text-align:-webkit-center
}`;

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedUserId: false,
      selectedAlbumId: false
    };
  }
  selectUser = userId => {
    this.setState({ selectedUserId: userId, selectedAlbumId: false });
  };

  selectAlbum = albumId => {
    this.setState({ selectedAlbumId: albumId });
  };

  render() {
    return (
      <Styles>
        <div className="main">
          <Container fluid>
            <h1 className="h1" style={{ color: "#cc2b5e" }}>JSONPLACEHOLDER PROJECT</h1>
            <Row>
              <Col className="col-3"><Users selectUser={this.selectUser} selectedUserId={this.state.selectedUserId} /></Col>
              <Col className="col-4"><Albums selectedUserId={this.state.selectedUserId} selectAlbum={this.selectAlbum} /></Col>
              <Col className="col-5"><Photos selectedAlbumId={this.state.selectedAlbumId} /></Col>
            </Row>
          </Container>
        </div>
      </Styles>
    )
  }
}

export default App;
