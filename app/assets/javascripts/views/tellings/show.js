Scrivendo.Views.TellingsShow = Backbone.View.extend({
  template: JST['tellings/show'],

  className: "container",

  initialize: function (options) {
    this.story = options.story;
    this.tellingId = options.tellingId

    this.listenTo(this.story, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      story: this.story,
      telling: this.story.tellings().get(this.tellingId)
    });

    this.$el.html(renderedContent);
    return this;
  },
});
