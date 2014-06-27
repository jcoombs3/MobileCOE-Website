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
    var fullLength = $(window).outerHeight() - $('#ribbon').outerHeight()
   // if(document.getElementById('app-content').style.height == $(window).outerHeight() - $('#ribbon').outerHeight()){
      if(document.getElementById('app-content')== null){
        console.log(0);
        this.transitionTo('topics');
      }
   // }
    //check to see if refreshing, if so, return topic route
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
    "appName" : "Target Gift Registry",
    "company" : "Target",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "false",
    "dataKiosk" : "false",
    "dataBrandColor" : "#CC0000",
    "dataBrandColor2" : "#ffffff",
    "dataBrandColor3" : "#7F7F7F",
    "dataBrandColor4" : "#000000",
    "dataBrandColorGradient" : "#de2c2c",

    "titleBG" : "#ffffff",
    "appTitle" : "#7F7F7F",
    "loadBrandColor" : "#CC0000",
    "companyTitle" : "#CC0000",
    "titleArrow" : "#000000",
    "dataIcon" : "icon-target.jpg",
    "brandGradientTop" : "#de2c2c",
    "brandGradientBottom" : "#CC0000",
    "imageTile1" : "target-1.jpg",
    "imageTile1Y" : "-55px",
    "imageTile1S" : "100%",
    "imageTile2" : "target-2.jpg",
    "imageTile2Y" : "-10px",
    "imageTile2S" : "100%",
    "imageTile3" : "target-3.jpg",
    "imageTile3Y" : "-150px",
    "imageTile3S" : "100%",
    "imageTile4" : "target-4.jpg",
    "imageTile4Y" : "0px",
    "imageTile4S" : "150%",
  },

  {
    "id" : 2,
    "appName" : "Ganassi Timeline",
    "company" : "Ganassi Racing",
    "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
    "dataAndroid" : "true",
    "dataIpad" : "false",
    "dataIphone" : "false",
    "dataKiosk" : "false",
    "dataBrandColor" : "#212123",
    "dataBrandColor2" : "#353535", //title background
    "dataBrandColor3" : "#dc1c27", //app title color
    "dataBrandColor4" : "#202020", //arrow title color
    "dataBrandColorGradient" : "#322e2f",

    "titleBG" : "#353535",
    "appTitle" : "#1d1d1d",
    "companyTitle" : "#DDDDDD",
    "titleArrow" : "#dc1c27",
    "dataIcon" : "icon-ganassi.jpg"
  }]

  //,


  // {
  //   "id" : 7,
  //   "appName" : "H",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "false",
  //   "dataIpad" : "false",
  //   "dataIphone" : "true",
  //   "dataKiosk" : "false"
  // },


  // {
  //   "id" : 8,
  //   "appName" : "I",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "false",
  //   "dataIpad" : "true",
  //   "dataIphone" : "true",
  //   "dataKiosk" : "true"
  // },


  // {
  //   "id" : 9,
  //   "appName" : "J",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "false",
  //   "dataIpad" : "true",
  //   "dataIphone" : "false",
  //   "dataKiosk" : "false"
  // },


  // {
  //   "id" : 10,
  //   "appName" : "K",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "true",
  //   "dataIpad" : "false",
  //   "dataIphone" : "true",
  //   "dataKiosk" : "true"
  // },


  // {
  //   "id" : 11,
  //   "appName" : "L",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "false",
  //   "dataIpad" : "true",
  //   "dataIphone" : "false",
  //   "dataKiosk" : "false"
  // },


  // {
  //   "id" : 12,
  //   "appName" : "M",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "true",
  //   "dataIpad" : "false",
  //   "dataIphone" : "false",
  //   "dataKiosk" : "false"
  // },


  // {
  //   "id" : 13,
  //   "appName" : "N",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "true",
  //   "dataIpad" : "false",
  //   "dataIphone" : "true",
  //   "dataKiosk" : "false"
  // },
  // {
  //   "id" : 14,
  //   "appName" : "O",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "true",
  //   "dataIpad" : "true",
  //   "dataIphone" : "false",
  //   "dataKiosk" : "false"
  // },
  // {
  //   "id" : 15,
  //   "appName" : "P",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "false",
  //   "dataIpad" : "true",
  //   "dataIphone" : "true",
  //   "dataKiosk" : "true"
  // },
  // {
  //   "id" : 16,
  //   "appName" : "Q",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "true",
  //   "dataIpad" : "false",
  //   "dataIphone" : "false",
  //   "dataKiosk" : "false"
  // },
  // {
  //   "id" : 17,
  //   "appName" : "R",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "false",
  //   "dataIpad" : "true",
  //   "dataIphone" : "false",
  //   "dataKiosk" : "true"
  // },
  // {
  //   "id" : 18,
  //   "appName" : "S",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "true",
  //   "dataIpad" : "false",
  //   "dataIphone" : "true",
  //   "dataKiosk" : "true"
  // },
  // {
  //   "id" : 19,
  //   "appName" : "T",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "true",
  //   "dataIpad" : "true",
  //   "dataIphone" : "true",
  //   "dataKiosk" : "false"
  // },
  // {
  //   "id" : 20,
  //   "appName" : "U",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "false",
  //   "dataIpad" : "false",
  //   "dataIphone" : "false",
  //   "dataKiosk" : "false"
  // },
  // {
  //   "id" : 21,
  //   "appName" : "V",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "false",
  //   "dataIpad" : "false",
  //   "dataIphone" : "true",
  //   "dataKiosk" : "true"
  // },
  // {
  //   "id" : 22,
  //   "appName" : "W",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "true",
  //   "dataIpad" : "true",
  //   "dataIphone" : "false",
  //   "dataKiosk" : "false"
  // },
  // {
  //   "id" : 23,
  //   "appName" : "X",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "true",
  //   "dataIpad" : "false",
  //   "dataIphone" : "true",
  //   "dataKiosk" : "false"
  // },
  // {
  //   "id" : 24,
  //   "appName" : "Y",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "false",
  //   "dataIpad" : "true",
  //   "dataIphone" : "false",
  //   "dataKiosk" : "true"
  // },
  // {
  //   "id" : 25,
  //   "appName" : "Z",
  //   "company" : "companyName",
  //   "description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
  //   "dataAndroid" : "true",
  //   "dataIpad" : "false",
  //   "dataIphone" : "true",
  //   "dataKiosk" : "false"
  // }]

