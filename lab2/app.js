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

  events: {
    "click #jesse-ize": "makeModelJesse" 
  },

  initialize: function(){
    this.model.on('change', this.render, this); 
  },

  render: function(){
    var html = _.template($("#tread-lightly").html(), this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  makeModelJesse: function(){
    this.model.set({name: "Jesse Pinkman", occupation: "Assistant Cook", alias: "Cap'n Cook"});                
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
 *    - Call render in the initialization function
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
    "click #next" : "nextPerson",
    "click #previous" : "previousPerson"
  },

  initialize: function(){
    this.collection = new Backbone.Collection(JSON.parse(moreJson));
    this.model = this.collection.findWhere({name: "Saul McGill"});
    // bind to the model change event
    _.bindAll(this, 'render');
    this.model.on('change', this.render, this); 
    this.render();
  },

  render: function(){
    var html = _.template($("#fat-stacks-yo").html(), this.model.toJSON());
    this.$el.html(html);
    return this;
  },


  //WTF? Change is not firing on these two
  nextPerson: function(){
    // HINT: this.collection.indexOf(this.model)
    var currentIndex = this.collection.indexOf(this.model);
    this.model = this.collection.at(currentIndex - 1);
    this.render();
  },

  previousPerson: function(){
    // HINT: this.collection.indexOf(this.model)
    var currentIndex = this.collection.indexOf(this.model);
    this.model = this.collection.at(currentIndex + 1);
    this.render();
  }

});
