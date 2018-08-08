var menuLeft = '<ul class="menuLeft">' +
                     //内容管理
                    '<li data-type="contents"><a href="../contents/index.html">首页</a></li>' +
                    '<li data-type="contents"><a href="../contents/sos-manage.html">报警管理</a></li>' +
                    '<li data-type="contents"><a href="../contents/houseNotice.html">小区公告</a></li>' +
                    '<li data-type="contents"><a href="../contents/Chamber.html">议事厅</a></li>' +
                    '<li data-type="contents"><a href="../contents/complain.html">投诉表扬</a></li>' +
                   // app管理
                    '<li data-type="app"><a href="../contents/complain.html">员工管理</a></li>' +
                    '<li data-type="app"><a href="../contents/complain.html">群聊管理</a></li>' +
                    '<li  data-type="app"><a href="##">审批管理</a><i class="layui-icon layui-icon-triangle-d"></i>' +
                        '<ol>' +
                            '<li ><a href="../appManage/exame-manage.html">流程管理</a></li>' +
                            '<li><a href="../contents/complain.html">假期管理</a></li>' +
                            '<li><a href="../contents/complain.html">余额管理</a></li>' +
                            '<li><a href="../contents/complain.html">数据导出</a></li>' +
                        '</ol>' +
                    '</li>' +
                    //收费管理
                    '<li data-type="charge"><a href="../moneyManage/pay-setting.html">支付配置</a></li>' +
                    '<li data-type="charge"><a href="../moneyManage/standard-setting.html">计费标准设置</a></li>' +
                    '<li data-type="charge"><a href="##">票据管理</a><i class="layui-icon layui-icon-triangle-d"></i>' +
                        '<ol>' +
                        '<li ><a href="../moneyManage/bill-admin.html">票据分配</a></li>' +
                        '<li><a href="../moneyManage/bill-search.html">票据查询</a></li>' +
                        '</ol>' +
                    '</li>' +
                    '<li data-type="charge"><a href="../moneyManage/estate-fee.html">物业计费</a></li>' +
                    '<li data-type="charge"><a href="../moneyManage/due-recive.html">应收查询</a></li>' +
                    '<li data-type="charge"><a href="../moneyManage/paid-up.html">实收查询</a></li>' +
                    '<li data-type="charge"><a href="../moneyManage/return-search.html">退费查询</a></li>' +
                    '<li data-type="charge"><a href="../moneyManage/urge-charge.html">催费管理</a></li>' +
                    // 财务管理
                    '<li data-type="finance"><a href="../financial/fianan-account.html">财务对账</a></li>' +
                    '<li data-type="finance"><a href="../financial/table-search.html">报表查询</a></li>' +
                    '<li data-type="finance"><a href="../financial/order-count.html">票据统计</a></li>' +
                '</ul>';
document.write(menuLeft);