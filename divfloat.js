  $('document').ready(function(){
    $(window).scroll(function(){
        var left_offset = $("#left").offset();
        var right_offset = $("#right").offset();
        
        if ($(window).scrollTop() + $(window).height() > $("." + ($("#left").attr("class"))).offset().top + 10) {
            if ($("." + ($("#left").attr("class"))).offset().left < 0) {
                $("#left").animate({"left": 0},2000);
                $("." + ($("#left").attr("class"))).removeAttr("id");
            }
            else if ($("." + ($("#left").attr("class"))).offset().left > 0) {
                $("#left").animate({"left": 0},2000);
                $("." + ($("#left").attr("class"))).removeAttr("id");
            }
        }
    });
    // A trigger function need for every floating div
    var i;
    for (i=0; i<8; i++) {
        $(window).trigger( "scroll" );
    }
  });
