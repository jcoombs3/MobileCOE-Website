//create the application
App = Ember.Application.create({});

App.Router.map(function(){
  this.resource('examples');
  this.resource('topics', function(){
    this.resource('topic', {path: ':topic_id'});
  });
  
})

App.TopicRoute = Ember.Route.extend({
  model: function(params){
    return topics.findBy('id', params.topic_id);
  }
})

App.TopicController = Ember.ObjectController.extend({
  isEditing: false,
  actions:{
    edit: function(){
      this.set('isEditing', true);
    },
    doneEditing: function(){
      this.set('isEditing', false);
    }
  }
})

App.Store = DS.Store.extend({
  revision: 12,
  adapter: "DS.FixtureAdapter"
});

App.TopicsRoute = Ember.Route.extend({
  model : function(){
    return topics;
  }
})

Ember.Handlebars.helper('format-topic', function(date) {
  //if needed I could use this helper to format input/fields
});

var topics = [{
    "appName" : "A",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },

  {
    "appName" : "B",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "true",
    "dataKiosk" : "true"
  },

  {
    "appName" : "C",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "false"
  },

  {
    "appName" : "D",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "false",
    "dataKiosk" : "true"
  },


  {
    "appName" : "E",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },


  {
    "appName" : "F",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "false"
  },

  {
    "appName" : "G",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "true",
    "dataIphone" : "true",
    "dataKiosk" : "true"
  },


  {
    "appName" : "H",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "false"
  },


  {
    "appName" : "I",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "true",
    "dataKiosk" : "true"
  },


  {
    "appName" : "J",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },


  {
    "appName" : "K",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "true"
  },


  {
    "appName" : "L",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },


  {
    "appName" : "M",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },


  {
    "appName" : "N",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "false"
  },
  {
    "appName" : "O",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },
  {
    "appName" : "P",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "true",
    "dataKiosk" : "true"
  },
  {
    "appName" : "Q",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },
  {
    "appName" : "R",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "true"
  },
  {
    "appName" : "S",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "true"
  },
  {
    "appName" : "T",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "true",
    "dataIphone" : "true",
    "dataKiosk" : "false"
  },
  {
    "appName" : "U",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "false",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },
  {
    "appName" : "V",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "true"
  },
  {
    "appName" : "W",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },
  {
    "appName" : "X",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "false"
  },
  {
    "appName" : "Y",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "true"
  },
  {
    "appName" : "Z",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "false"
  }]

