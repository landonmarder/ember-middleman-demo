//= require_self
//= require_tree ./controllers
//= require_tree ./models
//= require_tree ./routes
//= require_tree ./templates
//= require_tree ./views

App = Ember.Application.create({
  // sets application root element
  // rootElement: '#element-id',

  // logs a message to console once the URL changes (for debugging)
  LOG_TRANSITIONS: true,
});

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
})

App.Router.map(function() {
  this.route('about');
});
