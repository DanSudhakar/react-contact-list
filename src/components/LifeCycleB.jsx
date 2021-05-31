import React from "react";

class LifeCycleB extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      name: "sudhakar",
    };
    console.log("LifeCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpate");
  }
  componentDidMount() {
    console.log("LifeCycleB Did Mount");
  }

  render() {
    console.log("LifeCycleB render");
    return <div>LifeCycleB render</div>;
  }
}

export default LifeCycleB;
