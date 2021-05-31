import React, { Component } from "react";

export default class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
    this.setCallBackRef = (element) => {
      this.inputRef = element;
    };

    this.state = {};
  }

  componentDidMount() {
    this.inputRef.focus();
    console.log(this.inputRef);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setCallBackRef} />
      </div>
    );
  }
}
