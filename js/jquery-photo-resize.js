/// <reference path="jquery-1.5.1.min.js" />

/*
 * Adjust photo on browser window resize
 *
 * @example: $('selector').photoResize();
 *
 * @example:
 $('selector').photoResize({
 bottomSpacing:"Bottom Spacing adjustment"
 });
 */

(function ($) {

    $.fn.photoResize = function (options) {

        var element	= $(this),
            defaults = {
                bottomSpacing: 150
            };


        $(element).load(function () {
            updatePhotoHeight();

            $(window).bind('resize', function () {
                updatePhotoHeight();
            });
        });

        options = $.extend(defaults, options);

        function updatePhotoHeight() {
            var o = options,
                browserHeight = $(window).height(),
                browserWidth = $(window).width();

            var smallestMeasurement = (browserHeight < browserWidth ? browserHeight : browserWidth) - 60;
            //var newHeight = smallestMeasurement - o.bottomSpacing < 200 ? 200 : smallestMeasurement - o.bottomSpacing;
            //var newWidth = newHeight;

            $(element).attr('height', smallestMeasurement );
            $(element).attr('width', smallestMeasurement );
            $(element).attr('max-height', smallestMeasurement );
            $(element).attr('max-width', smallestMeasurement );

            $(".img-desc").css('width', smallestMeasurement + "px" );
            $(".img-desc").css('max-width', smallestMeasurement + "px" );
            $(".img-title").css('width', smallestMeasurement + "px" );
            $(".img-title").css('max-width', smallestMeasurement + "px" );
            $(".navigation-keys").css('width', smallestMeasurement + "px" );

            var prevLeft = (browserWidth / 2) - (smallestMeasurement / 2) - 10; //x - $(".left-arrow").style.width;
            var prevTop = browserHeight / 2; //y + (dy/2) - ($(".left-arrow").style.height / 2);
            var nextLeft = (browserWidth / 2) + (smallestMeasurement / 2) + 30; //x + dx;
            var nextTop = browserHeight / 2; //y + (dy/2) - ($(".right-arrow").style.height / 2);

            $(".left-arrow").css('left', prevLeft + "px" );
            $(".left-arrow").css('top', prevTop + "px" );
            $(".right-arrow").css('left', nextLeft + "px" );
            $(".right-arrow").css('top', nextTop + "px" );
        }
    };

}(jQuery));