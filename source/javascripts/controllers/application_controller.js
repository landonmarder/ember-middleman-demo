App.IndexController = Ember.Controller.extend({
  siteTitle: 'Home',
  currentTime: function() {
    return(new Date);
  }.property()
});

App.AboutController = Ember.Controller.extend({
  siteTitle: 'About'
});
