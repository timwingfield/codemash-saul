/*
 *
 * Some json variables to make life easier in the browser console.
 * 
 */

var someJson = '{"name":"Walter White", "occupation":"Chemistry Teacher", "alias":"Heisenberg"}';

var moreJson = '[{"name": "Walter White", "occupation":"Chemistry Teacher", "alias":"Heisenberg"},' +
                '{"name": "Jesse Pinkman", "occupation":"Assistant Cook", "alias":"Jesse Jackson"},' + 
                '{"name": "Gustavo Fring", "occupation":"Restaurateur", "alias":"Gus"},' + 
                '{"name": "Saul McGill", "occupation":"Criminal Defense Attorney", "alias":"Saul Goodman"},' + 
                '{"name": "Walter White Jr.", "occupation":"Breakfast Eater", "alias":"Flynn"},' + 
                '{"name": "Mike Ehrmantraut", "occupation":"Jack of Many", "alias":"Grandpa"}]';


var demoView = Backbone.View.extend({
  el: '.main',

  render: function(){
    var html = _.template($("#tread-lightly").html(), this.model.toJSON());
    this.$el.html(html);
    return this;
  }

});


/*
 * Intro to Backbone.js Lab
 *
 * In this lab we're going to load a backbone collection
 * and navigate the collection using two buttons.
 *
 *
 * STEP 1:
 *    - Create the collection in the console
 *    - Pass the collection to the view when creating the view
 *    - Call render on the view
 *    - Have the first model in the collection render with the view
 *
 * STEP 2 (Refactor):
 *    - Create the collection in the view's initialization function
 *    - Set this.model to initally be Saul Goodman. (HINT: this.collection.findWhere)
 *
 * STEP 3:
 *    - Create the next and previous events
 *    - Create the next and previous functions
 *    - Don't worry about "next at the last item" or "previous at the first item"
 *
 * BONUS:
 *    - Disable the next button if at the last item
 *    - Disable the previous button if at the first item
 *
 * DOUBLE SECRET BONUS:
 *    - Go to the first item if next is clicked on the last item
 *    - Go to the last item if previous is clicked on the first item 
 *
 */

var labView = Backbone.View.extend({
  el: '.main',

  events: {
    // an event for both #previous and #next will be needed
  },

  initialize: function(){
    // set this.model equal to the first item in the collection
    // bind to the model change event
  },

  render: function(){
    var html = _.template($("#fat-stacks-yo").html(), this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  nextPerson: function(){
    // HINT: this.collection.indexOf(this.model)
  },

  previousPerson: function(){
    // HINT: this.collection.indexOf(this.model)
  }

});
