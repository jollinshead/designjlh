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

            var scaleFactor = smallestMeasurement / 400;
            $(".navigation-button").css('width', scaleFactor*25 + "px" );
            $(".navigation-button").css('height', scaleFactor*25 + "px" );
            $(".img-title").css('font-size', 120 * scaleFactor + "%");
            $(".img-desc").css('font-size', 90 * scaleFactor + "%");

            var buttonWidth = $(".navigation-button").width();

            var prevLeft = (browserWidth / 2) - (smallestMeasurement / 2) - buttonWidth; //x - $(".left-arrow").style.width;
            var prevTop = browserHeight / 2; //y + (dy/2) - ($(".left-arrow").style.height / 2);
            var nextLeft = (browserWidth / 2) + (smallestMeasurement / 2) + buttonWidth; //x + dx;
            var nextTop = browserHeight / 2; //y + (dy/2) - ($(".right-arrow").style.height / 2);

            $(".left-arrow").css('left', prevLeft + "px" );
            $(".left-arrow").css('top', prevTop + "px" );
            $(".right-arrow").css('left', nextLeft + "px" );
            $(".right-arrow").css('top', nextTop + "px" );


            // Determine dimensions and position of the 'about' text
            var aboutHeightMin = 190, aboutWidthMin = 50;
            var aboutPaddingWidth = 15, aboutPaddingHeight = 35;
            var aboutHeightToWidthRatio = aboutHeightMin / aboutWidthMin;
            var aboutIdealWidthRatio = 1/9;

            var aboutWidth = browserWidth * aboutIdealWidthRatio;
            if(aboutWidth < aboutWidthMin)
                aboutWidth = aboutWidthMin;

            var aboutHeight = aboutWidth * aboutHeightToWidthRatio;
            if(aboutHeight + aboutPaddingHeight > browserHeight) {
                aboutHeight = browserHeight - aboutPaddingHeight;
                aboutWidth = aboutHeight / aboutHeightToWidthRatio;
            }


            $(".vertical-text").css('width', aboutHeight + "px");
            $(".vertical-text").css('height', aboutWidth + "px");

            $(".vertical-text").css('bottom', aboutPaddingHeight - aboutWidth + "px");
            $(".vertical-text").css('left', aboutPaddingWidth + "px");
            $(".vertical-text").css('font-size', 80 * aboutHeight / aboutHeightMin + "%");


            //document.getElementById("debug-print").innerHTML="Height: " + browserHeight + ", Width: " + browserWidth;
            document.getElementById("debug-print").innerHTML="aboutHeight: " + aboutHeight + ", browserHeight: " + browserHeight + ", aboutWidth: " + aboutWidth + ", browserWidth: " + browserWidth;

        }
    };

}(jQuery));