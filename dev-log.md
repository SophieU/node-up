## 1、物业PC端新增(pages)
- check-manage.html  审批管理
- attend-manage.html  考勤管理
- stuff-manage.html  人员管理
- im-manage.html  群聊管理
- stuff-manage.css
- arrow-right-grey.png



# 2018-07-02 9.28版本 物业后台
0 新增  1 已有
【新增js库】：
- layui 【js/lib/layui】
- ueditor 【js/lib/ueditor】

【新增页面：】
- 内容管理（1）
    -   报警管理[ plotManage/sos-manage.html]（关闭，受理，查看详情）（1）-
        -   07-23新增报警提醒弹窗。
-   审批管理 （1）
    -   审批管理（1）【appManage/exame-manage.html】
    -   假期管理（1）【appManage/holiday-manage.html】
        - 07-23 新增不能删除的提醒语（在原删除提醒modal框中）
    -   余额管理（1）【appManage/balance-manage.html】
    -   数据导出（1）【appManage/data-export.html】
        - 07-23 检索字段新增：选择小区字段，table加一层div.table-wrapper元素
- 报事报修 （1）
    - 新增-二级类目管理（1）【report/oneLv.html】 已有（修改左侧导航结构）
    - 报单管理（1）【report/report-manage.html】
    - 紧急报修（1）【report/urgent-report.html】

- 物业费管理 （1）
    -   支付配置(1) 【moneyManage/pay-setting.html】
    -   计费标准设置（1）【moneyManage/standard-setting.html】
      
    -   编辑计费标准(1) 【moneyManage/edit-standard.html 】
        - 07-23 新增“公摊系数”，“计费名称”字段，单价设置中增加/删除 交互效果。
    -   附-计费公式计算器：calculator.html
        - 07-23 修改calculator布局，新增“计费科目”字段，添加取消关闭弹层交互，
    -   关联资源(1) 【moneyManage/relate-source.html】
    -   物业计费（1）【moneyManage/estate-fee.html】
        - 07-23 周期性计费科目：新增“应收时间设置”，预缴相关设置字段
    -   应收查询（1）【moneyManage/due-recive.html】
        - 07-23 新增 合单催费，漏关查询等按钮、以及漏关查询列表

    -   实收查询（1）【moneyManage/paid-up.html 附-退费管理弹层页：return-fee.html】
    -   物业收费（1）【moneyManage/estate-charge.html】
    -   退费查询（1）【moneyManage/return-search.html】
    -   票据管理 （1）【moneyManage/bill-admin.html】
    -   票据查询 (1) 【moneyManage/bill-search.html】
    -   催费管理（1） 【moneyManage/urge-charge.html】
        -   催费单模板（1）
        -   催费短信模板（1）
        -   催费律师函模板（1）
-   财务管理（1）
    -   财务对账（1）【financial/fianan-account.html】
    -   报表查询（1） 【financial/table-search.html】
    -   票据统计（1）【financial/order-count.html】
- 内容管理-首页 （1）【index/index.html】


# 2018-08-01
- 资源管理-业主管理 ： 更新客户批量导入 弹窗内容
- 物业费管理-计费标准设置：新增欠费记录批量导入 standard-setting.html
- 物业计费：修改周期性计费，新增预缴计费 estate-fee.html
- 退费查询 return-search.html

<link rel="stylesheet" type="text/css" href="../../css/base/base.css" />

<!--顶部菜单-->
<script src="../menu-top.js"></script>
<!--顶部菜单-->

 <!--左边导航开始-->
    <div class="main-nav">
        <script src="../menu-left.js"></script>
    </div>
    <!--左边导航结束-->

<script src="../../libs/jquery/jquery-2.1.0.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" src="../../libs/layui/layui.all.js"></script>
<script src="../../js/global.js" type="text/javascript" charset="utf-8"></script>







