var source = $("#entry-template").html(); 
var template = Handlebars.compile(source); 

var data = {apps: [{
	"appName" : "A",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "false",
	"dataIphone" : "false",
	"dataKiosk" : "false",
	"brandColor" : '#996666'
},

{
	"appName" : "B",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "false",
	"dataIpad" : "true",
	"dataIphone" : "true",
	"dataKiosk" : "true",
	"brandColor" : '#CC6633'
},

{
	"appName" : "C",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "false",
	"dataIphone" : "true",
	"dataKiosk" : "false",
	"brandColor" : '#003333'
},

{
	"appName" : "D",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "false",
	"dataIphone" : "false",
	"dataKiosk" : "true",
	"brandColor" : '#0066FF'
},


{
	"appName" : "E",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "false",
	"dataIpad" : "true",
	"dataIphone" : "false",
	"dataKiosk" : "false",
	"brandColor" : "#993300"
},


{
	"appName" : "F",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "false",
	"dataIpad" : "false",
	"dataIphone" : "true",
	"dataKiosk" : "false",
	"brandColor" : '#33CCCC'
},

{
	"appName" : "G",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "true",
	"dataIphone" : "true",
	"dataKiosk" : "true",
	"brandColor" : '#0066FF'
},


{
	"appName" : "H",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "false",
	"dataIpad" : "false",
	"dataIphone" : "true",
	"dataKiosk" : "false",
	"brandColor" : '#993300'
},


{
	"appName" : "I",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "false",
	"dataIpad" : "true",
	"dataIphone" : "true",
	"dataKiosk" : "true",
	"brandColor" : '#33CCCC'
},


{
	"appName" : "J",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "false",
	"dataIpad" : "true",
	"dataIphone" : "false",
	"dataKiosk" : "false",
	"brandColor" : '#006699'
},


{
	"appName" : "K",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "false",
	"dataIphone" : "true",
	"dataKiosk" : "true",
	"brandColor" : '#33CCCC'
},


{
	"appName" : "L",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "false",
	"dataIpad" : "true",
	"dataIphone" : "false",
	"dataKiosk" : "false",
	"brandColor" : '#CC6633'
},


{
	"appName" : "M",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "false",
	"dataIphone" : "false",
	"dataKiosk" : "false",
	"brandColor" : '#0066FF'
},


{
	"appName" : "N",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "false",
	"dataIphone" : "true",
	"dataKiosk" : "false",
	"brandColor" : '#993300'
},
{
	"appName" : "O",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "true",
	"dataIphone" : "false",
	"dataKiosk" : "false",
	"brandColor" : '#FFFFCC'
},
{
	"appName" : "P",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "false",
	"dataIpad" : "true",
	"dataIphone" : "true",
	"dataKiosk" : "true",
	"brandColor" : '#006699'
},
{
	"appName" : "Q",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "false",
	"dataIphone" : "false",
	"dataKiosk" : "false",
	"brandColor" : "#CC99FF"
},
{
	"appName" : "R",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "false",
	"dataIpad" : "true",
	"dataIphone" : "false",
	"dataKiosk" : "true",
	"brandColor" : '#FFFFCC'
},
{
	"appName" : "S",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "false",
	"dataIphone" : "true",
	"dataKiosk" : "true",
	"brandColor" : '#CC6633'
},
{
	"appName" : "T",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "true",
	"dataIphone" : "true",
	"dataKiosk" : "false",
	"brandColor" : "#FF3333"
},
{
	"appName" : "U",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "false",
	"dataIpad" : "false",
	"dataIphone" : "false",
	"dataKiosk" : "false",
	"brandColor" : '#006699'
},
{
	"appName" : "V",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "false",
	"dataIpad" : "false",
	"dataIphone" : "true",
	"dataKiosk" : "true",
	"brandColor" : "#0066FF"
},
{
	"appName" : "W",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "true",
	"dataIphone" : "false",
	"dataKiosk" : "false",
	"brandColor" : '#0066FF'
},
{
	"appName" : "X",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "false",
	"dataIphone" : "true",
	"dataKiosk" : "false",
	"brandColor" : '#FF3333'
},
{
	"appName" : "Y",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "false",
	"dataIpad" : "true",
	"dataIphone" : "false",
	"dataKiosk" : "true",
	"brandColor" : '#003333'
},
{
	"appName" : "Z",
	"company" : "companyName",
	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
	"dataAndroid" : "true",
	"dataIpad" : "false",
	"dataIphone" : "true",
	"dataKiosk" : "false",
	"brandColor" : '#CC99FF'
}]}





Handlebars.registerHelper('list', function(items, options) {
  var out = "<ul>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li data-android = '" + items[i].dataAndroid + " ' data-ipad = '"+items[i].dataIpad+"' data-iphone = ' "+items[i].dataIphone+"' data-kiosk = '"+items[i].dataKiosk + "'><div class='app-bar'> </div> <div class='content'> <div class='app'><div class='overview'><div class='img img-thumbnail'> </div> <div class='title'> </div> </div> <div class='load-container'> <div class='load'> <div class='icon icon-ribbon' style='color:" + items[i].brandColor + ";'></div> <div class='img img-enlarge'> </div> <div class='btn load-btn'></div> </div><div class='shed-bar'> </div>  <div class='load-anim-container'> <div class='load-bar'> </div> <div class='load-anim'></div></div> </div>  </div></div></li>";
  }

  return out + "</ul>";
});

$('body').append(template(data));

