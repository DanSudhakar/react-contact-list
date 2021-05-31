import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <label>{`Count is ${count} incremented by `}</label>

        <button onMouseOver={incrementCount}>Clicked x times</button>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
