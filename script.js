$('.question').click(function(){
    var $answer=$(this).next('.answer');

    if($answer.hasClass('open')){
        $answer.removeClass('open');
        $answer.slideUp(300);
        $(this).find('span').replaceWith('<span class="fas fa-angle-down"></span>');

    }else{
        $answer.addClass('open');
        $answer.slideDown(300);
        $(this).find('span').replaceWith('<span class="fas fa-angle-up"></span>');
    }

    return false;


});