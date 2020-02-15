  $('document').ready(function(){
    $(window).scroll(function(){
        var left_class = $("#left").attr("class");

        if (typeof left_class !== typeof undefined && left_class !== false) {
            if ($(window).scrollTop() + $(window).height() > $("." + (left_class)).offset().top) {
                if ($("." + (left_class)).offset().left < 0) {
                    $("#left").animate({"left": 0},2000);
                    $("." + (left_class)).removeAttr("id");
                }
                else if ($("." + (left_class)).offset().left > 0) {
                    $("#left").animate({"left": 0},2000);
                    $("." + (left_class)).removeAttr("id");
                }
            }
        }
    });
    // A trigger function need for every floating div
    var i;
    for (i=0; i<8; i++) {
        $(window).trigger( "scroll" );
    }
  });
