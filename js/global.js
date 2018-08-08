

$(function(){
    (function(){
        //检测当前是哪个页面，正式环境需要删除
        var nav = document.title;
        $('.main-nav').find('a').each(function(index,item){
            var itemText = $(item).text().trim();
            var navType = $(item).closest('li').data('type')
            if(nav.indexOf(itemText)>-1){
                $(item).closest('li').addClass('active');
                if($(item).closest('ol').length>0){
                    var topMenuLi = $(item).parents('li[data-type]');
                    topMenuLi.addClass('open');
                    navType=topMenuLi.data('type');
                }

                $('.head-nav>li').each(function(index,li){
                    if($(li).data('menu')===navType){
                        $(li).addClass('active')
                    }
                })
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

        //菜单切换交互
        $('body').on('click','.head-nav>li',function(){
            $(this).addClass('active').siblings('li').removeClass('active')
            showMenu()
        });
        $('body').on('click','.menuLeft>li',function(){
            //有子菜单
            if($(this).find('ol').length>0){
                if($(this).hasClass('open')){
                    $(this).find('ol').slideUp();
                    $(this).removeClass('open').find('.layui-icon-triangle-d').css({
                        transform:"rotate(90deg)"
                    });
                    $(this).find('ol').slideUp();
                    return;
                }
                $(this).find('.layui-icon-triangle-d').css({
                    transform:"rotate(0)"
                })
                $(this).find('ol').slideDown();
                $(this).addClass('open');
            }
        })
        function showMenu(){
            var navType =$('.head-nav>li.active').data('menu');
            $('.menuLeft>li').each(function(index,item){
                if($(item).data('type')===navType){
                    $(item).show()
                }else{
                    $(item).hide();
                }
            })
        }
        showMenu();
        // $('.head-nav>li:first-child').click();

    })()



});
//弹窗
$('body').on('click','[data-toggle="modal"]',function(){
    var target = $(this).data("target");
    $(target).removeClass('hide');
    var screen = ['600px','auto'];
    if($(target).data('height')){
        screen=['600px',$(target).data('height')]
        console.log(screen)
    }
    if($(target).data('width')){
        screen=[$(target).data('width'),'auto']
        console.log(screen)
    }
    if(!layui) return;
    var layer = layui.layer;
    layer.open({
        type:1,
        shade:false,
        title:false,
        content:$(target),
        area:screen,
        cancel:function(){
            $(target).addClass('hide');
        }
    });
    console.log(target)
});
$('body').on('click','[data-dismiss="modal"]',function(){
    $(this).closest('.modal').addClass("hide");
    var layer = layui.layer;
    layer.closeAll('page'); //疯狂模式，关闭所有层
});
//渲染zTree
function renderZTree(target){
    var setting = {
        treeId:'treeSource',
        check:{
            chkboxType:{"Y":"ps","N":"ps"},
            enable:true
        }
    };
    var nodes = [
        {name:'青秀城',children:[
                {name:'1栋',children:[
                        {name:'1单元',children:[
                                {name:'101',checked:true},
                                {name:'102'},
                                {name:'103'},
                                {name:'104'},
                            ]}
                    ]},
                {name:'2栋',children:[
                        {name:'1单元',children:[
                                {name:'101'},
                                {name:'102'},
                                {name:'103'},
                                {name:'104'},
                            ]}
                    ]},

            ]},{
            name:'力宝大厦',children:[
                {name:'二层',children:[
                        {name:'201'},
                        {name:'202'},
                        {name:'203'},
                    ]},
                {name:'三层',children:[
                        {name:'301'},
                        {name:'302'},
                        {name:'303'},
                    ]}
            ]
        }
    ]
    var zTreeObj= $.fn.zTree.init(target,setting,nodes)
}
//渲染分页【正式可去除】
function renderPage(target){
    var laypage = layui.laypage;
    laypage.render({
        elem: target ,
        count: 50 ,
        layout:['count','prev','page','next','limit','skip'],
        theme:'#1E9FFF',
        jump:function(obj,first){
            //obj包含了当前分页的所有参数，比如：
            console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
            console.log(obj.limit); //得到每页显示的条数

            //首次不执行
            if(!first){
                //do something
            }
        }
    });
}



