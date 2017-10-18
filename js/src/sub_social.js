// sub_social.js
(function($){
  var content = $('#campaign');
  var conBtn  = content.find('dt');
  var conMenu = content.find('dd'); 
  var openDD  = $('#campaign .dd_open');
  conMenu.hide();
  openDD.show();

  var rotate=0;  
  conBtn.on('click', function(e){
    e.preventDefault();
    var _$this = $(this);              
            
    rotate += 180;
    _$this.find('i').css({transform:'rotate('+ rotate +'deg)'});

    conMenu.stop().slideUp();
    _$this.next('dd').stop().slideToggle();
    });
      
})(this.jQuery);