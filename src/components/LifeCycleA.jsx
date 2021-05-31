import React from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      name: "sudhakar",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA Did Mount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpate");
  }
  changeState() {
    this.setState({
      name: "Called",
    });
  }

  render() {
    console.log("LifeCycleA render");
    return (
      <React.Fragment>
        <div>LifeCycleA render</div>
        <button onClick={() => this.changeState()}>Change State</button>
        <LifeCycleB></LifeCycleB>
      </React.Fragment>
    );
  }
}

export default LifeCycleA;
