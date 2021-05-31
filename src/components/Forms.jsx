import React, { Component } from "react";

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "sudhakar",
      comments: "",
      topic: "vue",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleNameChange}
          />
          <textarea
            onChange={this.handleCommentsChange}
            value={this.state.comments}
          ></textarea>
          <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
