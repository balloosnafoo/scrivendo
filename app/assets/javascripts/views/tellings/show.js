Scrivendo.Views.TellingsShow = Backbone.View.extend({
  template: JST['tellings/show'],

  className: "container",

  events: {
    "submit form": "postCritique"
  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      story: this.model.story(),
      telling: this.model
    });

    this.$el.html(renderedContent);
    return this;
  },

  postCritique: function (event) {
    event.preventDefault();
    critiqueData = $(event.currentTarget).serializeJSON().critique;
    var critique = new Scrivendo.Models.Critique(critiqueData);
    critique.save({telling_id: this.model.id}, {
      success: function () {
        this.model.critiques().add(critique);
        this.render();
      }.bind(this),
      error: function (critique, response) {
        this.errors = JSON.parse(response.responseText);
        this.render();
      }.bind(this)
    })
  },
});
