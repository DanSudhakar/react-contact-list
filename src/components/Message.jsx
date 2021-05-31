import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Welcome to Messages Component",
    };
  }
  changeMessage() {
    this.setState({
      message: "Subscribed",
    });
  }
  render() {
    return (
      <React.Fragment>
        <div>{this.state.message}</div>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </React.Fragment>
    );
  }
}
