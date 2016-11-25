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


$(function () {

    $(".toggle-text-on").click(function () {

        $(".img-desc").show(0);
        $(".img-title").show(0);

        $(".left-arrow").hide(0);
        $(".right-arrow").hide(0);
        $(".more-arrow").show(0);

        $(".work-head").css("z-index: 1");

    });

    $(".toggle-text-off").click(function () {

        $(".img-desc").hide(0);
        $(".img-title").hide(0);

        $(".left-arrow").show(0);
        $(".right-arrow").show(0);
        $(".more-arrow").hide(0);

        $(".work-head").css("z-index: 900000");

    });
});

$(function () {

    $(".toggle-about").click(function () {
        $(".container").fadeToggle("slow", "linear");
    });
}(jQuery));


document.addEventListener('keydown', function (event) {
    if ($(".hide-var").css('opacity') == '0') {
        if (event.keyCode == 37) {
            document.getElementById('Prev').click();

        }
        else if (event.keyCode == 39) {
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

