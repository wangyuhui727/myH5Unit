(function() {
	var curWwwPath = window.document.location.href;
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	var projectPath = curWwwPath.substring(0, pos);
	var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
	var path = projectPath + projectName;
	
	//标签
	document.write("<script language=javascript src='"+ path + "/js/tabbar.min.js'></script>");
	//弹出框
	document.write("<script language=javascript src='"+ path + "/js/dialog.min.js'></script>");
	//轮播图
	document.write("<script language=javascript src='"+ path + "/js/swiper.min.js'></script>");
	//动态效果
	document.write("<script language=javascript src='"+ path + "/js/aos.min.js'></script>");
	//vconsole
	document.write("<script language=javascript src='"+ path + "/js/vconsole.js'></script>");
})()
