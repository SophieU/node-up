//把编辑的模态框委托给tbody
$(".msg-tbody").on("click",".compile",function(){
	$(this).attr("data-toggle","modal");
	$(this).attr("data-target","#set-phone-modal");
});
//把删除的模态框委托给tbody
$(".msg-tbody").on("click",".del",function(){
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

