// You can also use "$(window).load(function() {"
        $(function () {

            // Slideshow 4
            $("#slider4").responsiveSlides({
                auto: false,
                pager: false,
                nav: true,
                speed: 250,
                prevText: "←",   // String: Text for the "previous" button
                nextText: "→",       // String: Text for the "next" button
                namespace: "callbacks",
                before: function () {
                    $('.events').append("<li>before event fired.</li>");
                },
                after: function () {
                    $('.events').append("<li>after event fired.</li>");
                }
            });
        });