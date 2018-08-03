//把编辑的模态框委托给tbody
var $msgTbody = $(".msg-tbody")
$msgTbody.on("click",".compile",function(){
	$(this).attr("data-toggle","modal");
	$(this).attr("data-target","#set-phone-modal");
});
//把删除的模态框委托给tbody
$msgTbody.on("click",".del",function(){
	$(this).attr("data-toggle","modal");
	$(this).attr("data-target","#del-phone-modal");
});

//全选
$("input[name=allcheckbox]").click(function(){
	if($(this).prop('checked')){
		$("input[name=msg-checkbox]").prop('checked',true)
	}else{
		$("input[name=msg-checkbox]").prop('checked',false)
	}
});

//操作按钮的下来菜单
$(".acceptance-i").on("click",function(e){
	e.stopPropagation()
	var $reject = $(this).closest("td").find(".reject");
	
	if ($reject.is(':hidden')) {
		$reject.stop().fadeIn();
		$(this).removeClass('fa-angle-down').addClass('fa-angle-up')
		$(this).closest('td').find('.acceptance').css('border','1px solid #d8d8d8')
	} else{
		$reject.stop().fadeOut();
		$(this).removeClass('fa-angle-up').addClass('fa-angle-down')
		$(this).closest('td').find('.acceptance').css('border','0')
	}
})
//操作按钮样式控制
$(".acceptance").on('mousemove',function(){
	$(this).addClass('active');
}).on('mouseout',function(){
	$(this).removeClass('active');
})

//操作查看进度按钮
;(function($){
	$('.CheckPlan-a').on('click',function(e){
		e.stopPropagation()
		var $CheckPlan = $(this).closest('td').find(".CheckPlan")
		if ($CheckPlan.is(':hidden')) {
			$CheckPlan.stop().fadeIn();
		} else{
			$CheckPlan.stop().fadeOut();
		}
		
		var winX = $(window).height();//可视区域高度
		var objX = $(this).offset().top;
		var boxH = $CheckPlan.height();
		if(boxH>300){
			boxH=300
		}
	    var addbot = boxH+objX-winX
		if(boxH+objX>winX){
			$CheckPlan.css('top',-addbot+'px')
		}
	})
})(jQuery)

//操作点击隐藏
$('.down-a').on('click',function(){
	$(this).closest('.reject').css('display','none');
	$(this).closest('td').find('.acceptance-i').addClass('fa-angle-down').removeClass('fa-angle-up');
})

$('.acceptance i').on('click',function(){
	$(this).closest('tr').siblings().find('.CheckPlan').css('display','none');
	$(this).closest('tr').find('.CheckPlan').css('display','none');
	$(this).closest('tr').siblings().find('.reject').css('display','none');
	$(this).closest('tr').siblings().find('.acceptance').css('border',0);
})

$('body').on('click',function(e){
	$('.CheckPlan').css('display','none');
	$('.reject').css('display','none');
	$('.acceptance').css('border','0');
	$('.acceptance-i').addClass('fa-angle-down').removeClass('fa-angle-up');
})


