import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweet} onChange={(event) => this.handleChange(event)} />
        <h3>{this.props.maxChars - this.state.tweet.length}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
