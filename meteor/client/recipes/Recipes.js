//Meteor.subscribe('recipes'); //데이터 불러오기

Template.Recipes.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('recipes');
  });
});

Template.Recipes.helpers({
  recipes: ()=> {
    return Recipes.find({});
  }
});

Template.Recipes.events({
  'click .new-recipe': function() {
    Session.set('newRecipe', true);
  }
});
