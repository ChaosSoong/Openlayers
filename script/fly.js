$("docunment").ready(function(){
  $("#fly").click(function() {
        var duration = 2000;
        var start = +new Date();
        var pan = ol.animation.pan({
          duration: duration,
          source: /** @type {ol.Coordinate} */ (view.getCenter()),
          start: start
        });
        var bounce = ol.animation.bounce({
          duration: duration,
          resolution: 4 * view.getResolution(),
          start: start
        });
        map.beforeRender(pan, bounce);
        view.setCenter(new ol.proj.fromLonLat([17.4458, 9.95]));
      });
});
