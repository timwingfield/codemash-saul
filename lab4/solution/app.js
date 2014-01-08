var Country = Backbone.Model.extend({
});

var Countries = Backbone.Collection.extend({
  model: Country,

  constructQuery: function(query) {
    this.url = 'http://restcountries.eu/rest/name/' + query;
  }
});

var SearchView = Backbone.View.extend({
  template: _.template($('#search').html()),

  initialize: function() {
    this.collection = new Countries();
    this.collection.on('reset', this.render, this);
  },

  events: {
    'click .country-search-button': 'search'
  },

  render: function() {
    view = new CountriesView({collection: this.collection});
    view.render();
    return this;
  },

  search: function() {
    var query = this.$el.find('.country-name').val();
    this.collection.constructQuery(query);
    this.collection.fetch({reset: true});
  }
});

var CountriesView = Backbone.View.extend({
  el: '#list-of-countries',

  render: function() {
    this.$el.empty();

    this.collection.each(function(m) {
      var view = new CountryView({model: m});
      this.$el.append(view.render().el);
    }, this);

    return this;
  }
});

var CountryView = Backbone.View.extend({
  template: _.template($('#country').html()),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  events: {
    'click .map-it': 'map'
  },

  render: function() {
    html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  },

  map: function(e) {
    new CountryDetailView({model: this.model}).render();
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
    } else {
      this.$el.html("<h4>Map Unavailable<h4>");
    }
  }
});
