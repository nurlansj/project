autosize();
function autosize(){
    var text = $('.dynamic-height');

    text.each(function(){
        $(this).attr('rows',1);
        resize($(this));
    });

    text.on('input', function(){
        resize($(this));
    });
    
    function resize ($text) {
        $text.css('height', 'auto');
        $text.css('height', $text[0].scrollHeight+'px');
    }
}
function changeColor($number) {
    var star = $('.onestar');
    for (let i = 0; i < star.length; i++) {
        if (i <= $number) {
            $(star[i]).addClass('red');
        } else {
            $(star[i]).removeClass('red');
        }
        
      }
}
$('.onestar').click(function() {
    changeColor($('.onestar').index( this ));
});