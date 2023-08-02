// Get the color from local storage and apply it to the theme
if (localStorage.getItem("color")) {
  var color = localStorage.getItem("color");
  document.querySelector("#color").setAttribute(
    "href",
    "../assets/css/" + color + ".css"
  );
}

// Check if the dark mode is enabled and apply it to the body class
if (localStorage.getItem("dark")) { 
  document.querySelector("body").classList.add("dark-only");
}

// Create the customizer links and append them to the body
var customizerLinks = document.createElement("div");
customizerLinks.className = "customizer-links";
customizerLinks.innerHTML = '<div class="nav flex-column nac-pills" id="c-pills-tab" role="tablist" aria-orientation="vertical">\
  <a class="nav-link" id="c-pills-layouts-tab" data-bs-toggle="pill" href="#c-pills-layouts" role="tab" aria-controls="c-pills-layouts" aria-selected="false" data-original-title="">\
    <div class="settings"><i class="iconly-Setting icli"></i></div><span>Check layouts</span>\
  </a> \
  <a class="nav-link" id="c-pills-home-tab" data-bs-toggle="pill" href="#c-pills-home" role="tab" aria-controls="c-pills-home" aria-selected="false" data-original-title="">\
    <div class="settings"><i class="icon-settings"></i></div><span>Quick option</span>\
  </a> \
  <a class="nav-link" target="_blank" href="https://pixelstrap.freshdesk.com/" data-original-title="">\
    <div><i class="icon-support"></i></div><span>Support</span>\
  </a> \
  <a class="nav-link" target="_blank" href="https://docs.pixelstrap.com/admiro/html/document/" target="_blank" data-original-title="">\
    <div><i class="icon-settings"></i></div><span>Document</span>\
  </a> \
  <a class="nav-link" target="_blank" href="http://admin.pixelstrap.com/admiro/theme/landing-page.html#frameworks" data-original-title="">\
    <div><i class="icon-panel"></i></div><span>Check features</span>\
  </a> \
  <a class="nav-link" target="_blank" href="https://1.envato.market/3GVzd" data-original-title="">\
    <div><i class="icon-shopping-cart-full"></i></div><span>Buy now</span>\
  </a>\
</div>';
document.querySelector("body").appendChild(customizerLinks);

// Create the customizer container and append it to the body
var customizerContain = document.createElement("div");
customizerContain.className = "customizer-contain";
customizerContain.innerHTML = '<div class="tab-content" id="c-pills-tabContent">\
  <div class="customizer-header"><i class="icofont-close icon-close"></i><h5>Preview Settings</h5><p class="mb-0">Try It Real Time <i class="fa fa-thumbs-o-up txt-primary"></i></p></div>\
  <div class="customizer-body custom-scrollbar">\
    <div class="tab-pane fade" id="c-pills-home" role="tabpanel" aria-labelledby="c-pills-home-tab">\
      <h6>Layout Type</h6>\
      <ul class="main-layout layout-grid">\
        <li data-attr="ltr" class="active">\
          <div class="header bg-light"><ul><li></li><li></li><li></li></ul></div>\
          <div class="body"><ul><li class="bg-light sidebar"></li><li class="bg-light body"><span class="badge badge-primary">LTR</span></li></ul></div>\
        </li>\
        <li data-attr="rtl">\
          <div class="header bg-light"><ul><li></li><li></li><li></li></ul></div>\
          <div class="body"><ul><li class="bg-light body"><span class="badge badge-primary">RTL</span></li><li class="bg-light sidebar"></li></ul></div>\
        </li>\
        <li data-attr="ltr" class="box-layout px-3">\
          <div class="header bg-light"><ul><li></li><li></li><li></li></ul></div>\
          <div class="body"><ul><li class="bg-light sidebar"></li><li class="bg-light body"><span class="badge badge-primary">Box</span></li></ul></div>\
        </li>\
      </ul>\
      <!-- Rest of the HTML content -->\
    </div>\
  </div>\
</div>';
document.querySelector("body").appendChild(customizerContain);

// Rest of the code and event listeners
// ...

// You will need to add the appropriate event listeners and functions for the rest of the jQuery functionality.
