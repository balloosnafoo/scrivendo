Scrivendo.Collections.Variants = Backbone.Collection.extend({
  url: "api/variants",

  model: Scrivendo.Models.Variant,

  getOrFetch: function (id) {
    var collection = this;
    var widget = collection.get(id);

    if (widget) {
      widget.fetch();
    } else {
      widget = new collection.model({ id: id });
      collection.add(widget);
      widget.fetch({
        error: function () { collection.remove(widget); }
      });
    }

    return widget;
  }
});
