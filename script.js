// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("menuTopUnderline");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");

    while(current.length != 0) {
      current[0].classList.remove("active");
    }
    for(var j = 0; j < btns.length; j++) {
      if(this.innerText == btns[j].innerText) {
        btns[j].classList.add("active");
      }
    }
  });
}


// About
$(document).ready(function(){
$grid.masonry('layout');

  $(".menu-top > .text-align-right").click(function(){
    $("#thumnailView").hide();
    $("#about").show();
    $grid.masonry('layout');
  });

  $(".menu-top > .text-align-center").click(function(){
    $("#thumnailView").show();
    $("#about").hide();
    $grid.masonry('layout');
  });

  $(".menu-top-mobile > .text-align-right").click(function(){
    $("#thumnailView").hide();
    $("#about").show();
    $grid.masonry('layout');
  });

  $(".menu-top-mobile-sub > .text-align-center").click(function(){
    $("#thumnailView").show();
    $("#about").hide();
    $grid.masonry('layout');
  });
});




// Masonry: https://masonry.desandro.com
var $grid = $('.thumbnail-view').masonry({
  // options...   isFitWidth: true
  itemSelector: '.thumbnail-view-item',
  horizontalOrder: true,
  columnWidth: '.thumbnail-view-sizer',
  percentPosition: true
  // columnWidth: 0.01,
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
// layout after everything loaded
$(window).on( 'load', function() {
  $grid.masonry('layout');
});


// // init Masonry after all images have loaded
// var $grid = $('.thumbnail-view').imagesLoaded( function() {
//   $grid.masonry({
//     percentPosition: true,
//     columnWidth: '.thumbnail-view-sizer',
//     // columnWidth: 0.01,
//     itemSelector: '.thumbnail-view-item',
//     horizontalOrder: true
//   });
// });



// Mobile - Categories
function menuTopDropdown() {
  var x = document.getElementById("menuTopMobileSub");
  var y = document.getElementById("btnDropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
    // y.style.color = "gray";
    y.innerHTML = "☰";
  } else {
    x.style.display = "none";
    // y.style.color = "#fefefe";
    y.innerHTML = "‒";
  }
}



// // Filter
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") {
//     c = "";
//   }
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) {
//       w3AddClass(x[i], "show");
//     }
//   }
// }

// Filter
function filterSelection(c) {
  var x = document.getElementsByClassName("filterDiv");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("show");

    if (c == "all" || x[i].classList.contains(c)) {
      x[i].classList.add("show");
    }
  }

  var x = window.matchMedia("screen and (max-width:450px),(max-height:450px)")
  responsive(x)
  x.addListener(responsive)

  function responsive(x) {
    if (x.matches) { // Mobile view
      // $grid.masonry('layout');
      var thumbnailView = document.getElementsByClassName("thumbnail-view")[0];
      var thumbnailViewItem = thumbnailView.getElementsByClassName("thumbnail-view-item");
      for(var i=0; i<thumbnailViewItem.length; i++) {
        var target = thumbnailViewItem[i].getElementsByClassName("filterDiv")[0];
        if(!target.classList.contains("show")) {
          thumbnailViewItem[i].style.display = "none";
        }
        else {
          thumbnailViewItem[i].style.display = "";
        }
      }
      // $grid.masonry('layout');

    } else { // Desktop view
      // $grid.masonry('layout');
      var thumbnailView = document.getElementsByClassName("thumbnail-view")[0];
      var thumbnailViewItem = thumbnailView.getElementsByClassName("thumbnail-view-item");
      for(var i=0; i<thumbnailViewItem.length; i++) {
        var target = thumbnailViewItem[i].getElementsByClassName("filterDiv")[0];
        if(!target.classList.contains("show")) {
          thumbnailViewItem[i].style.display = "";
        }
        else {
          thumbnailViewItem[i].style.display = "";
        }
      }
      // $grid.masonry('layout');
    }
  }
}
