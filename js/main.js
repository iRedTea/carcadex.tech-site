$(window).on('load', function() {
    $('.flying').on('click', function() {
        let item = $(this)
        item.fadeOut(300);
        setTimeout(function() { 
            item.fadeIn(250); 
        }, 8000);
    });
});

