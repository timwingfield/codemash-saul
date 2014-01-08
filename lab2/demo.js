
var demoView = Backbone.View.extend({
  el: '.main',

  render: function(){
    var html = _.template($("#tread-lightly").html(), this.model.toJSON());
    this.$el.html(html);
    return this;
  }

});
