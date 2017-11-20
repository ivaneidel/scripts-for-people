javascript:(function(e, s) {
  e.src = s;
  e.onload = function() {
    var cant = 13;
    jQuery.noConflict();
    function animaPDF(num) {
      jQuery("#viewerContainer").animate(
        { scrollTop: jQuery("#viewerContainer #viewer").height() },
        parseInt(jQuery("#viewerContainer #viewer").height() / num) * 1000,
        "linear"
      );
    };
    jQuery("html, body").on("keyup", function(e) {
      if (e.which == 49) {
        jQuery("#viewerContainer").stop();
        animaPDF(cant);
        cant=cant*2;
      } else {
        cant = 13;
        jQuery("#viewerContainer").stop();
      }
    });
  };
  document.head.appendChild(e);
})(
  document.createElement("script"),
  "https://code.jquery.com/jquery-3.2.1.min.js"
);
