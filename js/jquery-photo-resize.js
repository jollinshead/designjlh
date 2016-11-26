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



        function getPos(el) {
            for (var lx=0, ly=0;
                 el != null;
                 lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
            return {x: lx,y: ly};
        }



        function updatePhotoHeight() {
            var o = options,
                browserHeight = $(window).height(),
                browserWidth = $(window).width(),
                docWidth = $(document).width();

            var smallestMeasurement = (browserHeight < (browserWidth * 0.74) ? browserHeight : (browserWidth * 0.74)) - 50;

            // Determine dimensions and position of the 'about' text

            var aboutHeightMin = 190, aboutWidthMin = 50;
            var aboutPaddingWidth = 15, aboutPaddingHeight = smallestMeasurement / 30;
            var aboutHeightToWidthRatio = aboutHeightMin / aboutWidthMin;
            var aboutIdealWidthRatio = 1/9;

            var aboutWidth = browserWidth * aboutIdealWidthRatio;
            if(aboutWidth < aboutWidthMin)
                aboutWidth = aboutWidthMin;

            var aboutHeight = aboutWidth * aboutHeightToWidthRatio;
            if(aboutHeight > aboutPaddingHeight + smallestMeasurement) {
                aboutHeight = aboutPaddingHeight + smallestMeasurement;
                aboutWidth = aboutHeight / aboutHeightToWidthRatio;
            }


            $(".vertical-text").css('width', aboutHeight + "px");
            $(".vertical-text").css('height', aboutWidth + "px");

            $(".vertical-text").css('top', aboutHeight - aboutPaddingHeight + "px");
            $(".vertical-text").css('left', aboutPaddingWidth + "px");
            $(".vertical-text").css('font-size', 70 * aboutHeight / aboutHeightMin + "%");

            var imageTop = getPos(document.getElementById("master-work")).y;
            $(".vertical-text").css('top', - aboutPaddingHeight + smallestMeasurement + "px");


            // Images

            $(element).attr('height', smallestMeasurement );
            $(element).attr('width', smallestMeasurement );
            $(element).attr('max-height', smallestMeasurement );
            $(element).attr('max-width', smallestMeasurement );

            $(".img-desc").css('width', smallestMeasurement + "px" );
            $(".img-desc").css('max-width', smallestMeasurement + "px" );
            $(".img-title").css('width', smallestMeasurement + "px" );
            $(".img-title").css('max-width', smallestMeasurement + "px" );
            $(".navigation-keys").css('width', smallestMeasurement + "px" );

            var scaleFactor = smallestMeasurement / 490;
            $(".navigation-button").css('width', scaleFactor*25 + "px" );
            $(".navigation-button").css('height', scaleFactor*25 + "px" );
            $(".img-title").css('font-size', 120 * scaleFactor + "%");
            $(".img-desc").css('font-size', 90 * scaleFactor + "%");

            var buttonWidth = $(".navigation-button").width();


            // Left and Right buttons
            var buttonDistFromImg = 1.5;
            var containerMargin = aboutWidth + aboutPaddingHeight + (buttonDistFromImg * buttonWidth);
            $(".container").css('margin-left', containerMargin + "px" );
            $(".container").css('margin-right', containerMargin + "px" );

            var imageLeft = getPos(document.getElementById("master-work")).x;

            var prevLeft = imageLeft - (buttonDistFromImg * buttonWidth); //x - $(".left-arrow").style.width;
            if(prevLeft < containerMargin - buttonWidth)
                prevLeft = containerMargin - buttonWidth;
            var prevTop = smallestMeasurement * 0.55 - (buttonWidth / 2); //y + (dy/2) - ($(".left-arrow").style.height / 2);
            var nextLeft = imageLeft + smallestMeasurement + ((buttonDistFromImg - 1) * buttonWidth);
            var nextTop = smallestMeasurement * 0.55 - (buttonWidth / 2); //y + (dy/2) - ($(".right-arrow").style.height / 2);

            var moreLeft = prevLeft;
            var moreTop = smallestMeasurement * 0.25 - (buttonWidth / 2);

            $(".left-arrow").css('left', prevLeft + "px" );
            $(".left-arrow").css('top', prevTop + "px" );
            $(".right-arrow").css('left', nextLeft + "px" );
            $(".right-arrow").css('top', nextTop + "px" );
            $(".more-arrow").css('left', moreLeft + "px" );
            $(".more-arrow").css('top', moreTop + "px" );

            //document.getElementById("debug-print").innerHTML="aboutPaddingHeight: " + aboutPaddingHeight;

        }
    };

}(jQuery));