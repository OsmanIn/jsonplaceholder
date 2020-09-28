import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
//import SearchBar from './search';
import Users from './Users';
import Albums from './Albums';
import Photos from './Photos';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      selectedUserId: false,
      selectedAlbumId: false
    };
  
   }
   // gets the userId from the component User, to which it's passed as props
  selectUser = userId => {
    this.setState({ selectedUserId: userId, selectedAlbumId: false });
  };

  selectAlbum = albumId => {
    this.setState({ selectedAlbumId: albumId });
  };
     
  render(){
    
    return (
      <Container fluid >
        <Row >
    {/* <div className="App"> */}
       {/* <h1>Hello People </h1> */}
    <Col xs><Users selectUser={this.selectUser} selectedUserId={this.state.selectedUserId} /></Col>
    <Col xs><Albums selectedUserId={this.state.selectedUserId} selectAlbum={this.selectAlbum} /></Col>
    <Col xs><Photos selectedAlbumId={this.state.selectedAlbumId}  /></Col>
    {/* </div> */}
  </Row>
</Container>



      // <div className="App">
      //  <h1>Hello People </h1>
      //  {/* <SearchBar photo={this.photo}/> */}
      //  <Users selectUser={this.selectUser} selectedUserId={this.state.selectedUserId} />
      //  <Albums selectedUserId={this.state.selectedUserId} selectAlbum={this.selectAlbum} />
      //  <Photos selectedAlbumId={this.state.selectedAlbumId}  />
      // </div>
    )
  }
  
}

export default App;
