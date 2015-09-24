Scrivendo.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.stories = options.stories;
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "homeShow",
    "stories/new": "storiesNew",
  },

  // Home routes
  homeShow: function () {
    // final home page design hasn't been decided
    var home = new Scrivendo.Views.HomeShow({
      collection: this.stories
    });

    this._swapView(home);
  },

  // Stories routes
  storiesNew: function () {
    var view = new Scrivendo.Views.StoriesNew({
      collection: this.stories
    });

    this._swapView(view)
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.render().$el);
  }
});
