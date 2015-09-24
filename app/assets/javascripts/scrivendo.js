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

    var navbar = new Scrivendo.Views.Navbar({
      router: router
    });

    $("#navbar").html(navbar.render().$el);

    Backbone.history.start();
  }
};
