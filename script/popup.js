var popup = new OpenLayers.Popup("chicken",
                   new OpenLayers.LonLat([107,39]),
                   new OpenLayers.Size(200,200),
                   "example popup",
                   true,
                   function(){
                   	alert("aaaa");
                   });

map.addPopup(popup);