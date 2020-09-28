import React, { Component } from 'react';
import axios from 'axios';
import { Card } from "react-bootstrap";


class Photos extends Component {
    constructor(props){
        super();
    this.state={photos:[]};
}
componentDidUpdate(nextProps) {
    axios
      .get(
        // using the query in the url it takes less to load up because it doesn't have to load up all the items
        `https://jsonplaceholder.typicode.com/photos?albumId=${
          nextProps.selectedAlbumId}`
      )
      .then(res => {
        this.setState({
          photos: res.data
        });
      })
      .catch(err => console.log(err));
  }

    //  render(){
    //    const photoDatas=() => this.state.photos.map(el=>{
    //    return <li style={{listStyleType:"none"}} ><img src={el.thumbnailUrl} alt=""/><br />
    //    <strong>Title:  </strong>{el.title}<br /><br />
    //           </li>
              
    //    }) ; 

    render(){
      const photoDatas=() => this.state.photos.map(el=>{
      return <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.thumbnailUrl} /> 
                <Card.Body>
                <Card.Text>{el.title}
                </Card.Text>
             </Card.Body>
             </Card>
             
      }) ; 

      
   
   
  
    return (
        <div> PHOTOS
        {photoDatas()}
        {/* {this.componentDidMount()} */}
        </div>);
}


}



export default Photos;
 