Scrivendo.Views.StoriesNew = Backbone.View.extend({
  template: JST['stories/new'],

  className: 'container',

  render: function () {
    var renderedContent = this.template({

    });

    this.$el.html(renderedContent);
    return this;
  }
});
