var Country = Backbone.Model.extend({
  defaults: { distanceFromAbq: "3 parsecs" }
});

var Countries = Backbone.Collection.extend({
  model: Country,
  url: 'http://restcountries.eu/rest/alpha?codes=mx;no;nz;tz;aw'
});

var CountriesView = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, "render");            
    this.collection = new Countries();

    this.collection.on("reset", this.render, this);
    Backbone.on('country:selected', this.loadCountryDetails);

    this.collection.fetch({reset: true});
  },

  render: function(){
    this.collection.each(function(m){
      v = new CountryView({model: m});
      this.$el.append(v.render().el);
    }, this);

    return this;
  },

  loadCountryDetails: function(country){
    var $countryDetails = $('#details');                    

    this.countryDetails = this.countryDetails || new CountryDetailsView();
    this.countryDetails.model = country;

    $countryDetails.html(this.countryDetails.render().el);
  }
});

var CountryView = Backbone.View.extend({
  template: _.template($('#country').html()),

  events: {
    'click' : 'selectCountry'
  },

  render: function() {
    html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  },

  selectCountry: function(){
    Backbone.trigger('country:selected', this.model);               
  }
});

var CountryDetailsView = Backbone.View.extend({
  template: _.template($('#country-details').html()),

  render: function(){
    html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});
