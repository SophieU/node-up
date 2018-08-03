var setting = {
	view: {
		//双击节点时，是否自动展开父节点的标识 默认值: true
		dblClickExpand: false
	},
	check: {
		//设置 zTree 的节点上是否显示 checkbox / radio 默认值: false
		enable: false
	},
	callback: {
		//用于捕获 zTree 上鼠标右键点击之后的事件回调函数
		//1、如果设置了 setting.callback.beforeRightClick 方法，且返回 false，将无法触发 onRightClick 事件回调函数。
		//2、只要将 function 的引用赋给 onRightClick 属性，则右键点击 zTree 时，将屏蔽浏览器的右键菜单。
		//默认值：null
		onRightClick: OnRightClick
	}
};

var zNodes =[
	{id:1, name:"无右键菜单 1", open:true, noR:true,
		children:[
			   {id:11, name:"节点 1-1", noR:true},
			   {id:12, name:"节点 1-2", noR:true}

		]},
	{id:2, name:"右键操作 2", open:true,
		children:[
			   {id:21, name:"节点 2-1"},
			   {id:22, name:"节点 2-2"},
			   {id:23, name:"节点 2-3"},
			   {id:24, name:"节点 2-4"}
		]},
	{id:3, name:"右键操作 3", open:true,
		children:[
			   {id:31, name:"节点 3-1"},
			   {id:32, name:"节点 3-2"},
			   {id:33, name:"节点 3-3"},
			   {id:34, name:"节点 3-4"}
		]}
];

function OnRightClick(event, treeId, treeNode) {
	if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
		zTree.cancelSelectedNode();
		showRMenu("root", event.clientX, event.clientY);
	} else if (treeNode && !treeNode.noR) {
		zTree.selectNode(treeNode);
		showRMenu("node", event.clientX, event.clientY);
	}
}

function showRMenu(type, x, y) {
	$("#rMenu ul").show();
	if (type=="root") {
		$("#m_del").hide();
		$("#m_check").hide();
		$("#m_unCheck").hide();
	} else {
		$("#m_del").show();
		$("#m_check").show();
		$("#m_unCheck").show();
	}
	rMenu.css({"top":y-70+"px", "left":x-160+"px", "visibility":"visible"});

	$("body").bind("mousedown", onBodyMouseDown);
}
function hideRMenu() {
	if (rMenu) rMenu.css({"visibility": "hidden"});
	$("body").unbind("mousedown", onBodyMouseDown);
}
function onBodyMouseDown(event){
	if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length>0)) {
		rMenu.css({"visibility" : "hidden"});
	}
}
var addCount = 1;
function addTreeNode() {
	hideRMenu();
	var newNode = { name:"增加" + (addCount++)};
	if (zTree.getSelectedNodes()[0]) {
		newNode.checked = zTree.getSelectedNodes()[0].checked;
		zTree.addNodes(zTree.getSelectedNodes()[0], newNode);
	} else {
		zTree.addNodes(null, newNode);
	}
}
function removeTreeNode() {
	hideRMenu();
	var nodes = zTree.getSelectedNodes();
	if (nodes && nodes.length>0) {
		if (nodes[0].children && nodes[0].children.length > 0) {
			var msg = "要删除的节点是父节点，如果删除将连同子节点一起删掉。\n\n请确认！";
			if (confirm(msg)==true){
				zTree.removeNode(nodes[0]);
			}
		} else {
			zTree.removeNode(nodes[0]);
		}
	}
}
function checkTreeNode(checked) {
	var nodes = zTree.getSelectedNodes();
	if (nodes && nodes.length>0) {
		zTree.checkNode(nodes[0], checked, true);
	}
	hideRMenu();
}
function resetTree() {
	hideRMenu();
	$.fn.zTree.init($("#treeDemo"), setting, zNodes);
}

var zTree, rMenu;
$(document).ready(function(){
	$.fn.zTree.init($("#treeDemo"), setting, zNodes);
	zTree = $.fn.zTree.getZTreeObj("treeDemo");
	rMenu = $("#rMenu");
});
