Scrivendo.Collections.Stories = Backbone.Collection.extend({
  url: "api/stories",

  model: Scrivendo.Models.Story,

  getOrFetch: function (id, fetchOptions) {
    var collection = this;
    var widget = collection.get(id);

    if (widget) {
      widget.fetch();
    } else {
      widget = new collection.model({ id: id });
      collection.add(widget);
      widget.fetch({
        error: function () { collection.remove(widget); },
        fetchOptions
      });
    }

    return widget;
  }
});
