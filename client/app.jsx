

if (Meteor.isClient) {
  Meteor.startup(function () {
    ReactDOM.render(
    	<ArtList />, document.getElementById('app-yeild')
    );
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}
