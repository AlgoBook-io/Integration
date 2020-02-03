//alert('iam in')

$(function(){
    $('.js-trigger').click(function() {
        //alert('clicked')
        $('html').toggleClass('show-me') 
    });
    $('.conversation__header').on('click', function() {
        $('.conversation').slideToggle(300);
    });
    
    $('.chat__human').on('click', function() {
        $('.conversation').slideToggle(300);
    });
})

// $(document).ready(function() {
//     $("#checking").click(function() {
//         if ($('#checkSide').is(':disabled')) {
//             $('#checkSide').removeAttr('disabled');
//         } else {
//             $("#checkSide").attr('disabled', 'disabled');
//         }
//     });

//     $("#checkSide").click(function() {
//         if ($('#checking').is(':disabled')) {
//             $('#checking').removeAttr('disabled');
//         } else {
//             $("#checking").attr('disabled', 'disabled');
//         }
//     });
// });
