// 미지원 브라우저 indexie.html페이지 띄우기
var userAgent = window.navigator.userAgent;
var isChrome = userAgent.indexOf('Chrome');
var isChromeMobile = userAgent.indexOf('CriOS');
var isSamsungBrowser = userAgent.indexOf('SamsungBrowser');
var isWindows = userAgent.indexOf('Windows NT');
var isEdge = userAgent.indexOf('Edge');
var isIE = userAgent.indexOf('Trident');

// 익스플로러 브라우저 체크
if(isIE > -1){
    window.location.href="indexie.html"
}

// // 크로미움 브라우저가 아닌 경우 체크
// if(isChrome < 0 || isChromeMobile < 0) {
//   window.location.href = "http://naver.com";
// }
//
// // 크로미움 브라우저 체크
// if(isChrome > -1 || isChromeMobile > -1){
//   if(isSamsungBrowser < 0 && isEdge < 0){
//     window.location.href="http://naver.com"
//   }
// }


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

  $(".menu-top > .text-align-right > .btn").click(function(){
    $("#thumnailView").hide();
    $("#about").show();
    $grid.masonry('layout');
  });

  $(".menu-top > .text-align-center > .btn").click(function(){
    $("#thumnailView").show();
    $("#about").hide();
    $grid.masonry('layout');
  });

  $(".menu-top-mobile > .text-align-right > .btn").click(function(){
    $("#thumnailView").hide();
    $("#about").show();
    $grid.masonry('layout');
  });

  $(".menu-top-mobile-sub > .text-align-center > .btn").click(function(){
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
  itemSelector: '.video-thumbnail-view-item',
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
//     itemSelector: '.video-thumbnail-view-item',
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
  var x = window.matchMedia("screen and (max-width:450px),(max-height:450px)")

  if (x.matches) {
    if (m.style.display === "none") {
      m.style.display = "block";
      y.style.display = "block";
      z.innerHTML = "≡";
    } else {
      m.style.display = "none";
      y.style.display = "none";
      z.innerHTML = "-";
      // z.innerHTML = "⁻☰−∥";
    }
  }
}



// // Filter
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("video-filterDiv");
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
  var x = document.getElementsByClassName("video-filterDiv");
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
      var thumbnailViewItem = thumbnailView.getElementsByClassName("video-thumbnail-view-item");

      for(var i=0; i<thumbnailViewItem.length; i++) {
        var target = thumbnailViewItem[i].getElementsByClassName("video-filterDiv")[0];
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
      var thumbnailViewItem = thumbnailView.getElementsByClassName("video-thumbnail-view-item");
      for(var i=0; i<thumbnailViewItem.length; i++) {
        var target = thumbnailViewItem[i].getElementsByClassName("video-filterDiv")[0];
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



// 스크롤 끝까지 내리면 Bottom Menu 삭제함
var isShowMenu = $("#menu-bottom").css("display") == "block";

$(window).resize(function() {
  isShowMenu = $("#menu-bottom").css("display") == "block";
});

$(window).on('mousewheel', function(e){
  var wheel = e.originalEvent.wheelDelta;
  var current = $(window).scrollTop();

  if(isShowMenu) {
    if(wheel<0 && current>1) {
      // $('#menu-bottom').animate({opacity: "0"}, 150);
      $("#menu-bottom").fadeOut( 200, 'linear');
    }
    else {
      // $('#menu-bottom').animate({opacity: "1"}, 150);
      $("#menu-bottom").fadeIn( 200, 'linear');
    }
  }
});

$(window).on('scrollstart', function(){
  if(isShowMenu) {
    console.log("Hello");
      $('#menu-bottom').animate({opacity: "0.5"}, 150);
  }
});

$(window).on('touchstart', function(){
  if(isShowMenu) {
    console.log("Hello");
      $('#menu-bottom').animate({opacity: "0"}, 150);
  }
});


// $(window).scroll(function(e){
//
//   var scrollTop = $(this).scrollTop();
//   var innerHeight = $(this).innerHeight();
//   var scrollHeight = $(this).prop('scrollHeight');
//
//   if(isShowMenu) {
//     if (scrollTop + innerHeight >= scrollHeight) {
//       console.log("1");
//       $('#menu-bottom').animate({opacity: "0"}, 150);
//     }
//     else if (scrollTop + innerHeight < scrollHeight) {
//       console.log("2");
//       $('#menu-bottom').animate({opacity: "1"}, 150);
//     }
//   }
// });


// $(function(){
//   var FirstScroll = 0;
//   var prevScrollTop = $(window).scrollTop(),
//     tp = $(window).scrollTop();
//
//     $(window).scroll(function(e){
//       tp = $(this).scrollTop();
//
//       if ( tp > prevScrollTop ){
//         $('#menu-bottom').animate({opacity: "0"}, 150);
//       }
//       else if( tp <= prevScrollTop ) {
//         $('#menu-bottom').animate({opacity: "1"}, 150);
//       }
//
//       prevScrollTop = tp;
//   });
// });




//Touch 이벤트시 Prev, Next의 Hover 투명도 없앰
document.getElementById("prev").addEventListener("touchstart", touchHover);
document.getElementById("next").addEventListener("touchstart", touchHover);

function touchHover() {
  document.getElementById("prev").style.opacity = "1";
  document.getElementById("next").style.opacity = "1";
}