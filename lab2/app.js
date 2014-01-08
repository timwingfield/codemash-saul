/*
 *
 * Some json to make life easier in the browser console.
 * 
 */


var someJson = '{"name":"Walter White", "occupation":"Chemistry Teacher", "alias":"Heisenberg", "whereabouts":"unknown"}';


/*
 * Intro to Backbone.js Lab
 *
 * In this lab we're going to load a backbone collection
 * and navigate the collection using two buttons.
 *
 *
 * STEP 1:
 *    - Create the model in the console
 *    - Pass the model to the view when creating the view
 *    - Call render on the view
 *
 * STEP 2 (Refactor):
 *    - Create the model in the view's initialization function
 *    - Bind model change to render
 *    - Call render in the initializion function
 *
 * STEP 3:
 *    - Create the add whereabouts event
 *    - Create the add whereabouts function
 *    - Add the whereabouts of Walter White
 *
 */

var labView = Backbone.View.extend({
  el: '.main',

  events: {
    // an event for #add-whereabouts will be needed
  },

  initialize: function(){
    // bind to the model change event
  },

  render: function(){
    var html = _.template($("#fat-stacks-yo").html(), this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  addWhereabouts: function(){
    //HINT: this.$el.find('#whereabouts')
  }

});
