var aView = Backbone.View.extend({
  render: function(){
    $('.main').html('<h1>Hola Codemashers!</h1>');

    return this;
  }
});

/*
 *
 * Load in the browser, open the browser console.
 *
 * Enter the following into the console:
 * v = new theView();
 * v.render();
 *
 */

var someJson = '{"name":"Walter White", "occupation":"Chemistry Teacher", "alias":"Heizenberg"}';

var viewTwo = Backbone.View.extend({
  initialize: function(){
    this.model = new Backbone.Model(JSON.parse(someJson));
  },

  render: function(){
    $('.main')
      .append('<p>Say my name.</p>')
      .append('<p><b>You\'re ' + this.model.get('alias') + '.</b></p>');

    return this;
  }
});


var viewThree = Backbone.View.extend({
  initialize: function(){
    this.model.on('change', this.render, this);
  },

  render: function(){
    var theHtml = '<ul><li>Name: ' + this.model.get('name') + '</li><li>Occupation: ' + this.model.get('occupation') + '</li><li>Alias: ' + this.model.get('alias') + '</li>';

    $('.main').html(theHtml);

    return this;
  }
});

var viewFour = Backbone.View.extend({
  initialize: function(){
    this.model.on('change', this.render, this);
  },

  render: function(){
    var html = _.template($("#character").html(), this.model.toJSON());

    $('.main').html(html);
    
    return this;
  }

});
