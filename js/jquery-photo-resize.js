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
            var aboutPaddingWidth = 15, aboutPaddingHeight =0;// smallestMeasurement / 30;
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

            //$(element).attr('height', smallestMeasurement );
            $(element).attr('width', smallestMeasurement );
            //$(element).attr('max-height', smallestMeasurement );
            $(element).attr('max-width', smallestMeasurement );

            $(".rslides").css('width', smallestMeasurement + "px" );
            $(".rslides").css('max-width', smallestMeasurement + "px" );
            $(".img-desc").css('width', (smallestMeasurement*0.99) + "px" );
            $(".img-desc").css('max-width', (smallestMeasurement*0.99) + "px" );
            $(".img-title").css('width', (smallestMeasurement*0.99) + "px" );
            $(".img-title").css('max-width', (smallestMeasurement*0.99) + "px" );
            $(".navigation-keys").css('width', smallestMeasurement + "px" );

            var scaleFactor = smallestMeasurement / 490;
            // Right arrow = 83 x 71
            var widthRightArrow = smallestMeasurement * 83 / 1000;
            var heightRightArrow = widthRightArrow * 71 / 83;
            // Down arrow = 41 x 108
            var widthDownArrow = smallestMeasurement * 41 / 1000;
            var heightDownArrow = widthDownArrow * 108 / 41;

            $(".right-arrow").css('background-size', widthRightArrow + "px " + heightRightArrow + "px" );
            $(".right-arrow").css('height', smallestMeasurement + "px" );
            $(".right-arrow").css('width', widthRightArrow + "px" );

            $(".more-arrow").css('background-size', widthDownArrow + "px " + heightDownArrow + "px" );
            $(".more-arrow").css('height', browserHeight + "px" );
            $(".more-arrow").css('width', widthDownArrow + "px" );

            $(".img-title").css('font-size', 120 * scaleFactor + "%");
            $(".img-desc").css('font-size', 90 * scaleFactor + "%");

            // Home button = 248 x 248
            $(".home-button").css('height', aboutWidth * 0.5 + "px" );
            $(".home-button").css('width', aboutWidth * 0.5 + "px" );

            var buttonWidth = $(".navigation-button").width();


            // Left and Right buttons
            var buttonDistFromImg = 2;
            var containerMargin = aboutWidth + aboutPaddingHeight + (buttonDistFromImg * buttonWidth);
            $(".container").css('margin-left', containerMargin + "px" );
            $(".container").css('margin-right', containerMargin + "px" );

            var imageLeft = getPos(document.getElementById("master-work")).x;

            var moreLeft = 0.55 * (browserWidth - (imageLeft + smallestMeasurement)) + (imageLeft + smallestMeasurement);
            var moreTop = smallestMeasurement * 0.05; //smallestMeasurement * 0.1 - (buttonWidth / 2);

            $(".right-arrow").css('left', moreLeft + "px" );
            $(".right-arrow").css('top', moreTop + "px" );
            $(".more-arrow").css('left', moreLeft + "px" );
            $(".more-arrow").css('top', moreTop + "px" );

            //document.getElementById("debug-print").innerHTML="aboutPaddingHeight: " + aboutPaddingHeight;
            $("html").css('opacity','1');
        }
    };

}(jQuery));