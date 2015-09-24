Scrivendo.Views.HomeShow = Backbone.View.extend({
  template: JST['home/show'],

  className: 'container',

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
