Scrivendo.Views.TellingsNew = Backbone.View.extend({
  template: JST['tellings/new'],

  className: "container",

  events: {
    "submit form": "postTelling",
  },

  initialize: function (options) {
    this.story = options.story;
    this.listenTo(this.story, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      story: this.story
    });

    this.$el.html(renderedContent);
    return this;
  },

  postTelling: function (event) {
    event.preventDefault();
    var tellingData = $(event.currentTarget).serializeJSON().telling;
    this.model.set(tellingData);
    this.model.save({}, {
      success: function () {
        Backbone.history.navigate(
          'stories/' + this.story.id + '/tellings/' + this.model.id,
          { trigger: true }
        );
      }.bind(this),
      error: function (telling, response) {
        this.errors = JSON.parse(response.responseText);
        this.render();
      }.bind(this)
    });
  }
});
