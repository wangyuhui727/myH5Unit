(function() {
	var curWwwPath = window.document.location.href;
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	var projectPath = curWwwPath.substring(0, pos);
	var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
	var path = projectPath + projectName;
	var version = Math.round(Math.random() * 10); //版本号，更新版本时实时更新，避免缓存问题，此处取随机数
	let mobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
	
	//常用
	document.write("<script language=javascript src='" + path + "/js/public.js?verson=" + version + "'></script>");
	//标签
	document.write("<script language=javascript src='" + path + "/js/tabbar.min.js?verson=" + version + "'></script>");
	//弹出框
	if (mobile) document.write("<script language=javascript src='" + path + "/js/dialog.min.js?verson=" + version + "'></script>");
	else document.write("<script language=javascript src='" + path + "/js/dialogPX.min.js?verson=" + version + "'></script>");
	//轮播图
	document.write("<script language=javascript src='" + path + "/js/swiper.min.js?verson=" + version + "'></script>");
	//动态效果
	document.write("<script language=javascript src='" + path + "/js/aos.min.js?verson=" + version + "'></script>");
	//vconsole
	// document.write("<script language=javascript src='"+ path + "/js/vconsole.js?verson=" + version + "'></script>");
})()