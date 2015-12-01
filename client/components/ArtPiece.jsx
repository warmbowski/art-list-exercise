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
          artInfo: artInfo,
          showFullInfo: false,
          divStyle: {}
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
    if (this.state.touch1) {
      this.state.touch2 = Date.now();
    } else {
      this.state.touch1 = Date.now();
    }
  },

  handleTouchMove(evt) {
    this.state.dragging = true;
    this.state.touch1 = this.state.touch2 = null;
  },

  handleTouchEnd(evt) {
    evt.preventDefault();
    let el = ReactDOM.findDOMNode(this);
    if (this.state.touch2 && this.state.touch2 - this.state.touch1 <= 500) {
      //alert('double touch');
      el.lastElementChild.style.visibility = 'hidden';
      this.handleDoubleClick(evt);
      this.state.touch1 = this.state.touch2 = null;
    } else {
      if (!this.state.dragging) {
        if (el.lastElementChild.style.visibility === 'hidden') {
          el.lastElementChild.style.visibility = 'visible';
        } else {
          el.lastElementChild.style.visibility = 'hidden';
        }
      }
    }
  },

  handleDoubleClick(evt) {

    let hash = evt.target.id;
    if (this.state.showFullInfo === true) {
      this.state.showFullInfo = false;
      this.state.divStyle = {};
      location.hash = '_';
    } else {
      this.state.showFullInfo = true;
      this.state.divStyle = {
        flex: '5 0 auto',
        minWidth: '50%',
        border: '3px solid red'
      };
      location.hash = '#' + hash;
    }
    this.forceUpdate();
  },

  handleInfoClose(evt) {

    this.handleDoubleClick(evt);
  },

  render() {

    let fullInfo = null;
    if (this.state.showFullInfo) {
      fullInfo = (
        <ArtPieceInfoFull artInfo={this.state.artInfo} onInfoClose={this.handleInfoClose}/>
      );
    }

    if (this.state.artInfo) {

      return (
        <div
          id={this.state.artInfo.id}
          className='art-item'
          style={this.state.divStyle}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          onDoubleClick={this.handleDoubleClick}
        >
          {fullInfo}
          <img id={this.state.artInfo.id} src={this.state.artInfo.thumbnailUrl}/>
          <ArtPieceInfoPop artInfo={this.state.artInfo}/>
        </div>
      );
    }

    return null;
  }
});
