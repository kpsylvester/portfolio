$(function() {
    // Hint: in this implementation you even don't need to specify a class and write
    // "$('a').click(function( oEvent ) {" instead
    $('.link').click(function( oEvent ) {
        var id = $(this).attr('href'),
            $target = $(id);
        if ( $target.length ) { // check if there is a valid target first @Hint
            oEvent.preventDefault(); // Prevent default behavior of link
            $('html,body').animate({
                scrollTop: $target.offset().top
            }, 'slow');
            // return false prevents event from bubbling which isn't a good practice
        }
    });
});


