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
    let artHTML = '';
    if (this.state.artInfo) {
      artHTML = (
        <ul>
          <li>{this.state.artInfo.id}</li>
          <li>{this.state.artInfo.artist}</li>
          <li>{this.state.artInfo.title}</li>
          <li>{this.state.artInfo.medium}</li>
          <li>{this.state.artInfo.thumbnailUrl}</li>
          <li>{this.state.artInfo.url}</li>
        </ul>
      );
      return (
        <li>
          <img src={this.state.artInfo.thumbnailUrl}/>
          {artHTML}
        </li>
      );
    }
    return <li></li>;
  }
});
