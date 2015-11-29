ArtPiece = React.createClass({

  getDefaultProps() {

    return {
      artId: '',
      idSrc: 'https://appsheettest1.azurewebsites.net/sample/art'
    }
  },

  getInitialState() {

    return {

    }
  },

  componentDidMount() {

    let url = this.props.idSrc + '/' + this.props.artId;

    $.get(url, function(data) {
      let artInfo = data;

      if (this.isMounted()) {
        this.setState({
          artInfo: artInfo
        });
      }
    }.bind(this));
  },

  render() {

    if (this.state.artInfo) {

      return (
        <div id='artItem'>
          <img src={this.state.artInfo.thumbnailUrl}/>
          <ArtPieceInfo artInfo={this.state.artInfo}/>
        </div>
      );
    }
    
    return <div></div>;
  }
});
