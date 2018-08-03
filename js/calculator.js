$(function(){
    function setFormula(val,type){
        //检测输入有效性
        var lastTag = $('.calc-result>span:last-child');
        var last=lastTag.text().trim();
        var calcReg = /[\+\-\*\/]/;
        var span = ''; //最后放入结果

        //输入计费项
        if(type==='name'){
            if(last!==''&&!calcReg.test(last)){
                alert('请先选择运算符');
                return;
            }
           span= '<span class="name">'+val+'</span>'
        }
        //输入运算符
        if(type==='calc'){
            var rightReg = /[\+\-\*\/]/;
            if(rightReg.test(last)&&rightReg.test(val))return; //重复输入+-*/
            if(lastTag.hasClass('name')&&(val==='('||val===')')) return; //括号前不是运算符
            if(lastTag.hasClass('numb')&&(val==='('||val===')')) return;//括号前不是运算符
            if(last==='('&&val===')') return;//输入空（）
            span='<span class="calc">'+val+'</span>'
        }
        //输入数字
        if(type==='numb'){
            //未选择运算符直接输入数字情况
            if(last!==''&&!lastTag.hasClass('numb')&&!lastTag.hasClass('calc')){
                alert('请先选择运算符');
                return;
            }
            if(val===last&&val==='.')return; //重复输入小数点 .
            if(last.indexOf('.')!==-1&&val==='.') return; //多次间隔输入小数点
            var oldNum = $(".calc-result .numb:last-child").text().trim();
            var newNum = oldNum?String(oldNum)+String(val):''+val;
            if(lastTag.hasClass('numb')){
                lastTag.text(newNum)
            }else{
                $('.calc-result').append('<span class="numb">'+newNum+'</span>')
            }
            return;
        }
        //输入
        $('.calc-result').append(span);
    }

    // 选择房屋类型后
    $('.calc-two').on('click','li',function(){
        var val = $(this).text();
        var res ='&lt;'+val+'&gt;';
        setFormula(res,'name');
    });
    // 选择运算符后
    $('.calc-btns>.right').on('click','.layui-btn',function(){
        var val = $(this).text().trim();
        val = val.replace(/[\u4e00-\u9fa5]/,'');
        if($('.calc-result').text().trim().length===0){
            alert('请先选择计费项目');
            return;
        }
        setFormula(val,'calc')
    });
    //数字按钮
    $('.calc-btns>.left').on('click','.layui-btn',function(){
        if($(this).hasClass('del')){
            //删除
            $('.calc-result>span:last-child').remove();
        }else{
            var val = $(this).text().trim();
            setFormula(val,'numb')
        }

    })

    //添加基本单价
    $('.calc-box .addPrice').on('click',function(){
        var last = $('.calc-result>span:last-child');
        if(last.hasClass('numb')||last.hasClass('calc')){
            alert('请先选择运算符再添加单价')
        }
        $('.calc-result').append('<span>&lt;基本单价&gt;</span>')
    })
    //清空公式
    $('.calc-box .clearFormulate').on('click',function(){
        $('.calc-result').empty();
    })

});