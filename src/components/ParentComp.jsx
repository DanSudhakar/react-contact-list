import React from "react";
import MemoComp from "./MemoComp";

class ParentComp extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      name: "Sudhakar",
    };
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     name: "Sudhakar",
    //   });
    // }, 0);
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        Parent Component
        {/* <RegularComponent name={this.state.name}></RegularComponent>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    );
  }
}

export default ParentComp;
