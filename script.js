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

  // $(function() {
  //     $('#prev').mouseenter(function(e) {
  //       $('#prev').addClass('hover');
  //       $('#regular_js .content').show();
  //     }).mouseleave(function(e) {
  //       $('#prev').removeClass('hover');
  //       $('#regular_js .content').hide();
  //     }).click(function(e) {
  //       $('#prev').removeClass('hover');
  //       $('#regular_js .content').hide();
  //     });

  // $('body').unbind('touchmove');
  // $('body').unbind('touchend');
  // $('body').unbind('touchstart');
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

// var x = window.matchMedia("screen and (max-width:450px),(max-height:450px)")
// menuTopDropdown(x)
// x.menuTopDropdown(responsive)
//
// function menuTopDropdown(x) {
//   if (x.matches) {


function menuTopDropdown() {
  var m = document.getElementById("menuTopMobileSub");
  var y = document.getElementById("paddingMenuTop");
  var z = document.getElementById("btnDropdown");

  if (m.style.display === "none") {
  // if (z.innerHTML === "☰") {
    m.style.display = "block";
    y.style.display = "block";
    z.innerHTML = "≡";
  } else {
    m.style.display = "none";
    y.style.display = "none";
    z.innerHTML = "-";
    // z.innerHTML = "⁻";
    // y.innerHTML = "☰";
    // y.innerHTML = "−";
    // y.innerHTML = "∥";
    // z.style.color = "#fefefe";
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



//
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight();
//
// // 스크롤시에 사용자가 스크롤했다는 것을 알림
// $(window).scroll(function(event){
//   didScroll = true;
// });
//
// // hasScrolled()를 실행하고 didScroll 상태를 재설정
// setInterval(function() {
//   if (didScroll) {
//     hasScrolled();
//     didScroll = false;
//   }
// }, 250);
//
// function hasScrolled() { // 동작을 구현
//   var st = $(this).scrollTop();
//
//   // Make sure they scroll more than delta
//   if(Math.abs(lastScrollTop - st) <= delta)
//     return;
//
//   // If they scrolled down and are past the navbar, add class .nav-up.
//   // This is necessary so you never see what is "behind" the navbar.
//   if (st > lastScrollTop && st > navbarHeight){
//     // Scroll Down
//     $("#menu-bottom").hide();
//     // $('header').removeClass('nav-down').addClass('nav-up');
//   } else {
//     // Scroll Up
//     if(st + $(window).height() < $(document).height()) {
//       $("#menu-bottom").show();
//       // $('header').removeClass('nav-up').addClass('nav-down');
//     }
//   } lastScrollTop = st;
//
//   // console.log(hasScrolled);
//   // document.getElementById("menu-bottom").style.display="none";
//   // document.getElementById("menu-bottom").classList.add("mystyle");
// }


$(window).on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    var current = $(window).scrollTop();
    if(wheel<0){
        if(current>1){
           $("#menu-bottom").fadeOut( 200, 'linear');
         }
    }else{
      $("#menu-bottom").fadeIn( 200, 'linear');
    }
});


//Touch 이벤트시 Prev, Next의 Hover 투명도 없앰
document.getElementById("prev").addEventListener("touchstart", touchHover);
document.getElementById("next").addEventListener("touchstart", touchHover);

function touchHover() {
  document.getElementById("prev").style.opacity = "1";
  document.getElementById("next").style.opacity = "1";
}
