import React, { Component } from "react";
import Input from "./Input";
export class Focus extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
    this.state = {};
  }
  clickHandler = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <Input ref={this.componentRef}>Focus Input</Input>
        <button onClick={this.clickHandler}></button>
      </div>
    );
  }
}

export default Focus;
