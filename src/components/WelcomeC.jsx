import React, { Component } from "react";

export default class WelcomeC extends Component {
  render() {
    const { ...details } = this.props;
    return (
      <div>
        <h1>I'm from class component</h1>
        <div>{details.name}</div>
        <div>{details.children}</div>
      </div>
    );
  }
}
