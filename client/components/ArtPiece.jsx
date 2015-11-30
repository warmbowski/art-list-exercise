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

  handleMouseOver(evt) {
    evt.preventDefault();
    let el = ReactDOM.findDOMNode(this);
    el.lastElementChild.style.visibility = 'visible';
  },

  handleMouseOut(evt) {
    evt.preventDefault();
    let el = ReactDOM.findDOMNode(this);
    el.lastElementChild.style.visibility = 'hidden';
  },

  handleTouchStart(evt) {
    this.state.dragging = false;
  },

  handleTouchMove(evt) {
    this.state.dragging = true;
  },

  handleTouchEnd(evt) {
    evt.preventDefault();
    if (!this.state.dragging) {
      let el = ReactDOM.findDOMNode(this);
      if (el.lastElementChild.style.visibility === 'hidden') {
        el.lastElementChild.style.visibility = 'visible';
      } else {
        el.lastElementChild.style.visibility = 'hidden';
      }
    }
  },



  render() {

    if (this.state.artInfo) {
      return (
        <div
          className='artItem'
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          <img src={this.state.artInfo.thumbnailUrl}/>
          <ArtPieceInfoPop artInfo={this.state.artInfo}/>
        </div>
      );
    }

    return <div></div>;
  }
});
