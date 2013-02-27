//= require_self
//= require_tree ./controllers
//= require_tree ./models
//= require_tree ./routes
//= require_tree ./templates
//= require_tree ./views

window.App = Ember.Application.create({
  Store: DS.Store.extend({
    revision: 11,
    adapter: DS.fixtureAdapter
  })
});
