Scrivendo.Models.Story = Backbone.Model.extend({
  urlRoot: "api/stories",

  tellings: function () {
    if (!this._tellings) {
      this._tellings = new Scrivendo.Collections.Tellings([], {story: this});
    }
    return this._tellings
  },

  parse: function (response) {
    if (response.tellings) {
      this.tellings().set(response.tellings, {parse: true});
      delete response.tellings;
    }

    return response;
  }
});
