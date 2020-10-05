import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  
  state = {
    username: ""
  };

  onChangeUsername = e => {
    this.setState({ username: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    const user = {
      username
    };

    console.log(user);

    axios
      .post("https://exercise-tracker-app-backend.glitch.me/users/add", user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    this.setState({ username: "" });
  };

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
