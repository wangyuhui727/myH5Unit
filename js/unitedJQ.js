(function() {
	var curWwwPath = window.document.location.href;
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	var projectPath = curWwwPath.substring(0, pos);
	var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
	var path = projectPath + projectName;
	var version = Math.round(Math.random() * 10); //版本号，更新版本时实时更新，避免缓存问题，此处取随机数

	//jQuery
	document.write("<script language=javascript src='" + path + "/js/jquery.min.js?verson=" + version + "'></script>");
	//动态效果
	document.write("<script language=javascript src='" + path + "/js/aos.min.js?verson=" + version + "'></script>");
})()
