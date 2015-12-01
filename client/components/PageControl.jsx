PageControl = React.createClass({
  getDefaultProps() {
    return {
      start: 0,
      count: 25,
      length: 25
    }
  },

  render() {

    let end = this.props.start + this.props.count;
    if (this.props.start + this.props.count > this.props.length) {
      end = this.props.length;
    }

    return (
      <nav>
        <button id='begin' onClick={this.props.beginClick}>&lt;&lt;&#8810begin</button>
        <button id='prev' onClick={this.props.prevClick}>&lt;prev</button>&nbsp;
        <button id='next' onClick={this.props.nextClick}>next&gt;</button>
        <button id='end' onClick={this.props.endClick}>end&gt;&gt;</button>
        <span>&nbsp;&nbsp;You are viewing {this.props.start}-{end} of {this.props.length} images.</span>
      </nav>
    );
  }
});
