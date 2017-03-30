/**
 * Created by ht on 2016/11/16.
 */
var mywms = new OpenLayers.Layer.WMS("OpenLayers WMS",
    //geoserver所在服务器地址
    "http://127.0.0.1:8888/geoserver/topp/wms",
    {
        layers: "topp"
    },{
        isBaseLayer: false
    });