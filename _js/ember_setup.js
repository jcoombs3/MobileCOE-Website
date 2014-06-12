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

App.Store = DS.Store.extend({
  revision: 12,
  adapter: "DS.FixtureAdapter"
});

App.TopicsRoute = Ember.Route.extend({
  model : function(){
    return topics;
  }
})



var topics = [{
    "id" : 1,
    "appName" : "A",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "false",
    "dataKiosk" : "false",
    "dataBrandColor" : "#ff0"
  },

  {
    "id" : 2,
    "appName" : "B",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "true",
    "dataKiosk" : "true",
    "dataBrandColor" : "blue"
  },

  {
    "id" : 2,
    "appName" : "C",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "false",
    "dataBrandColor" : "green"
  },

  {
    "id" : 3,
    "appName" : "D",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "false",
    "dataKiosk" : "true"
  },


  {
    "id" : 4,
    "appName" : "E",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },


  {
    "id" : 5,
    "appName" : "F",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "false"
  },

  {
    "id" : 6,
    "appName" : "G",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "true",
    "dataIphone" : "true",
    "dataKiosk" : "true"
  },


  {
    "id" : 7,
    "appName" : "H",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "false"
  },


  {
    "id" : 8,
    "appName" : "I",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "true",
    "dataKiosk" : "true"
  },


  {
    "id" : 9,
    "appName" : "J",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },


  {
    "id" : 10,
    "appName" : "K",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "true"
  },


  {
    "id" : 11,
    "appName" : "L",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },


  {
    "id" : 12,
    "appName" : "M",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },


  {
    "id" : 13,
    "appName" : "N",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "false"
  },
  {
    "id" : 14,
    "appName" : "O",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },
  {
    "id" : 15,
    "appName" : "P",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "true",
    "dataKiosk" : "true"
  },
  {
    "id" : 16,
    "appName" : "Q",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },
  {
    "id" : 17,
    "appName" : "R",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "true"
  },
  {
    "id" : 18,
    "appName" : "S",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "true"
  },
  {
    "id" : 19,
    "appName" : "T",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "true",
    "dataIphone" : "true",
    "dataKiosk" : "false"
  },
  {
    "id" : 20,
    "appName" : "U",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "false",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },
  {
    "id" : 21,
    "appName" : "V",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "true"
  },
  {
    "id" : 22,
    "appName" : "W",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "false"
  },
  {
    "id" : 23,
    "appName" : "X",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "false"
  },
  {
    "id" : 24,
    "appName" : "Y",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "false",
    "dataIpad" : "true",
    "dataIphone" : "false",
    "dataKiosk" : "true"
  },
  {
    "id" : 25,
    "appName" : "Z",
    "company" : "companyName",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "true",
    "dataKiosk" : "false"
  }]

