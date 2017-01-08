$(function () {

    // Slideshow 4
    $("#slider4").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 0,
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

var isExpanded = 0;
$(function () {

    $(".toggle-text-on").click(function () {

        isExpanded = 1;

        $(".img-desc").show(0);
        $(".img-title").show(0);

        $(".home-button").show(0);
        $(".right-arrow").hide(0);
        $(".more-arrow").show(0);


    });

    $(".toggle-text-off").click(function () {

        isExpanded = 0;

        $(".img-desc").hide(0);
        $(".img-title").hide(0);

        $(".home-button").hide(0);
        $(".right-arrow").show(0);
        $(".more-arrow").hide(0);

    });

    $(".work").click(function () {

            if(isExpanded == 1){

            }

        });
});

$(function () {

    $(".toggle-about").click(function () {
        $(".container").fadeToggle("slow", "linear");
    });
}(jQuery));


document.addEventListener('keydown', function (event) {
    if (isExpanded == 0) {
        if (event.keyCode == 37 && isExpanded == 0) {
            document.getElementById('Prev').click();

        }
        else if (event.keyCode == 39 && isExpanded == 0) {
            document.getElementById('Next').click();
        }
    }

}, true);

$(function () {
    $('.work').click(function () {
        var imgUrl = $(this).attr('src');
        if (imgUrl != '') {
            window.open(imgUrl, "_self");
        }
    });
}(jQuery));

