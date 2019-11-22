// When Page Completley Loades
// localStorage Key Name

$(function(){

    PageSetup();
});

// Page Setup
function PageSetup()
{
     //Remove b Icon
     if($("div a img").attr("alt")!==undefined&&$("div a img").attr("alt")==="www.000webhost.com")
     {
        $("div a img").css("width","10")
     }
     //Load Knockout js  functons
      WatchMoreModel.Load();
   

}
var WatchMoreModel = {

    TestingText:ko.observable(""),
    Channels:ko.observableArray(),
    Channel:{Id:-1,Img:"",Link:"",Label:"",HoverText:"",Language:""},
    Load: function () {
      var self = WatchMoreModel;

        self.LoadChannels();

         // Apply Binding 
        ko.applyBindings(self);
    },
    LoadChannels:function(data)
    {
        var self = WatchMoreModel;
        //Remove Channels
        self.Channels.removeAll();

        var channel={};
        //Make one Channel
         channel=ko.toJS(self.Channel);
        channel.Id=1;
        channel.Img="./images/hollywood-banner.jpg";
        channel.Link="https://yifymovies.tv";
        channel.Label="Watch English Movies";
        channel.Language="english";
        channel.HoverText="hindi";
        self.Channels.push(channel);

        //Make Second Channel
         channel= ko.toJS(self.Channel);
        channel.Id=1;
        channel.Img="./images/bollywood-banner.png";
        channel.Link="https://rdxhd.bid";
        channel.Label="Watch Hindi Movies";
        channel.Language="hindi";
        channel.HoverText="english";
        self.Channels.push(channel);
        
    },
    ChannelClick:function(data)
    {
        //Set favorite channel so user will redirect
        localStorage.setItem("favoriteChannel",data.Link);
        // redirct to that url
        window.location.href=data.Link;
    },
    
    
};


