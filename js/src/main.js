// main.js
(function($) {
//----------------------------------------------------
//  버튼
  var lBtn         = $('.l_btn');
  var rBtn         = $('.r_btn');
// 인디케이트
  var indicator    = $('.indicator').children('ol');
  var indicatorLi  = indicator.children();
// 배경 이미지
  var adBanner     = $('#adBanner');
  var bgBanner     = $('.banner_wrap');
  var bgBannerList = bgBanner.children();
// 기타 설정
  var i            = 1;
  var timed        = 7000;
  var autoMove;
// ---------------------------------------------------

// indicator 클릭 
indicatorLi.on('click',function(e) {
  e.preventDefault() ;

  var _this        = $(this);
  var index        = _this.index();
  // console.log(index);

  BannerAll(index);
});
// ---------------------------------------------------
// 사용 기능 함수처리
function BannerAll(index){
  // indicator 선택 체크 
  indicatorLi.eq(index).addClass('active');
  indicatorLi.eq(index).siblings().removeClass('active');

  // 배경 이미지 나타나게 만들기
  bgBannerList.eq(index).siblings().animate({opacity:0},function() {
    bgBannerList.eq(index).addClass('active');
    bgBannerList.eq(index).siblings().removeClass('active').css({opacity:1});
  });
}

// -----------------------------------------------------
function SetIn(){
  autoMove = setInterval( 
    function(){ 
      ++i;
      if(i >= 5){
        i = 0;
      }
      console.log(i);
      BannerAll(i); 
    } , timed);
  
}

function ClearIn(){
  // autoMove = clearInterval(); 
  clearInterval(autoMove);
}

SetIn();

adBanner.on({'mouseenter': ClearIn,'mouseleave':SetIn });
// -------------------------------------------------------

})(this.jQuery);