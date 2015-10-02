Scrivendo.Views.VariantsIndex = Backbone.View.extend({
  template: JST['variants/index'],

  className: "container",

  render: function () {
    var renderedContent = this.template({
      variants: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  },
});
