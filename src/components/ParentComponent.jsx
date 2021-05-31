import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Sudhakar",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    console.log(`Parent Name: ${this.state.parentName} from ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
