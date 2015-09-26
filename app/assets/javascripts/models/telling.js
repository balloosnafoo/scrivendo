Scrivendo.Models.Telling = Backbone.Model.extend({
  urlRoot: 'api/tellings',

  story: function () {
    if (!this._story) {
      this._story = new Scrivendo.Models.Story();
    }

    return this._story;
  },

  critiques: function () {
    if (!this._critiques) {
      this._critiques = new Scrivendo.Collections.Critiques([], {telling: this});
    }

    return this._critiques;
  },

  parse: function (response) {
    if (response.critiques) {
      this.critiques().set(response.critiques, {parse: true});
      delete response.critiques;
    }

    if (response.story) {
      this.story().set(response.story);
      delete response.story;
    }

    return response;
  }
})
