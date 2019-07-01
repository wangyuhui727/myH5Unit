(function() {
	var curWwwPath = window.document.location.href;
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	var projectPath = curWwwPath.substring(0, pos);
	var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
	var path = projectPath + projectName;

	var sNew = document.createElement("script");
	sNew.async = true;
	sNew.src = path + "/js/aos.min.js";
	var s0 = document.getElementsByTagName('script')[0];
	s0.parentNode.insertBefore(sNew, s0);

	var sNew = document.createElement("script");
	sNew.async = true;
	sNew.src = path + "/js/jquery.min.js";
	var s0 = document.getElementsByTagName('script')[0];
	s0.parentNode.insertBefore(sNew, s0);

	var sNew = document.createElement("script");
	sNew.async = true;
	sNew.src = path + "/js/swiper.min.js";
	var s0 = document.getElementsByTagName('script')[0];
	s0.parentNode.insertBefore(sNew, s0);
})()
