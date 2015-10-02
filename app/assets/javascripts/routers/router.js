Scrivendo.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.stories = options.stories;
    this.tellings = new Scrivendo.Collections.Tellings();
    this.variants = new Scrivendo.Collections.Variants();
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "homeShow",
    "stories": "storiesIndex",
    "stories/browse": "storiesBrowse",
    "stories/new": "storiesNew",
    "stories/:id": "storiesShow",
    "stories/:storyId/tellings/new": "tellingsNew",
    "stories/:storyId/tellings/:tellingId": "tellingsShow",
    "stories/:storyId/tellings": "tellingsIndex",
    "variants(?*querystring)": "variantsIndex",
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
    this.stories.fetch({ data: {user_stories: true } });
    var view = new Scrivendo.Views.StoriesIndex({
      collection: this.stories
    });

    this._swapView(view);
  },

  storiesBrowse: function () {
    this.stories.fetch();
    var view = new Scrivendo.Views.StoriesIndex({
      collection: this.stories
    });

    this._swapView(view);
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

  tellingsShow: function (storyId, tellingId) {
    var telling = this.tellings.getOrFetch(tellingId);
    var view = new Scrivendo.Views.TellingsShow({
      model: telling
    });

    this._swapView(view);
  },

  tellingsIndex: function (storyId) {
    // potentially unnecessary, as the same function is ostensibly performed
    // by the story show page.
  },

  // Variants routes
  variantsIndex: function () {
    this.variants.fetch()
    var view = new Scrivendo.Views.VariantsIndex({
      collection: this.variants
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
