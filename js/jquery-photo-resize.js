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
                bottomSpacing: 200
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

            var smallestMeasurement = browserHeight < browserWidth ? browserHeight : browserWidth;
            var newHeight = smallestMeasurement - o.bottomSpacing < 200 ? 200 : smallestMeasurement - o.bottomSpacing;
            var newWidth = newHeight;

            $(element).attr('height', newHeight );
            $(element).attr('width', newWidth );
            $(element).attr('max-height', newHeight );
            $(element).attr('max-width', newWidth );

            $(".img-desc").attr('width', newWidth );
            $(".img-desc").attr('max-width', newWidth );
            $(".img-title").attr('width', newWidth );
            $(".img-title").attr('max-width', newWidth );
            $(".navigation-keys").css('width', newWidth + "px" );
        }
    };

}(jQuery));