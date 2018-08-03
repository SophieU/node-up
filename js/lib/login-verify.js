

	var wy={};
	var validation = {
          rules:{
          	//开户银行
	        	bankName:{
	        		required:true
	        	},
	        	//账户名称
	        	bankAccountName:{
	        		required:true
	        	},
	        	//银行账户
	        	bankAccountNumber:{
	        		required:true,
	        		isBankcard:true
	        	},
          		//注册资金
          		registeredMoney:{
          			required:true
          		},
	        	//联系人
	        	contactUser:{
	        		required:true
	        	},
	        	//联系电话
	        	contactMobile:{
	        		required:true,
	        		isMobile:true
	        	},
	        	//登录密码
	        	loginPwd:{
	        		required:true,
	        		minlength:8,
	                maxlength:16
	        	},
	        	rigisterPwd:{
	        		required:true,
	        		minlength:8,
	                maxlength:16
	        	},
	        	code:{
	        		required:true,
	                maxlength:4
	        	},
	        	//登录账号
	        	LoginId:{
	        		required:true
	        	},
	        	//详细地址
	        	address:{
	        		required:true
	        	},
	        	Contacts:{
	        		required:true,
	        		maxlenth:200
	        	},
	        	//联系地址
	        	//省份
	        	geoProvinceId:{
	        		required:true,
					isSelect:true
	        	},
	        	//市
	        	geoCityId:{
	        		required:true,
                    isSelect:true
	        	},
	        	//区
	        	geoDistrictId:{
	        		required:true,
                    isSelect:true
	        	},
	        	//营业执照有效期
	        	businessStartTime:{
	        		required:true
	        	},
	        	businessEndTime:{
	        		required:true
	        	},
	        	//组织机构代码有效期
	        	organizationCodeStartTime:{
	        		required:true
	        	},
	        	organizationCodeEndTime:{
	        		required:true
	        	},
	        	//管理小区
	        	familyBiotopeId:{
	        		required:true,
					isSelect:true
	        	},
	        	//营业执照所在地
	        	businessGeoProvinceId:{
	        		required:true,
					isSelect:true
	        	},
	        	businessGeoCityId:{
	        		required:true,
                    isSelect:true
	        	},
	        	businessGeoDistrictId:{
	        		required:true,
                    isSelect:true
	        	},
	        	//物业公司名称
	        	companyName:{
	        		required:true
	        	},
	        	//营业执照注册号
	        	businessNumber:{
	        		required:true
	        	},
	        	//组织机构所在地
	        	BusinessAddress:{
	        		required:true
	        	},
	        	//组织机构代码号
	        	organizationCodeNumber:{
	        		required:true
	        	},
	        	//代码有效期
	        	orgTimeStart:{
	        		required:true
	        	},
	        	orgTimeEnd:{
	        		required:true
	        	},
	        	//法人姓名
	        	legalPerson:{
	        		required:true
	        	},
	        	//法人手机
	        	legalPersonpHone:{
	        		required:true
	        	},
	        	//法人身份证
	        	legalPersonNumber:{
	        		required:true
	        	},
	        	//经营范围
	        	businessScope:{
	        		required:true
	        	},
	        	//组织结构代码有效时间
	        	BusinessTimeStart:{
	        		required:true
	        	},
	        	BusinessTimeEnd:{
	        		required:true
	        	},
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
	            //新密码
	            newpassword:{
	                required:true,
	                minlength:8,
	                maxlength:16
	            },
	            //确认密码
	            confirmpwd:{
					required:true,
					equalTo:"#newpassword"
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
				buildNumberTrue:{
					required:true
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
	            	required:true,
	            	maxlength:50
	            },
	            //房屋编号
	            houseNumber:{
	                maxlength:20,//房屋管理新增房屋中最大20个字节
	            },
	            houseNumberTrue:{
	            	required:true,
	            	maxlength:20
	            },
	            //房屋状态
	            buildingType:{
	            	
	            },
	            //下拉框验证
	            isSelectTrue:{
	            	required:true,
					isSelect:true
	            },
	            //财务科目
	            accountFinance:{
	            	required:true
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
	            //开始月
	            startMonth:{
	            	required:true,
	            	digits:true
	            },
	            //月数
	            MonthNum:{
	            	required:true,
	            	digits:true
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
	            	range:[1,31]
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
	            	maxlength:50
	            },
	            //手机
	            mobile:{
	            	isMobile:true,
	            	maxlength:20
	            },
	            //手机必须
	            mobileTrue:{
	            	required:true,
	            	isMobile:true,
	            	maxlength:20
	            },
	            mobileTrue1:{
	            	required:true,
	            	isMobile:true,
	            	maxlength:20
	            },
	            mobileTrue2:{
	            	required:true,
	            	isMobile:true,
	            	maxlength:20
	            },
	            mobileTrue3:{
	            	required:true,
	            	isMobile:true,
	            	maxlength:20
	            },
	            //座机
	            tel:{
	            	required:true,
	            	isTel:true,
	            	maxlength:20
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
	            	//非必填
	            	maxlength:50
	            },
	            //发布公告时间
	            publishTime:{
	            	required:true,
	            	date:true,
	            	dateISO:true
	            },
	            //公告类型
	            publishType:{
	            	
	            },
	            //应收月份
	            gatherMonth:{
	            	//模糊搜索
	            	required:true
	            },
	            //收款时间
	            gatherTime:{
	            	//模糊搜索
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
					//模糊搜索
				},
				//报单时间
				repTime:{
				},
				repTimeTrue:{
					required:true,
				},
				//报单状态
				repState:{
					//模糊搜索
				},
				//报单类型
				repType:{
					//模糊搜索
				},
				repTypeTrue:{
					required:true
				},
				//预约时间
				makeApp:{
					//模糊搜索
				},
				makeAppTrue:{
					required:true,
				},
				makeAppTrue2:{
					required:true,
				},
				//受理人
				transactor:{
					required:true,
					maxlength:20
				},
				//受理时间
				transTime:{
					required:true,
				},
				//派工时间
				dispatchTime:{
					required:true,
				},
				//维修费用
				dispatchPrice:{
					
				},
				dispatchType:{
					required:true
				},
				//维修人员
				dispatchMan:{
					required:true,
					maxlength:20
				},
				//完工时间
				overTime:{
					required:true
				},
				//服务名称
				severName:{
					
				},
				severNameTrue:{
					required:true,
					maxlength:50
				},
				//服务类型
				severType:{
					
				},
				severTypeTrue:{
					required:true
				},
				//店铺地址
				severLoc:{
					required:true
				},
				//实际收费金额
				realityMoney:{
					required:true,
					maxlength:8,
					number:true
				},
				//缴费时间
				PayTime:{
					
				},
				//收款方式
				paymentTerm:{
					
				},
				//电话名称
				phoneName:{
					
				},
				//小区公告
				markTrue:{
					required:true
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
				//营业执照照片
				businessImageKey:"required",
				//上传图标
				bannerImg:"required",
				//组织机构代码图标
				organizationCodeImageKey:"required",
				legalImagePositiveKey:"required",
				legalImageOppositeKey:"required"
	        },
	    messages:{
        	isSelectTrue:{
				required:"<i class='fa fa-exclamation-circle'></i>请选择一项",
				isSelect:"<i class='fa fa-exclamation-circle'></i>请选择一项"
			},
            geoProvinceId:{
                required:"<i class='fa fa-exclamation-circle'></i>请选择一项",
                isSelect:"<i class='fa fa-exclamation-circle'></i>请选择一项"
            },
            geoCityId:{
                required:"<i class='fa fa-exclamation-circle'></i>请选择一项",
                isSelect:"<i class='fa fa-exclamation-circle'></i>请选择一项"
            },
            geoDistrictId:{
                required:"<i class='fa fa-exclamation-circle'></i>请选择一项",
                isSelect:"<i class='fa fa-exclamation-circle'></i>请选择一项"
            },
            businessGeoProvinceId:{
                required:"<i class='fa fa-exclamation-circle'></i>请选择一项",
                isSelect:"<i class='fa fa-exclamation-circle'></i>请选择一项"
            },
            businessGeoCityId:{
                required:"<i class='fa fa-exclamation-circle'></i>请选择一项",
                isSelect:"<i class='fa fa-exclamation-circle'></i>请选择一项"
            },
            businessGeoDistrictId:{
                required:"<i class='fa fa-exclamation-circle'></i>请选择一项",
                isSelect:"<i class='fa fa-exclamation-circle'></i>请选择一项"
            },
            familyBiotopeId:{
                required:"<i class='fa fa-exclamation-circle'></i>请选择一项",
                isSelect:"<i class='fa fa-exclamation-circle'></i>请选择一项"
            },
        	mobile:{
				required:"<i class='fa fa-exclamation-circle'></i>请输入手机号码",
				isMobile:"<i class='fa fa-exclamation-circle'></i>请输入正确的手机号"
			},
			mobileTrue:{
				required:"<i class='fa fa-exclamation-circle'></i>请输入手机号码",
				isMobile:"<i class='fa fa-exclamation-circle'></i>请输入正确的手机号"
			},
			mobileTrue1:{
				required:"<i class='fa fa-exclamation-circle'></i>请输入手机号码",
				isMobile:"<i class='fa fa-exclamation-circle'></i>请输入正确的手机号"
			},
			mobileTrue2:{
				required:"<i class='fa fa-exclamation-circle'></i>请输入手机号码",
				isMobile:"<i class='fa fa-exclamation-circle'></i>请输入正确的手机号"
			},
			mobileTrue3:{
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
			},
			bankAccountNumber:{
        		required:"<i class='fa fa-exclamation-circle'></i>请填写银行卡号",
        		isBankcard:"<i class='fa fa-exclamation-circle'></i>请填写正确的银行卡号"
        	}
			//messages结束
    	},
    	
    	//错误信息显示位置
        errorPlacement: function(error, element) {
        	if ($(".loginMsg-box").length>0) {
        		error.appendTo(element.closest('.loginMsg-box').find('.msg'));
        	} else{
        		error.appendTo(element.parent()); 
        		error.appendTo(element.parent().parent().is('.timeBox')?element.closest('.timeBox') : element.closest('td'));
        	}
        }
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
	
	wy.validateForm = function(selector){
		return $(selector).validate(validation).form()
	};
	
	//挂载ysy方法
	window.wy=wy;
	
	
