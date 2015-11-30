ArtPiece = React.createClass({

  getDefaultProps() {

    return {
      artId: '',
      idSrc: 'https://appsheettest1.azurewebsites.net/sample/art'
    }
  },

  getInitialState() {

    return {}
  },

  componentDidMount() {

    let url = this.props.idSrc + '/' + this.props.artId;

    $.get(url, function(data) {
      let artInfo = data;

      if (this.isMounted()) {
        this.setState({
          showInfo: false,
          artInfo: artInfo
        });
      }
    }.bind(this));
  },

  handleMouseOver() {
    let el = ReactDOM.findDOMNode(this);
    el.lastElementChild.style.visibility = 'visible';
  },

  handleMouseOut() {
    let el = ReactDOM.findDOMNode(this);
    el.lastElementChild.style.visibility = 'hidden';
  },

  render() {

    if (this.state.artInfo) {
      return (
        <div
          id='artItem'
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <img src={this.state.artInfo.thumbnailUrl}/>
          <ArtPieceInfoPop artInfo={this.state.artInfo}/>
        </div>
      );
    }

    return <div></div>;
  }
});
