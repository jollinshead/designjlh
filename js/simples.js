$(document).ready(function() {

    $("#imgNext").click(function() {
        var $curr = $('.slideshow img:visible'),
            $next = ($curr.next().length) ? $curr.next() : $('.slideshow img').first();
        $next.css('z-index',2).fadeIn('slow', function() {
            $curr.hide().css('z-index',0);
            $next.css('z-index',1);
        });
    });

    $("#imgPrev").click(function() {
        var $curr = $('.slideshow img:visible'),
            $prev = ($curr.prev().length) ? $curr.prev() : $('.slideshow img').last();
        $prev.css('z-index',2).fadeIn('slow', function() {
            $curr.hide().css('z-index',0);
            $prev.css('z-index',1);
        });
    });

    set

    Interval(function() {
        var $curr = $('.slideshow img:visible'),
            $next = ($curr.next().length) ? $curr.next() : $('.slideshow img').first();
        $next.css('z-index',2).fadeIn('slow', function() {
            $curr.hide().css('z-index',0);
            $next.css('z-index',1);
        });
    }, 6000); // milliseconds
});