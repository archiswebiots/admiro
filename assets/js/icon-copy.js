(function() {
  "use strict";
  var iconLists = document.querySelectorAll('.icon-lists div');
  for (var i = 0; i < iconLists.length; i++) {
      iconLists[i].addEventListener('click', function() {
          var iconListsDiv = document.querySelector(".icon-lists");
          iconListsDiv.classList.add('m-b-50');
          var faFaIconShowDiv = document.querySelector(".fa-fa-icon-show-div");
          faFaIconShowDiv.style.display = "block";
        //   faFaIconShowDiv.classList.remove('opecity-0');
          var fontClass = this.children[0].className;
        //   var faFaClass = '<i class="' + fontClass + '"></i>';
          var faFaClass1 = '<i class="' + fontClass + '"></i>';
        //   document.getElementById("fclass").innerHTML = faFaClass;
          document.getElementById("fclass1").innerHTML = fontClass;
          var iconMain = document.getElementById("icon_main");
          iconMain.className = fontClass + " fa-2x";
          var inpVal = document.querySelector(".inp-val");
          inpVal.value = faFaClass1;
      });
  }
  var closeIcon = document.querySelector(".close-icon");
  closeIcon.addEventListener('click', function() {
      var iconHoverBottom = document.querySelector(".icon-hover-bottom");
    //   iconHoverBottom.classList.add("opecity-0");
      var faFaIconShowDiv = document.querySelector(".fa-fa-icon-show-div");
      faFaIconShowDiv.style.display = "none";
      var iconListsDiv = document.querySelector(".icon-lists");
      iconListsDiv.classList.remove('m-b-50');
  });
})();

function myFunction() {
  var copyText = document.getElementById("input_copy");
  copyText.select();
  document.execCommand("Copy");
}
