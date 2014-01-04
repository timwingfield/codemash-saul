var Country = Backbone.Model.extend({});

var Countries = Backbone.Collection.extend({
  model: Country,
  url: 'http://restcountries.eu/rest/alpha?codes=mx;no;nz;tz;aw'
});

var CountriesView = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, "render");            
    this.collection = new Countries();

    this.collection.on("reset", this.render, this);

    this.collection.fetch({reset: true});
  },

  render: function(){
    this.collection.each(function(m){
      v = new CountryView({model: m});
      this.$el.append(v.render().el);
    }, this);

    return this;
  }
});

var CountryView = Backbone.View.extend({
  template: _.template($('#country').html()),

  render: function() {
    html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  }
});
