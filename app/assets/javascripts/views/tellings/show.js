Scrivendo.Views.TellingsShow = Backbone.View.extend({
  template: JST['tellings/show'],

  className: "container",

  events: {
    "submit form": "postCritique"
  },

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

  postCritique: function (event) {
    event.preventDefault();
    critiqueData = $(event.currentTarget).serializeJSON().critique;
    var critique = new Scrivendo.Models.Critique(critiqueData);
    critique.save({}, {
      success: function () {
        debugger;
      }.bind(this),
      error: function () {
        debugger;
      }.bind(this)
    })
  },

  telling: function () {
    if (!this._telling) {
      this._telling = this.story.tellings().get(this.tellingId);
    }

    return this._telling;
  }
});
