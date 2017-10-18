// sub_menu.js

(function($) {
    var lnb = $('#lnb');
    var lnb_a = lnb.find('a');
    var lnbTop = lnb.offset().top;
    // console.log(lnbTop);

    lnb_a.on('click', function(e) {
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 700);
    });

    $(window).on('scroll',function() {
        var _this = $(this);
        var sct   = _this.scrollTop();
        // console.log( sct );

        if(sct >= lnbTop){
            lnb.addClass('fixed');
        }else{
            lnb.removeClass('fixed');
        }
    });

})(this.jQuery);