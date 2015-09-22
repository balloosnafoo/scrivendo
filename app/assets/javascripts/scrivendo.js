window.Scrivendo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var stories = new Scrivendo.Collections.Stories();
    var router = new Scrivendo.Routers.Router({
      $rootEl: $('#content'),
      stories: stories
    })

    $("#navbar").html(nav.render().$el);

    Backbone.history.start();
  }
};
