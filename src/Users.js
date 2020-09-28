import React, { Component } from 'react';
import axios from 'axios';


class Users extends Component {
    constructor(props){
        super();
    this.state={users:[]};
}
componentDidMount(){
         //e.preventDefault();
         axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
            //console.log(response.data);
            this.setState({ users: response.data });
        });



        // fetch(`https://jsonplaceholder.typicode.com/photos`).then(res=>res.json()).then(res=>
        // //console.log(res)
        // this.setState({photos:[res.title]}))     
    
        }

    handleClick = userId => {
            // checks if user is active already, sets the state to false in home and consequently the button becomes white again
            if (userId === this.props.selectedUserId) {
              this.props.selectUser(false);
            } else {
              this.props.selectUser(userId);
            } // 2) handleClick() passes the userId to onUserSelected, which has been created in Home and will update the state
          };
     render(){
       const userDatas=() => this.state.users.map(el=>{
       return <li key={el.id}onClick={() => this.handleClick(el.id)} ><strong>User Name:  </strong>{el.name} <br />
               <strong>Company</strong>{el.company.name}<br /><br />
              </li>
       }) ; 
    return (
        <ul style={{listStyleType:"none"}}> USERS
        {userDatas()}
        {/* {this.componentDidMount()} */}
        </ul>);
}
}

export default Users;
 