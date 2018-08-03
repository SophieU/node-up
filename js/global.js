

$(function(){
    (function(){
        //检测当前是哪个页面，正式环境需要删除
        var nav = document.title;
        $('.main-nav').find('a').each(function(index,item){
            var itemText = $(item).text().trim();
            if(nav.indexOf(itemText)>-1){
                $(item).closest('li').addClass('active');
            }
        });

        //渲染时间选择器
        if(layui){
            var laydate = layui.laydate;
            lay('.dateTimeInput').each(function(){
                laydate.render({
                    elem: this
                    ,trigger: 'click'
                });
            })
        }

    })()

});
//弹窗
$('body').on('click','[data-toggle="modal"]',function(){
    var target = $(this).data("target");
    $(target).removeClass('hide');
    if(!layui) return;
    var layer = layui.layer;
    layer.open({
        type:1,
        shade:false,
        title:false,
        content:$(target),
        area:['600px','auto'],
        cancel:function(){
            $(target).addClass('hide');
        }
    });
    console.log(target)
});
$('body').on('click','[data-dismiss="modal"]',function(){
    var layer = layui.layer;
    layer.closeAll('page'); //疯狂模式，关闭所有层
});
//时间选择器


