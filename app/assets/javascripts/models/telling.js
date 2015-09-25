Scrivendo.Models.Telling = Backbone.Model.extend({
  urlRoot: 'api/tellings',

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

    return response
  }
})
