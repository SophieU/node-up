//验证手机号
jQuery.validator.addMethod('isMobile',function(value,element){
	var tel=/^1[0-9]{10}$/;
	return this.optional(element)||(tel.test(value));
},"Please fill in the correct phone number");
//验证输入金额
jQuery.validator.addMethod('money',function(value,element){
	var money=/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
	return this.optional(element)||(money.test(value))
},"Please input the correct amount")

//手机或者座机等联系方式
jQuery.validator.addMethod('isTel',function(value,element){
	var num=/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
	return this.optional(element)||(num.test(value));
},"Please fill in the correct phone number");


//验证下拉表单，兼容angular
jQuery.validator.addMethod('isSelect',function(value,element){
	if (value.indexOf(':') != -1) {
		var val = value.split(":");
		return this.optional(element)||(!val[1]=="");
	} else{
		return this.optional(element)||(!value=="");
	}
	
},"option required");

//验证银行卡号，必须处于16-19位
jQuery.validator.addMethod('isBankcard',function(value,element){
	var tel=/^(\d{16}|\d{19})$/;
	return this.optional(element)||(tel.test(value));
},"Please enter the correct bank card number");

//验证面积
jQuery.validator.addMethod('builtArea',function(value,element){
	var builtArea=/^\d+(?:\.\d{1,2})?$/;
	return this.optional(element)||(builtArea.test(value))
},"请输入正确的面积，小数点后最多两位");
