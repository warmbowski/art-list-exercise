

if (Meteor.isClient) {
  Meteor.startup(function () {
    ReactDOM.render(
    	<AppParent />, document.getElementById('app-yeild')
    );
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}
