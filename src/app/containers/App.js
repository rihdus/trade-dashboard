require('./App.scss');

module.exports = {
  template: require('./App.html'),
  controller: App
};

function App() {
  this.title = 'App Controller';
}
