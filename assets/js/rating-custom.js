
function onload(event) {
   
    var myDataService =  {
        rate:function(rating) {
               return {then:function (callback) {
                   setTimeout(function () {
                       callback((Math.random() * 5)); 
                   }, 1000); 
               }
           }
       }
   }

   var starRating1 = raterJs( {
       starSize:30, 
       rating:5,
       element:document.querySelector("#rater"), 
       rateCallback:function rateCallback(rating, done) {
           this.setRating(rating); 
           done(); 
       }
   }); 

   var starRatingStep = raterJs( {
       starSize:30,
       rating:2.5,
       step:0.5, 
       element:document.querySelector("#rater-step"), 
       rateCallback:function rateCallback(rating, done) {
           this.setRating(rating); 
           done(); 
       }
   }); 

//   var starRating4 = raterJs( {isBusyText:"Rating in progress. Please wait...", 
//        element:document.querySelector("#rater4"), 
//        rateCallback:function rateCallback(rating, done) {
//            starRating4.setRating(rating); 
//            myDataService.rate().then(function (avgRating) {
//                starRating4.setRating(avgRating); 
//                done(); 
//        }); 
//    }}); 

   var starRating2 = raterJs( {
       starSize:30,
       max:5, 
       rating:4, 
       element:document.querySelector("#rater2"), 
       disableText:"Custom disable text!", 
       ratingText:"My custom rating text {rating}", 
       showToolTip:true, 
       rateCallback:function rateCallback(rating, done) {
           starRating2.setRating(rating); 
           starRating2.disable(); 
           done(); 
       }
   }); 

   var starRating3 = raterJs( {
       starSize:30,
       max:8, 
       readOnly:true, 
       rating:4.4, 
       element:document.querySelector("#rater3")
   }); 

   var starRating3 = raterJs( {
       starSize:30,
       max:6, 
       reverse:true,
       rating:1,
       element:document.querySelector("#rater7"),
       rateCallback:function rateCallback(rating, done) {
           this.setRating(rating); 
           done(); 
       }
   }); 

   var starRating5 = raterJs( {
        starSize:30,
        rating:2.4, 
       element:document.querySelector("#rater5"), 
       rateCallback:function rateCallback(rating, done) {
           this.setRating(rating); 
           done(); 
       }, 
       onHover:function(currentIndex, currentRating) {
           document.querySelector('.live-rating').textContent = currentIndex; 
       }, 
       onLeave:function(currentIndex, currentRating) {
           document.querySelector('.live-rating').textContent = currentRating; 
       }
   }); 

   var starRating6 = raterJs( {
        starSize:30,
        rating:3.4, 
       element:document.querySelector("#rater6"), 
       rateCallback:function rateCallback(rating, done) {
           this.setRating(rating); 
           done(); 
       }
   }); 

   
document.querySelector('#rater6-button').addEventListener("click", function() {
   starRating6.clear(); 
   console.log(starRating6.getRating());
}, false); 
// Emoji
// document.querySelectorAll(".feedback li").forEach((entry) =>
//   entry.addEventListener("click", (e) => {
//     if (!entry.classList.contains("active")) {
//       document.querySelector(".feedback li.active").classList.remove("active");
//       entry.classList.add("active");
//     }
//     e.preventDefault();
//   })
// );

// Emoji
document.querySelectorAll(".feedback li").forEach((entry) =>
  entry.addEventListener("click", (e) => {
    if (!entry.classList.contains("active")) {
      document.querySelector(".feedback li.active").classList.remove("active");
      entry.classList.add("active");
    }
    e.preventDefault();
  })
);

}

window.addEventListener("load", onload, false); 