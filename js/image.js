$(function () {
    $('a[href="#show"]').on('click', function(event) {
        event.preventDefault();
        $('#show').addClass('open');
        if ($(document).height() > $(window).height()) {
             var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
             $('html').addClass('noscroll').css('top',-scrollTop);
        }
        console.log($(this).firstChild);
    });

    $('#show').on('click keyup', function(event) {
        if (event.target == this || event.keyCode == 27) {
            $(this).removeClass('open');
            var scrollTop = parseInt($('html').css('top'));
            $('html').removeClass('noscroll');
            $('html,body').scrollTop(-scrollTop);
        }
    });
});
