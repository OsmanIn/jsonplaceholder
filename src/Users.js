import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  constructor(props) {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {

    axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
      //console.log(response.data);
      this.setState({ users: response.data });
    });
  }

  handleClick = userId => {
    if (userId === this.props.selectedUserId) {
      this.props.selectUser(false);
    } else {
      this.props.selectUser(userId);
    }
  };

  render() {
    const userData = () => this.state.users.map(el => {
      return <li key={el.id} onClick={() => this.handleClick(el.id)}><a href="# " style={{ color: "black" }}><strong>User Name:  </strong>{el.name} <br />
        <strong>Company: </strong>{el.company.name}<br /><br />
      </a>
      </li>
    });

    return (
      <ul style={{ listStyleType: "none", color: "#cc2b5e" }}>
        <h5 style={{ color: "#cc2b5e" }}>USERS</h5>
        {userData()}
      </ul>);
  }
}

export default Users;
