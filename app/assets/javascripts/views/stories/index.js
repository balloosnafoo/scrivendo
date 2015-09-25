Scrivendo.Views.StoriesIndex = Backbone.View.extend({
  template: JST['stories/index'],

  className: "container",

  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      stories: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  }
});
