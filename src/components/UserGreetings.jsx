import React, { Component } from "react";

class UserGreetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    /* let message = "";
    if (this.state.isLoggedIn) {
      message = <div>Guest</div>;
    } else {
      message = <div>Sudhakar</div>;
    }
    return <div>{message}</div>; */

    return !this.state.isLoggedIn ? <div>Guest</div> : <div>Sudhakar</div>;
  }
}

export default UserGreetings;
