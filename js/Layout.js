$(function () {
    //左边列表ol显示和隐藏
    $('#nav>li>a').click(function () {
        var li = $(this).parent();
        var ol = li.children('ol');
        if (ol.length == 0) { return; }
        if (ol.css('display') == 'none') {
            $('#nav>li>ol').slideUp(500, function () {
                $(this).parent().removeClass('nav-show');
            });
            li.addClass('nav-show');
            ol.slideDown(500);
        } else {
            ol.slideUp(500, function () {
                li.removeClass('nav-show');
            });
        }
    });
    //整个左边显示或隐藏
    $('#leftShowHideBtn').click(function () {
        var left = $('#left');
        var right = $('#right');
        if (parseInt(left.css('left')) == 0) {
            left.css('left', '-220px');
            right.css('left', '0px');
        } else {
            left.css('left', '0px');
            if ($('body').width() >= 768) {
                right.css('left', '220px');
            }
        }
    });
});