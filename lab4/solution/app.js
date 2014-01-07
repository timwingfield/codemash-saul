var Country = Backbone.Model.extend({
});

var Countries = Backbone.Collection.extend({
  model: Country,
  initialize: function(query) {
    this.url = 'http://restcountries.eu/rest/';
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
  }
});

var SearchView = Backbone.View.extend({
  template: _.template($('#search').html()),

  events: {
    'click #country-search-button': 'search'
  },

  render: function() {
    html = this.template();
    this.$el.append(html);
    return this;
  },

  search: function() {
  }
});

var CountriesView = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this, 'render');
    this.collection = new Countries();
    this.collection.on('reset', this.render, this);
    this.collection.fetch({reset: true});
  },

  events: {
    'click .map-it': 'map'
  },

  render: function() {
    this.collection.each(function(m){
      v = new CountryView({model: m});
      this.$el.append(v.render().el);
    }, this);

    return this;
  },

  map: function(e) {
    var id = $(e.target).data('id');
    var selectCountry = this.collection.where({alpha2Code: id})[0];
    new CountryDetailView({model: selectCountry}).render();
  }
});

var CountryDetailView = Backbone.View.extend({
  el: '#map',
  render: function() {
    var lat = this.model.get('latlng')[0],
        lng = this.model.get('latlng')[1],
        mapOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

    if (lat && lng) {
      var map = new google.maps.Map(this.el, mapOptions);
    } else{
      $(this.el).html("<h4>Map Unavailable<h4>");
    }
  }
});

