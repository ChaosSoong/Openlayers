/**
 * Created by ht on 2016/11/16.
 */
var bou = new OpenLayers.Layer.Vector("省会", {
    styleMap: new OpenLayers.StyleMap({
        pointRadius: 3,
        fillColor: "#ffcc66",
        strokeColor: "#ff9933",
        strokeWidth: 2
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "kml/res1_4m.kml",
        format: new OpenLayers.Format.KML({
            extractStyles: false,
            extractAttributes: false,
            maxDepth: 2
        })
    })
});
var bou1 = new OpenLayers.Layer.Vector("省边界线", {
    styleMap: new OpenLayers.StyleMap({
        pointRadius: 3,
        fillColor: "#ffcc66",
        strokeColor: "#ff9933",
        strokeWidth: 2
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "kml/bou2_4l.kml",
        format: new OpenLayers.Format.KML({
            extractStyles: false,
            extractAttributes: false,
            maxDepth: 2
        })
    })
});

