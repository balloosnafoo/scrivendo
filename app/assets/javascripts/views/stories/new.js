Scrivendo.Views.StoriesNew = Backbone.View.extend({
  template: JST['stories/new'],

  className: 'container',

  events: {
    "submit form": "postStory",
  },

  render: function () {
    var renderedContent = this.template({

    });

    this.$el.html(renderedContent);
    return this;
  },

  postStory: function (event) {
    event.preventDefault();
    var storyData = $(event.currentTarget).serializeJSON().story;
    this.model.set(storyData);
    this.model.save({}, {
      success: function () {
        debugger;
      },
      error: function () {
        debugger;
      }
    })
  }
});
