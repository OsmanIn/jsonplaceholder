import React, { Component } from 'react';
import axios from 'axios';


class Albums extends Component {
    constructor(props){
        super();
    this.state={albums:[]};
}


componentDidUpdate(nextProps) {
    // if (nextProps.selectedUserId === false) this.setState({ albums: [] });

    if (nextProps.selectedUserId)
      // manually force update props
      axios
        .get(
          // using the query in the url it takes less to load up because it doesn't have to load up all the items
          `https://jsonplaceholder.typicode.com/albums?userId=${
            nextProps.selectedUserId
          }`
        )
        .then(res => {
          this.setState({
            albums: res.data
          });
        })
        .catch(err => console.log(err));
  }

  // change = event => {
  //   // 2) the change() function takes an event (the 'value' of the option) and passes is to the func onAlbumSelected which comes from Home
  //   this.props.selectAlbum(event.target.value);
  // };

  handleClickk = albumId => {
    // checks if user is active already, sets the state to false in home and consequently the button becomes white again
    if (albumId === this.props.selectedAlbumId) {
      this.props.selectAlbum(false);
    } else {
      this.props.selectAlbum(albumId);
    } // 2) handleClick() passes the userId to onUserSelected, which has been created in Home and will update the state
  };

render(){
       const albumDatas=() => this.state.albums.map(el=>{
       return <li key={el.id} onClick={()=>this.handleClickk(el.id)}><strong>Album Name:  </strong>{el.title}
              </li>
       }) ; 

    return (
        <ul style={{listStyleType:"none"}}> ALBUMS
        {albumDatas()}
        {/* {this.componentDidMount()} */}
        </ul>);
}
}

export default Albums;
 