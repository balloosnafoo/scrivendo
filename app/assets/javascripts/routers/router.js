Scrivendo.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.stories = options.stories;
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "homeShow",
    "stories/new": "storiesNew",
    "stories/:id": "storiesShow",
    "stories/:storyId/tellings/new": "tellingsNew",
    "stories/:storyId/tellings/:tellingId": "tellingsShow",
  },

  // Home routes
  homeShow: function () {
    // final home page design hasn't been decided
    this.stories.fetch();
    var home = new Scrivendo.Views.HomeShow({
      collection: this.stories
    });

    this._swapView(home);
  },

  // Stories routes
  storiesNew: function () {
    var view = new Scrivendo.Views.StoriesNew({
      collection: this.stories,
      model: new Scrivendo.Models.Story()
    });

    this._swapView(view)
  },

  storiesShow: function (id) {
    var story = this.stories.getOrFetch(id);
    var view = new Scrivendo.Views.StoriesShow({
      collection: this.stories,
      model: story
    });

    this._swapView(view);
  },

  storiesIndex: function () {

  },

  // Tellings routes
  tellingsNew: function (storyId) {
    var story = this.stories.getOrFetch(storyId);
    var view = new Scrivendo.Views.TellingsNew({
      story: story,
      model: new Scrivendo.Models.Telling({
        story_id: storyId
      })
    });

    this._swapView(view);
  },

  // THIS IS WHERE YOU WERE CODING
  tellingsShow: function (storyId, tellingId) {
    var story = this.stories.getOrFetch(storyId, { telling_id: tellingId })
    var view = new Scrivendo.Views.TellingsShow({
      story: story,
      tellingId: tellingId
    });

    this._swapView(view);
  },

  // Private functions
  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.render().$el);
  }
});
