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
        this.collection.add(this.model, {merge: true});
        Backbone.history.navigate(
          "stories/" + this.model.id,
          { trigger: true }
        );
      },
      error: function () {
        debugger;
      }
    })
  }
});
