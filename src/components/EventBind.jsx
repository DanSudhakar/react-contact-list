import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Good Bye",
    });
  }
  render() {
    return (
      <React.Fragment>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>New Click</button> */}
        <button onClick={this.clickHandler}>cClick</button>
      </React.Fragment>
    );
  }
}

export default EventBind;
