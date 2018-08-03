 var $msgTbody= $(".msg-tbody")
//把编辑的模态框委托给tbody
$msgTbody.on("click",".compile",function(){
	$(this).attr("data-toggle","modal");
	$(this).attr("data-target","#set-modal");
});
//把删除的模态框委托给tbody
$msgTbody.on("click",".del",function(){
	$(this).attr("data-toggle","modal");
	$(this).attr("data-target","#del-modal");
});

//客户管理页面编辑委托绑定
$msgTbody.on("click",".client-manage",function(){
	$(this).attr("data-toggle","modal");
	$(this).attr("data-target","#set-modal");
});

//全选
var $mycheckbox = $(".mycheckbox")
var $allCheckbox = $("input[name=allcheckbox]");
var $msgCheckbox = $("input[name=msg-checkbox]")
$allCheckbox.click(function(){
	if($(this).prop('checked')){
		$msgCheckbox.prop('checked',true)
		$mycheckbox.addClass('active')
	}else{
		$msgCheckbox.prop('checked',false)
		$mycheckbox.removeClass('active')
	}
});
//全选换肤
$mycheckbox.click(function(){
	if($(this).find("input").prop('checked')){
		$(this).addClass("active");
	}else{
		$(this).removeClass("active");
	};
})

