;(function(jQuery){
	var wy={};
	var validation={
	        rules:{
	        	//用户名
	            username:{
	                required:true,
	               	 minlength:2,
	                maxlength:8
	            },
	        	 //密码
	            password:{
	                required:true,
	                minlength:8,
	                maxlength:16
	            },
	            //确认密码
	            confirmpwd:{
					required:true,
					equalTo:"#password"
				},
				//备注
				mark:{
					maxlength:250
				},
	        	//小区名字
	        	houseName:{
	        		//房屋管理新增房屋中不做限制
	        	},
	        	//楼宇编号
	        	buildNumber:{
					//客户管理中只读
				},
				//楼宇名称
				buildName:{
					required:true,
	                maxlength:50
	            },
	            //单元号数
	            elementNumber:{
	                required:true,
	                maxlength:10,//房屋管理新增房屋中最大10个字节
	                digits:true
	            },
	            //小区名称
	            houseName:{
	            	required:true
	            },
	            //房屋编号
	            houseNumber:{
	                maxlength:20,//房屋管理新增房屋中最大20个字节
	                digits:true
	            },
	            //房屋状态
	            buildingType:{

	            },
	            //建筑面积
	            houseArea:{
	            	required:true,
	              	number:true,
	                max:10
	            },
	            //计费面积：
	            houseChargArea:{
	            	required:true,
	              	number:true,
	                max:10 //房屋管理新增房屋中最大10
	            },
	            //科目编号
	            subjectNumber:{
	            	required:true,//收费科目，新增科目中必填
	            	digits:true,
	                maxlength:8
	            },
	            //科目名称
	            subjectName:{
	            	//收费科目中，模糊搜索,不必填
	            },
	            subjectNameTrue:{
	            	//收费科目中，新增科目中，必填
	            	required:true,
	            	maxlength:50
	            },
	            //计费单价
	            subjectPrice:{
	            	required:true,//收费科目中，新增科目中，必填
	            	number:true,
	                maxlength:8
	            },
	            //结算日期
	            subjectDay:{
	            	required:true,
	            	digits:true,
	            	range:[1,28]
	            },
	            //计费方式
	            chargWay:{
	            	required:true
	            },
	            //计费周期
	            chargPeriod:{
	            	required:true
	            },
	            //客户姓名
	            clientName:{
	            	//客户管理中，模糊搜索
	            },
	            //
	            clientNameTrue:{
	            	required:true,//客户管理页面，必填
	            	 maxlength:20
	            },
	            //手机
	            mobile:{
	            	required:true,
	            	isMobile:true
	            },
	            //座机
	            tel:{
	            	required:true,
	            	isTel:true
	            },
	            //迁入日期
	            checkDay:{
	            	//客户管理搜索中不必填
	            },
	            checkDayTrue:{
	            	required:true//客户管理中必填
	            },
	            //发布公告标题
	            publishTitle:{
	            	required:true
	            },
	            //发布公告时间
	            publishTime:{
	            	required:true,
	            	date:true,
	            	dateISO:true
	            },
	            //应收月份
	            gatherMonth:{
	            	required:true
	            },
	            //收款时间
	            gatherTime:{
	            	required:true,
	            	date:true,
	            	dateISO:true
	            },
				//密码与重置
				newpwd:{
					required:true,
					minlength:8
				},
				//报单编号
				repNumber:{
					required:true
				},
				//报单时间
				repTime:{
					required:true,
	            	date:true,
	            	dateISO:true
				},
				//报单状态
				repState:{
					required:true
				},
				//报单类型
				repType:{
					required:true
				},
				//预约时间
				makeApp:{
					required:true,
					date:true,
	            	dateISO:true
				},
				//受理人
				transactor:{
					required:true
				},
				//受理时间
				transTime:{
					required:true,
					date:true,
	            	dateISO:true
				},
				//派工时间
				dispatchTime:{
					required:true,
					date:true,
	            	dateISO:true
				},
				//维修费用
				dispatchPrice:{

				},
				//维修人员
				dispatchMan:{
					required:true
				},
				//服务名称
				severName:{
					required:true
				},
				//服务类型
				severType:{
					required:true
				},
				//店铺地址
				serveLoc:{
					required:true
				},
				//实际收费金额
				realityMoney:{
					required:true
				},
				//缴费时间
				PayTime:{

				},
				//收款方式
				paymentTerm:{

				},
				confirmpwd:{
					required:true,
					equalTo:"#newpwd"
				},
				bankName:"required",
				bankNum:{
					required:true,
					digits:true
				},
                isSelectTrue:{
                    required:true,
					isSelect:true
				},
                isSelectTrue2:{
                    required:true,
					isSelect:true
				},
                houseTrue:{
                    required:true,
					isSelect:true
				},
                accountFinance:{
                    required:true
				},
                startMonth:{
                    required:true
				},
                MonthNum:{
                    required:true
				}
	        }, //rules结束
	        messages:{
                isSelectTrue:{
                    required:"<i class='fa fa-exclamation-circle'></i>请选择一项",
                    isSelect:"<i class='fa fa-exclamation-circle'></i>请选择一项"
                },
                isSelectTrue2:{
                    required:"<i class='fa fa-exclamation-circle'></i>请选择一项",
                    isSelect:"<i class='fa fa-exclamation-circle'></i>请选择一项"
                },
                houseTrue:{
                    required:"<i class='fa fa-exclamation-circle'></i>请选择房屋",
                    isSelect:"<i class='fa fa-exclamation-circle'></i>请选择房屋"
                },
	        	mobile:{
					required:"<i class='fa fa-exclamation-circle'></i>请输入手机号码",
					isMobile:"<i class='fa fa-exclamation-circle'></i>请输入正确的手机号"
				},
	            username:{
	                required:"<i class='fa fa-exclamation-circle'></i>用户名不能为空",
	                minlength:"用户名最少6位"
	            },
	            password:{
	                required:"<i class='fa fa-exclamation-circle'></i>密码不能为空",
	                minlength:"密码最少8位"
	            },
	            confirmpwd:{
					required:"<i class='fa fa-exclamation-circle'></i>请再次输入密码",
					equalTo:"<i class='fa fa-exclamation-circle'></i>两次输入的密码不一致，请重新输入"
				},
	            secode:{
	                required:"<i class='fa fa-exclamation-circle'></i>验证码不能为空",
	                remote:"<i class='fa fa-exclamation-circle'></i>验证码错误"
	            },
				newpwd:{
					required:"<i class='fa fa-exclamation-circle'></i>请输入新密码",
					minlength:"<i class='fa fa-exclamation-circle'></i>密码至少8位"
				},
				confirmpwd:{
					required:"<i class='fa fa-exclamation-circle'></i>请再次输入密码",
					equalTo:"<i class='fa fa-exclamation-circle'></i>两次输入的密码不一致，请重新输入"
				}
				//messages结束
	    	},
            errorPlacement: function(error, element) {
                error.appendTo(element.parent().parent().is('.timeBox')?element.closest('.timeBox') : element.closest('td') );
            }
        }
	function validateForm(selector){
		$(selector).validate(validation)
		return $(selector).validate(validation).form()
	};

	$.extend($.validator.messages, {
		required: "<i class='fa fa-exclamation-circle'>这是必填字段",
		remote: "请修正此字段",
		email: "请输入有效的电子邮件地址",
		url: "请输入有效的网址",
		date: "请输入有效的日期",
		dateISO: "请输入有效的日期 (YYYY-MM-DD)",
		number: "请输入有效的数字",
		digits: "只能输入数字",
		creditcard: "请输入有效的信用卡号码",
		equalTo: "你的输入不相同",
		extension: "请输入有效的后缀",
		maxlength: $.validator.format("最多可以输入 {0} 个字符"),
		minlength: $.validator.format("最少要输入 {0} 个字符"),
		rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),
		range: $.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),
		max: $.validator.format("请输入不大于 {0} 的数值"),
		min: $.validator.format("请输入不小于 {0} 的数值")
	});


	wy.validateForm=validateForm;
	//挂载ysy方法
	window.wy=wy;



})($)