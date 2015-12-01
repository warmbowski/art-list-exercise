ArtPieceInfoFull = React.createClass({

  getDefaultProps() {

    return {
      artInfo: {}
    }
  },

  render() {

    let ulStyle = {
      position: 'fixed',
      bottom: '0',
      right: '0',
      left: '10%',
      maxWidth: '100%',
      width: '100%',
      height: 'auto',
      border: '5px solid wheat',
      zIndex: '5',
      padding: '5px',
      opacity: '1'
    };

    return (
      <ul
        style={ulStyle}
        onClick={this.props.onInfoClose}
        onTouchEnd={this.props.onInfoClose}
      >
        <li>ID: {this.props.artInfo.id}</li>
        <li>Artist: {this.props.artInfo.artist}</li>
        <li>Title: {this.props.artInfo.title}</li>
        <li>Medium: {this.props.artInfo.medium}</li>
        <li>Image:
          <a href={this.props.artInfo.thumbnailUrl}>
            {this.props.artInfo.thumbnailUrl}
          </a>
        </li>
        <li>URL:
          <a href={this.props.artInfo.url}>
            {this.props.artInfo.url}
          </a>
        </li>
      </ul>
    );
  }
});
