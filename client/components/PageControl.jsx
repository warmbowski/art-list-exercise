PageControl = React.createClass({
  getDefaultProps() {
    return {
      start: 0,
      count: 25,
      length: 25
    }
  },

  render() {
    return (
      <nav>
        <button id='begin' onClick={this.props.beginClick}>begin</button>
        <button id='prev' onClick={this.props.prevClick}>prev</button>
        <button id='next' onClick={this.props.nextClick}>next</button>
        <button id='end' onClick={this.props.endClick}>end</button>
      </nav>
    );
  }
});
