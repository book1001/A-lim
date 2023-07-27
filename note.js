// Style 변경: Class

// Style 변경: Class > 첫 번째 Class
document.getElementsByClassName("className")[0].style.display = "none";



// Style 변경: Class > 모든 Class
var changeClass = document.getElementsByClassName("className");
for (let i = 0; i < changeClass.length; i++) {
  changeClass[i].style.display = "none";
}



// <button onclick="buttonOnclick()">시 동작
function buttonOnclick() {
  // <button onclick="buttonOnclick()">시 동작
}



// Responsive 레이아웃: <button onclick="buttonOnclick()">시 동작
function buttonOnclick() {
  var tabletStyle = window.matchMedia("(max-width: 800px)");
  if (tabletStyle.matches) { // ~ Tablet: 800px
    buttonOnclickTablet()
  } else { // PC: 801px ~
    buttonOnclickPC()
  }
}

function buttonOnclickTablet() {
  // ~ Tablet: 800px에서 동작
}

function buttonOnclickPC() {
  // PC: 801px ~에서 동작
}



//////////////////////////////////////////////////////
// 스크린샷 저장: html
// <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
// <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>

// <button type="button" class="btn_download" style="z-index: 8;">이미지 저장하기</button>


// 스크린샷 저장: script
$(function(){
    $(".btn_download").click(function(e){
        html2canvas(document.getElementById("street-view")).then(function(canvas) {
        // html2canvas(document.getElementsByClassName("gm-style")[0]).then(function(canvas) {
            var el = document.createElement("a")
            el.href = canvas.toDataURL("image/jpeg")
            el.download = '이미지.jpg' //다운로드 할 파일명 설정
            el.click()
        })
    })
})
