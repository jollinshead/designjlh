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

    $(".toggle-text").click(function () {
        $(".img-desc").toggle(200);
        $(".img-title").toggle(200);

        $(".left-arrow").toggle(200);
        $(".right-arrow").toggle(200);

        if ($(".hide-var").css('opacity') == '0') {
            $(".hide-var").css('opacity', '1');
        }
        else {
            $(".hide-var").css('opacity', '0');
        }
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

