import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Render");
    return <div>{this.props.name}</div>;
  }
}

export default PureComp;
