        $(function () {

            $(".toggle-text").click(function() {
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

                    $(".toggle-about").click(function(){
                            $(".container").fadeToggle( "slow", "linear" );
                       });
                }(jQuery));



        document.addEventListener('keydown', function(event) {
            if($(".hide-var").css('opacity') == '0') {
                if (event.keyCode == 37) {
                    document.getElementById('Prev').click();

                }
                else if (event.keyCode == 39) {
                    document.getElementById('Next').click();
                }
            }

        }, true);

