/***************图片查看代码开始**************/
$(function () {
    var classStyle = ".wind-img";//使用说明：只需要img标签绑定此类样式即可

    var obj = null;
    //绑定放大镜样式
    $(classStyle).css('cursor', 'zoom-in');
    //绑定单击事件
    $(document).on('click', classStyle, function () {
        //第一次用图片插件才做初始化操作，而不是加载就做初始化操作
        if (obj == null) {
            obj = $('<div style="display:none">'
                + '<div style="position:fixed;left:0px;top:0px;width:100%;height:100%;background-color:#000;filter:alpha(opacity=60);opacity:0.6;z-index:1000;"></div>'
                + '<div style="position:fixed;left:0px;top:0px;width:100%;height:100%;overflow:auto;z-index:1001"><img id="windImgShowLabel" style="position:absolute;left:50%;top:50%;cursor:zoom-out;" onclick="$(this).parent().parent().hide(300);" /></div>'
                + '</div>');
            $('body').append(obj);
            //绑定图片加载完事件
            $('#windImgShowLabel').on('load', function () {
                var width = $(this).width();//原图宽度
                var height = $(this).height();//原图高度
                var downWidth = $('#windImgShowLabel').parent().width();//document的宽度
                var downHeight = $('#windImgShowLabel').parent().height();//document的高度
                //调整 margin-left  margin-top
                $(this).css('margin-left', '-' + ((width > downWidth ? downWidth : width) * 0.5) + 'px');
                $(this).css('margin-top', '-' + ((height > downHeight ? downHeight : height) * 0.5) + 'px');
            });
        }
        obj.show(300);
        $('#windImgShowLabel').attr('src', $(this).attr('src'));
    });
});
/***************图片查看代码结束**************/

$(function () {
    //<input type="checkbox" /> 标签的全选、全不选
    $(document).on('click', '.wind-check', function () {
        $(this).parents('table').find('tr').find('td:eq(0) input').prop('checked', $(this).prop('checked'));
    })

})

