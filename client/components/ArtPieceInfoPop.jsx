ArtPieceInfoPop = React.createClass({

  getDefaultProps() {

    return {
      artInfo: {}
    }
  },

  render() {
    let artistName = this.props.artInfo.artist.split(', ').reverse().join(' ');

    let ulStyle = {
      visibility: 'hidden'
    };

    return (
      <ul style={ulStyle}>
        <li className='title'>{this.props.artInfo.title}</li>
        <li className='medium'>{this.props.artInfo.medium}</li>
        <li className='artist'>{artistName}</li>
      </ul>
    );
  }
});
