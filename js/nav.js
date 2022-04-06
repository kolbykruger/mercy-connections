//Nav
//$( "ul.top .trigger" ).each(function(){$( this ).children('a:first').attr( "onclick", "return false" );});

$('.nav .drop').each(function () {
    if ($(this).find('li').length >= 8) {
        $(this).addClass('column-nav')
    }
})

var hoverTimeout
$('.nav .trigger').hover(
    function () {
        clearTimeout(hoverTimeout)
        $(this).addClass('open').find('.drop').attr('aria-hidden', 'true').attr('aria-expanded', 'false')
        $('.trigger').not(this).removeClass('open')
    },
    function () {
        var $self = $(this)
        hoverTimeout = setTimeout(function () {
            $self.removeClass('open').find('.drop').attr('aria-hidden', 'true').attr('aria-expanded', 'false')
        }, 250)
    }
)

$('.nav .trigger > a').focusin(function () {
    var parent = $(this).parent()
    parent.addClass('open').find('.drop').attr('aria-hidden', 'false').attr('aria-expanded', 'true')
    $('.trigger').not(parent).removeClass('open')
})

$('.nav .drop a:last,.nav .drop input').focusout(function () {
    var parent = $(this).parents().find('.trigger')
    parent.removeClass('open').find('.drop').attr('aria-hidden', 'true').attr('aria-expanded', 'false')
})
