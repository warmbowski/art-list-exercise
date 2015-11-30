ArtList = React.createClass({

  getDefaultProps() {

    return {
      idSrc: 'https://appsheettest1.azurewebsites.net/sample/art',
      perPage: 20
    }
  },

  getInitialState() {
    return {
      artList: [],
      pageStart: 0
    }
  },

  componentDidMount() {

    let url = this.props.idSrc;

    $.get(url, function(data) {
      //let artList = data;

      let artList = [];
      for (var i = 0; i < 105; i+=1) {
        artList.push(data[i]);
      }

      if (this.isMounted()) {
        this.setState({
          artList: artList,
          pageStart: 0
        });
      }
    }.bind(this));
  },

  handleBeginClick() {

    let pageStart = this.state.pageStart = 0;
    this.setState({
      artList: this.state.artList,
      pageStart: pageStart
    });
  },

  handlePrevClick() {

    let pageStart = this.state.pageStart - this.props.perPage;
    if (pageStart >= 0) {
      this.setState({
        artList: this.state.artList,
        pageStart: pageStart
      });
    }
  },

  handleNextClick() {

    let pageStart = this.state.pageStart + this.props.perPage
    if (pageStart <= this.state.artList.length - 1) {
      this.setState({
        artList: this.state.artList,
        pageStart: pageStart
      });
    }
  },

  handleEndClick() {

    let pageStart = this.state.artList.length - (this.state.artList.length % this.props.perPage)
    if (this.state.artList.length % this.props.perPage === 0) {
      pageStart -= this.props.perPage;
    }
    this.setState({
      artList: this.state.artList,
      pageStart: pageStart
    });
  },

  render() {

    if (this.state.artList.length > 0) {
      let pageStart = this.state.pageStart;
      let pageEnd = this.state.pageStart + this.props.perPage;
      let pageList = this.state.artList.slice(pageStart, pageEnd);

      artItems = pageList.map(function(item) {

        return (
          <ArtPiece key={item} artId={item}/>
        );
      });
    } else {
      artItems = [];
    }

    return (
      <div>
        <PageControl
          start={this.state.pageStart}
          count={this.props.perPage}
          length={this.state.artList.length}
          beginClick={this.handleBeginClick}
          prevClick={this.handlePrevClick}
          nextClick={this.handleNextClick}
          endClick={this.handleEndClick}
        />
        <section id='artList'>
          {artItems}
        </section>
    </div>
    );
  }
});