Scrivendo.Views.Navbar = Backbone.View.extend({
  template: JST['navbar/navbar'],

  initialize: function (options) {
    this.router = options.router;

    this.listenTo(this.router, "route", this.handleRoute)
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  handleRoute: function (routeName, routeParams) {
    this.$el.find(".active").removeClass("active");
    this.$el.find("." + routeName).addClass("active");
  },

  logout: function (event) {
    event.preventDefault();
    $.ajax({
      url: "/session/",
      type: "DELETE",
      success: function () {
        window.location = "/";
      }
    });
  }
});
