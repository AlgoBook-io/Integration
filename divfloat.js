  $('document').ready(function(){
    $(window).scroll(function(){
        var k_offset = $("#k").offset();
        var j_offset = $("#j").offset();
        if ($(window).scrollTop() + $(window).height() > k_offset.top + 10) {
            if (k_offset.left > 0) {
                $("#k").animate({"left": 0},2000);
            }
        }
        if ($(window).scrollTop() + $(window).height() > j_offset.top + 10) {
            if (j_offset.left < 0) {
                $("#j").animate({"left": 0},2000);
            }
        }
    });
  });