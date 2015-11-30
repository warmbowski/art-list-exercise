ArtPieceInfo = React.createClass({

  getDefaultProps() {

    return {
      artInfo: {}
    }
  },

  render() {
    return (
      <ul>
        <li><img src={this.props.artInfo.url}/></li>
        <li>{this.props.artInfo.id}</li>
        <li>{this.props.artInfo.artist}</li>
        <li>{this.props.artInfo.title}</li>
        <li>{this.props.artInfo.medium}</li>
        <li>{this.props.artInfo.thumbnailUrl}</li>
        <li>{this.props.artInfo.url}</li>
      </ul>
    );
  }
});
