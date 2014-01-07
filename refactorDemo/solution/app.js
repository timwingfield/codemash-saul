var Country = Backbone.Model.extend({
  parse: function(response, options){
    var abq = {lat: 35.1107, lng: -106.6100};
        geoPoint = {lat: response.latlng[0], lng: response.latlng[1]};

    response.distanceFromAbq = this.distHaversine(abq, geoPoint);
  
    return response;
  },

  rad: function(x) { return x*Math.PI/180; },

  distHaversine: function(p1, p2) {
    var R = 3959, // earth's mean radius in miles
        dLat  = this.rad(p2.lat - p1.lat),
        dLong = this.rad(p2.lng - p1.lng),

        a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) * Math.sin(dLong/2) * Math.sin(dLong/2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)),
        d = R * c;

    return d.toFixed(0);
  }
    
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
    'click button' : 'selectCountry'
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
