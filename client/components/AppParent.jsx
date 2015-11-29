AppParent = React.createClass({

  getDefaultProps() {
    return {
      idSrc: 'https://appsheettest1.azurewebsites.net/sample/art'
    }
  },

  getInitialState() {
    return {
      artList: []
    }
  },

  componentDidMount() {
    let url = this.props.idSrc;

    $.get(url, function(data) {
      // let artList = data;

      let artList = [];
      for (var i = 0; i < 10; i+=1) {
        artList.push(data[i]);
      }

      if (this.isMounted()) {
        this.setState({
          artList: artList
        });
      }
    }.bind(this));
  },

  render() {
    if (this.state.artList) {
      artItems = this.state.artList.map(function(item) {

        return (
          <ArtPiece key={item} artId={item}/>
        );
      });
    }

    return (
      <ul>{artItems}</ul>
    );
  }
});
