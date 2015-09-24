Scrivendo.Views.StoriesShow = Backbone.View.extend({
  template: JST['stories/show'],

  className: 'container',

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      story: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});
