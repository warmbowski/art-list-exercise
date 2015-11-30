ArtPieceInfoPop = React.createClass({

  getDefaultProps() {

    return {
      artInfo: {}
    }
  },

  render() {
    let ulStyle = {
      visibility: 'hidden'
    };

    return (
      <ul className='info-pop' style={ulStyle}>
        <li>{this.props.artInfo.title}</li>
        <li>{this.props.artInfo.medium}</li>
        <li>{this.props.artInfo.artist}</li>
      </ul>
    );
  }
});
