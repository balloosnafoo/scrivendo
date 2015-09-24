Scrivendo.Views.HomeShow = Backbone.View.extend({
  template: JST['home/show'],

  className: 'container',

  render: function () {
    var renderedContent = this.template({
      stories: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  }
});
