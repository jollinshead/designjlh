        $(function () {

            $(".toggle-text").click(function(){
                    $(".img-desc").toggle(200);
                    $(".img-title").toggle(200);
               });
        });

        $(function () {

                    $(".toggle-about").click(function(){
                            $(".container").fadeToggle( "slow", "linear" );
                       });
                }(jQuery));



        document.addEventListener('keydown', function(event) {
            if (event.keyCode == 37) {
                document.getElementById('Prev').click();

            }
            else if (event.keyCode == 39) {
                document.getElementById('Next').click();
            }

            else if (event.keyCode == 40) {
                 document.getElementById('More').click();
            }
        }, true);

