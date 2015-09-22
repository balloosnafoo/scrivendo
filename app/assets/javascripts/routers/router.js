Scrivendo.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.stories = options.stories;
    this.$rootEl = options.$rootEl;
  },

  routes: {
  },
});
