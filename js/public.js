/**
 * @editor wangyuhui

 * @此js多数直接借鉴：https://www.jianshu.com/p/c22f51bc2178，如有冒犯，还请见谅

 * @version 1.0

 */


/** 
 * 验证格式 
 *  
 * @param  {o} 验证的对象 
 * @param  {type} 类型：字符串（String）、数字（Number）、布尔型(Boolean)、函数（Function）、null（Null）、undefined（Undefined）、对象（Object）、
 * 						数组（Array）、时间（Date）、正则（RegExp）、错误对象（Error）、Symbol（Symbol）、Promise（Promise）、Set（Set）
 * @return {String/Boolen} 字符串/布尔型 
 * 
 * @example getProtype('2018', 'string') // -> true
 * @example getProtype(20) // -> 'Number'
 */

function getProtype(o, type) {
	var checkResult = Object.prototype.toString.call(o).slice(8, -1);
	return type ? (checkResult === type) : checkResult;
}

/** 
 * 验证是否为空 
 *  
 * @param  {o} 验证的对象 
 * @return {Boolen} 布尔型 
 * 
 * @example isFalse('') // -> true
 */
function isFalse(o) {
	if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true
	return false
}

/** 
 * 获取当前设备类型 
 *  
 * @return {string} 字符串 
 * 
 */
function getAgentType() {
	var u = navigator.userAgent;
	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机 
		return "Android";
	} else if (u.indexOf('iPhone') > -1) { //苹果手机 
		return "iPhone"; 
	} else if (u.indexOf('iPad') > -1) { //iPad 
		return "iPad"; 
	} else if (u.indexOf('iPod') > -1) { //iPod 
		return "iPod"; 
	} else if (u.indexOf('SymbianOS') > -1) { //SymbianOS
		return "SymbianOS"; 
	} else if (u.indexOf('Windows Phone') > -1) { //winphone手机 
		return "Windows Phone"; 
	} else {
		return "PC";
	}
}

/** 
 * 获取当前浏览器类型 
 *  
 * @return {string} 字符串 
 * 
 */
function getBrowserType() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
	var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器 
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器 
	var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
	var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器   
	var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器 
	var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器 
	var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器 

	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if (fIEVersion == 7) return "IE7"
		else if (fIEVersion == 8) return "IE8";
		else if (fIEVersion == 9) return "IE9";
		else if (fIEVersion == 10) return "IE10";
		else return "IE7以下" //IE版本过低 
	}
	if (isIE11) return 'IE11';
	if (isEdge) return "Edge";
	if (isFF) return "FF";
	if (isOpera) return "Opera";
	if (isSafari) return "Safari";
	if (isChrome) return "Chrome";
}

/** 
 * 验证字符串
 *  
 * @param  {str} 验证的字符串
 * @param  {type} 验证的类型
 * 
 * @return {Boolen/string} 布尔型/字符串型
 * 
 * @example checkStr('1223','phone') // -> false
 */
function checkStr(str, type, flag) {
	if(!flag){
		if(isFalse(str)){
			return "不能为空";
		}
	}
	switch (type) {
		case 'phone': //手机号码 
			return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
		case 'tel': //座机 
			return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
		case 'card': //身份证 
			return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
		case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线 
			return /^[a-zA-Z]\w{5,17}$/.test(str)
		case 'postal': //邮政编码 
			return /[1-9]\d{5}(?!\d)/.test(str);
		case 'QQ': //QQ号 
			return /^[1-9][0-9]{4,9}$/.test(str);
		case 'email': //邮箱 
			return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
		case 'money': //金额(小数点2位) 
			return /^\d*(?:\.\d{0,2})?$/.test(str);
		case 'URL': //网址 
			return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
		case 'IP': //IP 
			return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
		case 'date': //日期时间 
			return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/
				.test(str)
		case 'number': //数字 
			return /^[0-9]$/.test(str);
		case 'english': //英文 
			return /^[a-zA-Z]+$/.test(str);
		case 'chinese': //中文 
			return /^[\u4E00-\u9FA5]+$/.test(str);
		case 'lower': //小写 
			return /^[a-z]+$/.test(str);
		case 'upper': //大写 
			return /^[A-Z]+$/.test(str);
		case 'HTML': //HTML标记 
			return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
		default:
			return true;
	}
}
// 严格的身份证校验 
function isCardID(sId) {
	if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
		alert('你输入的身份证长度或格式错误')
		return false
	}
	//身份证城市 
	var aCity = {
		11: "北京",
		12: "天津",
		13: "河北",
		14: "山西",
		15: "内蒙古",
		21: "辽宁",
		22: "吉林",
		23: "黑龙江",
		31: "上海",
		32: "江苏",
		33: "浙江",
		34: "安徽",
		35: "福建",
		36: "江西",
		37: "山东",
		41: "河南",
		42: "湖北",
		43: "湖南",
		44: "广东",
		45: "广西",
		46: "海南",
		50: "重庆",
		51: "四川",
		52: "贵州",
		53: "云南",
		54: "西藏",
		61: "陕西",
		62: "甘肃",
		63: "青海",
		64: "宁夏",
		65: "新疆",
		71: "台湾",
		81: "香港",
		82: "澳门",
		91: "国外"
	};
	if (!aCity[parseInt(sId.substr(0, 2))]) {
		alert('你的身份证地区非法')
		return false
	}

	// 出生日期验证 
	var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g,
			"/"),
		d = new Date(sBirthday)
	if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
		alert('身份证上的出生日期非法')
		return false
	}

	// 身份证号码校验 
	var sum = 0,
		weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
		codes = "10X98765432"
	for (var i = 0; i < sId.length - 1; i++) {
		sum += sId[i] * weights[i];
	}
	var last = codes[sum % 11]; //计算出来的最后一位身份证号码 
	if (sId[sId.length - 1] != last) {
		alert('你输入的身份证号非法')
		return false
	}

	return true
}

/** 
 * 格式化时间 
 *  
 * @param  {time} 时间 
 * @param  {cFormat} 格式 
 * @return {String} 字符串 
 * 
 * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00 
 */
function formatTime(time, cFormat) {
	if (arguments.length === 0) return null
	if ((time + '').length === 10) {
		time = +time * 1000
	}

	var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}',
		date
	if (typeof time === 'object') {
		date = time
	} else {
		date = new Date(time)
	}

	var formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	}
	var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
		var value = formatObj[key]
		if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
		if (result.length > 0 && value < 10) {
			value = '0' + value
		}
		return value || 0
	})
	return time_str
}



/*判断一个元素是否在数组中*/
function contains(arr, val) {
	return arr.indexOf(val) != -1 ? true : false;
}

/** 
 * @param  {arr} 数组 
 * @param  {fn} 回调函数 
 * @return {undefined} 
 */
function each(arr, fn) {
	fn = fn || Function;
	var a = [];
	var args = Array.prototype.slice.call(arguments, 1);
	for (var i = 0; i < arr.length; i++) {
		var res = fn.apply(arr, [arr[i], i].concat(args));
		if (res != null) a.push(res);
	}
}

/** 
 * @param  {arr} 数组 
 * @param  {fn} 回调函数 
 * @param  {thisObj} this指向 
 * @return {Array}  
 */
function map(arr, fn, thisObj) {
	var scope = thisObj || window;
	var a = [];
	for (var i = 0, j = arr.length; i < j; ++i) {
		var res = fn.call(scope, arr[i], i, this);
		if (res != null) a.push(res);
	}
	return a;
}

/** 
 * @param  {arr} 数组 
 * @param  {type} 1：从小到大   2：从大到小   3：随机 
 * @return {Array} 
 */
function sort(arr, type = 1) {
	return arr.sort((a, b) => {
		switch (type) {
			case 1:
				return a - b;
			case 2:
				return b - a;
			case 3:
				return Math.random() - 0.5;
			default:
				return arr;
		}
	})
}

/*去重*/
function unique(arr) {
	if (Array.hasOwnProperty('from')) {
		return Array.from(new Set(arr));
	} else {
		var n = {},
			r = [];
		for (var i = 0; i < arr.length; i++) {
			if (!n[arr[i]]) {
				n[arr[i]] = true;
				r.push(arr[i]);
			}
		}
		return r;
	}
}

/*求两个集合的并集*/
function union(a, b) {
	var newArr = a.concat(b);
	return this.unique(newArr);
}

/*求两个集合的交集*/
function intersect(a, b) {
	var _this = this;
	a = this.unique(a);
	return this.map(a, function(o) {
		return _this.contains(b, o) ? o : null;
	});
}

/*删除其中一个元素*/
function remove(arr, ele) {
	var index = arr.indexOf(ele);
	if (index > -1) {
		arr.splice(index, 1);
	}
	return arr;
}

/*将类数组转换为数组的方法*/
function formArray(ary) {
	var arr = [];
	if (Array.isArray(ary)) {
		arr = ary;
	} else {
		arr = Array.prototype.slice.call(ary);
	};
	return arr;
}

/*最大值*/
function max(arr) {
	return Math.max.apply(null, arr);
}

/*最小值*/
function min(arr) {
	return Math.min.apply(null, arr);
}

/*求和*/
function sum(arr) {
	return arr.reduce((pre, cur) => {
		return pre + cur
	})
}

/*平均值*/
function average(arr) {
	return this.sum(arr) / arr.length
}


/** 
 * 去除空格 
 * @param  {str} 
 * @param  {type}  
 *       type:  1-所有空格  2-前后空格  3-前空格 4-后空格 
 * @return {String} 
 */
function trim(str, type) {
	type = type || 1
	switch (type) {
		case 1:
			return str.replace(/\s+/g, "");
		case 2:
			return str.replace(/(^\s*)|(\s*$)/g, "");
		case 3:
			return str.replace(/(^\s*)/g, "");
		case 4:
			return str.replace(/(\s*$)/g, "");
		default:
			return str;
	}
}

/** 
 * @param  {str}  
 * @param  {type} 
 *       type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写 
 * @return {String} 
 */
function changeCase(str, type) {
	type = type || 4
	switch (type) {
		case 1:
			return str.replace(/\b\w+\b/g, function(word) {
				return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

			});
		case 2:
			return str.replace(/\b\w+\b/g, function(word) {
				return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
			});
		case 3:
			return str.split('').map(function(word) {
				if (/[a-z]/.test(word)) {
					return word.toUpperCase();
				} else {
					return word.toLowerCase()
				}
			}).join('')
		case 4:
			return str.toUpperCase();
		case 5:
			return str.toLowerCase();
		default:
			return str;
	}
}

/* 
    检测密码强度 
*/
function checkPwd(str) {
	var Lv = 0;
	if (str.length < 6) {
		return Lv
	}
	if (/[0-9]/.test(str)) {
		Lv++
	}
	if (/[a-z]/.test(str)) {
		Lv++
	}
	if (/[A-Z]/.test(str)) {
		Lv++
	}
	if (/[\.|-|_]/.test(str)) {
		Lv++
	}
	return Lv;
}

/*过滤html代码(把<>转换)*/
function filterTag(str) {
	str = str.replace(/&/ig, "&amp;");
	str = str.replace(/</ig, "&lt;");
	str = str.replace(/>/ig, "&gt;");
	str = str.replace(" ", " ");
	return str;
}


/*随机数范围*/
function random(min, max) {
	if (arguments.length === 2) {
		return Math.floor(min + Math.random() * ((max + 1) - min))
	} else {
		return null;
	}

}

/*将阿拉伯数字翻译成中文的大写数字*/
function numberToChinese(num) {
	var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
	var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
	var a = ("" + num).replace(/(^0*)/g, "").split("."),
		k = 0,
		re = "";
	for (var i = a[0].length - 1; i >= 0; i--) {
		switch (k) {
			case 0:
				re = BB[7] + re;
				break;
			case 4:
				if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
					.test(a[0]))
					re = BB[4] + re;
				break;
			case 8:
				re = BB[5] + re;
				BB[7] = BB[5];
				k = 0;
				break;
		}
		if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
			re = AA[0] + re;
		if (a[0].charAt(i) != 0)
			re = AA[a[0].charAt(i)] + BB[k % 4] + re;
		k++;
	}

	if (a.length > 1) // 加上小数部分(如果有小数部分) 
	{
		re += BB[6];
		for (var i = 0; i < a[1].length; i++)
			re += AA[a[1].charAt(i)];
	}
	if (re == '一十')
		re = "十";
	if (re.match(/^一/) && re.length == 3)
		re = re.replace("一", "");
	return re;
}

/*将数字转换为大写金额*/
function changeToChinese(Num) {
	//判断如果传递进来的不是字符的话转换为字符 
	if (typeof Num == "number") {
		Num = new String(Num);
	};
	Num = Num.replace(/,/g, "") //替换tomoney()中的“,” 
	Num = Num.replace(/ /g, "") //替换tomoney()中的空格 
	Num = Num.replace(/￥/g, "") //替换掉可能出现的￥字符 
	if (isNaN(Num)) { //验证输入的字符是否为数字 
		//alert("请检查小写金额是否正确"); 
		return "";
	};
	//字符处理完毕后开始转换，采用前后两部分分别转换 
	var part = String(Num).split(".");
	var newchar = "";
	//小数点前进行转化 
	for (var i = part[0].length - 1; i >= 0; i--) {
		if (part[0].length > 10) {
			return "";
			//若数量超过拾亿单位，提示 
		}
		var tmpnewchar = ""
		var perchar = part[0].charAt(i);
		switch (perchar) {
			case "0":
				tmpnewchar = "零" + tmpnewchar;
				break;
			case "1":
				tmpnewchar = "壹" + tmpnewchar;
				break;
			case "2":
				tmpnewchar = "贰" + tmpnewchar;
				break;
			case "3":
				tmpnewchar = "叁" + tmpnewchar;
				break;
			case "4":
				tmpnewchar = "肆" + tmpnewchar;
				break;
			case "5":
				tmpnewchar = "伍" + tmpnewchar;
				break;
			case "6":
				tmpnewchar = "陆" + tmpnewchar;
				break;
			case "7":
				tmpnewchar = "柒" + tmpnewchar;
				break;
			case "8":
				tmpnewchar = "捌" + tmpnewchar;
				break;
			case "9":
				tmpnewchar = "玖" + tmpnewchar;
				break;
		}
		switch (part[0].length - i - 1) {
			case 0:
				tmpnewchar = tmpnewchar + "元";
				break;
			case 1:
				if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
				break;
			case 2:
				if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
				break;
			case 3:
				if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
				break;
			case 4:
				tmpnewchar = tmpnewchar + "万";
				break;
			case 5:
				if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
				break;
			case 6:
				if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
				break;
			case 7:
				if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
				break;
			case 8:
				tmpnewchar = tmpnewchar + "亿";
				break;
			case 9:
				tmpnewchar = tmpnewchar + "拾";
				break;
		}
		var newchar = tmpnewchar + newchar;
	}
	//小数点之后进行转化 
	if (Num.indexOf(".") != -1) {
		if (part[1].length > 2) {
			// alert("小数点之后只能保留两位,系统将自动截断"); 
			part[1] = part[1].substr(0, 2)
		}
		for (i = 0; i < part[1].length; i++) {
			tmpnewchar = ""
			perchar = part[1].charAt(i)
			switch (perchar) {
				case "0":
					tmpnewchar = "零" + tmpnewchar;
					break;
				case "1":
					tmpnewchar = "壹" + tmpnewchar;
					break;
				case "2":
					tmpnewchar = "贰" + tmpnewchar;
					break;
				case "3":
					tmpnewchar = "叁" + tmpnewchar;
					break;
				case "4":
					tmpnewchar = "肆" + tmpnewchar;
					break;
				case "5":
					tmpnewchar = "伍" + tmpnewchar;
					break;
				case "6":
					tmpnewchar = "陆" + tmpnewchar;
					break;
				case "7":
					tmpnewchar = "柒" + tmpnewchar;
					break;
				case "8":
					tmpnewchar = "捌" + tmpnewchar;
					break;
				case "9":
					tmpnewchar = "玖" + tmpnewchar;
					break;
			}
			if (i == 0) tmpnewchar = tmpnewchar + "角";
			if (i == 1) tmpnewchar = tmpnewchar + "分";
			newchar = newchar + tmpnewchar;
		}
	}
	//替换所有无用汉字 
	while (newchar.search("零零") != -1)
		newchar = newchar.replace("零零", "零");
	newchar = newchar.replace("零亿", "亿");
	newchar = newchar.replace("亿万", "亿");
	newchar = newchar.replace("零万", "万");
	newchar = newchar.replace("零元", "元");
	newchar = newchar.replace("零角", "");
	newchar = newchar.replace("零分", "");
	if (newchar.charAt(newchar.length - 1) == "元") {
		newchar = newchar + "整"
	}
	return newchar;
}


/** 
 * @param  {setting} 
 */
function ajax(setting) {
	//设置参数的初始值 
	var opts = {
		method: (setting.method || "GET").toUpperCase(), //请求方式 
		url: setting.url || "", // 请求地址 
		async: setting.async || true, // 是否异步 
		dataType: setting.dataType || "json", // 解析方式 
		data: setting.data || "", // 参数 
		success: setting.success || function() {}, // 请求成功回调 
		error: setting.error || function() {} // 请求失败回调 
	}

	// 参数格式化 
	function params_format(obj) {
		var str = ''
		for (var i in obj) {
			str += i + '=' + obj[i] + '&'
		}
		return str.split('').slice(0, -1).join('')
	}

	// 创建ajax对象 
	var xhr = new XMLHttpRequest();

	// 连接服务器open(方法GET/POST，请求地址， 异步传输) 
	if (opts.method == 'GET') {
		xhr.open(opts.method, opts.url + "?" + params_format(opts.data), opts.async);
		xhr.send();
	} else {
		xhr.open(opts.method, opts.url, opts.async);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(opts.data);
	}

	/* 
	 ** 每当readyState改变时，就会触发onreadystatechange事件 
	 ** readyState属性存储有XMLHttpRequest的状态信息 
	 ** 0 ：请求未初始化 
	 ** 1 ：服务器连接已建立 
	 ** 2 ：请求已接受 
	 ** 3 : 请求处理中 
	 ** 4 ：请求已完成，且相应就绪 
	 */
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
			switch (opts.dataType) {
				case "json":
					var json = JSON.parse(xhr.responseText);
					opts.success(json);
					break;
				case "xml":
					opts.success(xhr.responseXML);
					break;
				default:
					opts.success(xhr.responseText);
					break;
			}
		}
	}

	xhr.onerror = function(err) {
		opts.error(err);
	}
}

/** 
 * @param  {url} 
 * @param  {setting} 
 * @return {Promise} 
 */
function fetch(url, setting) {
	//设置参数的初始值 
	let opts = {
		method: (setting.method || 'GET').toUpperCase(), //请求方式 
		headers: setting.headers || {}, // 请求头设置 
		credentials: setting.credentials || true, // 设置cookie是否一起发送 
		body: setting.body || {},
		mode: setting.mode || 'no-cors', // 可以设置 cors, no-cors, same-origin 
		redirect: setting.redirect || 'follow', // follow, error, manual 
		cache: setting.cache || 'default' // 设置 cache 模式 (default, reload, no-cache) 
	}
	let dataType = setting.dataType || "json", // 解析方式   
		data = setting.data || "" // 参数 

	// 参数格式化 
	function params_format(obj) {
		var str = ''
		for (var i in obj) {
			str += `${i}=${obj[i]}&`
		}
		return str.split('').slice(0, -1).join('')
	}

	if (opts.method === 'GET') {
		url = url + (data ? `?${params_format(data)}` : '')
	} else {
		setting.body = data || {}
	}

	return new Promise((resolve, reject) => {
		fetch(url, opts).then(async res => {
			let data = dataType === 'text' ? await res.text() :
				dataType === 'blob' ? await res.blob() : await res.json()
			resolve(data)
		}).catch(e => {
			reject(e)
		})
	})

}

/*获取兄弟节点*/
function siblings(ele) {
	var chid = ele.parentNode.children,
		eleMatch = [];
	for (var i = 0, len = chid.length; i < len; i++) {
		if (chid[i] != ele) {
			eleMatch.push(chid[i]);
		}
	}
	return eleMatch;
}

/*获取行间样式属性*/
function getByStyle(obj, name) {
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name];
	}
}



class StorageFn {
	constructor() {
		this.ls = window.localStorage;
		this.ss = window.sessionStorage;
	}

	/*-----------------cookie---------------------*/
	/*设置cookie*/
	setCookie(name, value, day) {
		var setting = arguments[0];
		if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
			for (var i in setting) {
				var oDate = new Date();
				oDate.setDate(oDate.getDate() + day);
				document.cookie = i + '=' + setting[i] + ';expires=' + oDate;
			}
		} else {
			var oDate = new Date();
			oDate.setDate(oDate.getDate() + day);
			document.cookie = name + '=' + value + ';expires=' + oDate;
		}

	}

	/*获取cookie*/
	getCookie(name) {
		var arr = document.cookie.split('; ');
		for (var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split('=');
			if (arr2[0] == name) {
				return arr2[1];
			}
		}
		return '';
	}

	/*删除cookie*/
	removeCookie(name) {
		this.setCookie(name, 1, -1);
	}

	/*-----------------localStorage---------------------*/
	/*设置localStorage*/
	setLocal(key, val) {
		var setting = arguments[0];
		if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
			for (var i in setting) {
				this.ls.setItem(i, JSON.stringify(setting[i]))
			}
		} else {
			this.ls.setItem(key, JSON.stringify(val))
		}

	}

	/*获取localStorage*/
	getLocal(key) {
		if (key) return JSON.parse(this.ls.getItem(key))
		return null;

	}

	/*移除localStorage*/
	removeLocal(key) {
		this.ls.removeItem(key)
	}

	/*移除所有localStorage*/
	clearLocal() {
		this.ls.clear()
	}

	/*-----------------sessionStorage---------------------*/
	/*设置sessionStorage*/
	setSession(key, val) {
		var setting = arguments[0];
		if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
			for (var i in setting) {
				this.ss.setItem(i, JSON.stringify(setting[i]))
			}
		} else {
			this.ss.setItem(key, JSON.stringify(val))
		}

	}

	/*获取sessionStorage*/
	getSession(key) {
		if (key) return JSON.parse(this.ss.getItem(key))
		return null;

	}

	/*移除sessionStorage*/
	removeSession(key) {
		this.ss.removeItem(key)
	}

	/*移除所有sessionStorage*/
	clearSession() {
		this.ss.clear()
	}

}


/*获取网址参数*/
function getURL(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = decodeURI(window.location.search).substr(1).match(reg);
	if (r != null) return r[2];
	return null;
}

/*获取全部url参数,并转换成json对象*/
function getUrlAllParams(url) {
	var url = url ? url : window.location.href;
	var _pa = url.substring(url.indexOf('?') + 1),
		_arrS = _pa.split('&'),
		_rs = {};
	for (var i = 0, _len = _arrS.length; i < _len; i++) {
		var pos = _arrS[i].indexOf('=');
		if (pos == -1) {
			continue;
		}
		var name = _arrS[i].substring(0, pos),
			value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
		_rs[name] = value;
	}
	return _rs;
}

/*删除url指定参数，返回url*/
function delParamsUrl(url, name) {
	var baseUrl = url.split('?')[0] + '?';
	var query = url.split('?')[1];
	if (query.indexOf(name) > -1) {
		var obj = {}
		var arr = query.split("&");
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[i].split("=");
			obj[arr[i][0]] = arr[i][1];
		};
		delete obj[name];
		var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
		return url
	} else {
		return url;
	}
}

/*获取十六进制随机颜色*/
function getRandomColor() {
	return '#' + (function(h) {
		return new Array(7 - h.length).join("0") + h;
	})((Math.random() * 0x1000000 << 0).toString(16));
}

/*图片加载*/
function imgLoadAll(arr, callback) {
	var arrImg = [];
	for (var i = 0; i < arr.length; i++) {
		var img = new Image();
		img.src = arr[i];
		img.onload = function() {
			arrImg.push(this);
			if (arrImg.length == arr.length) {
				callback && callback();
			}
		}
	}
}

/*音频加载*/
function loadAudio(src, callback) {
	var audio = new Audio(src);
	audio.onloadedmetadata = callback;
	audio.src = src;
}

/*DOM转字符串*/
function domToStirng(htmlDOM) {
	var div = document.createElement("div");
	div.appendChild(htmlDOM);
	return div.innerHTML
}

/*字符串转DOM*/
function stringToDom(htmlString) {
	var div = document.createElement("div");
	div.innerHTML = htmlString;
	return div.children[0];
}

/** 
 * 光标所在位置插入字符，并设置光标位置 
 *  
 * @param {dom} 输入框 
 * @param {val} 插入的值 
 * @param {posLen} 光标位置处在 插入的值的哪个位置 
 */
function setCursorPosition(dom, val, posLen) {
	var cursorPosition = 0;
	if (dom.selectionStart) {
		cursorPosition = dom.selectionStart;
	}
	this.insertAtCursor(dom, val);
	dom.focus();
	console.log(posLen)
	dom.setSelectionRange(dom.value.length, cursorPosition + (posLen || val.length));
}

/*光标所在位置插入字符*/
function insertAtCursor(dom, val) {
	if (document.selection) {
		dom.focus();
		sel = document.selection.createRange();
		sel.text = val;
		sel.select();
	} else if (dom.selectionStart || dom.selectionStart == '0') {
		let startPos = dom.selectionStart;
		let endPos = dom.selectionEnd;
		let restoreTop = dom.scrollTop;
		dom.value = dom.value.substring(0, startPos) + val + dom.value.substring(endPos, dom.value.length);
		if (restoreTop > 0) {
			dom.scrollTop = restoreTop;
		}
		dom.focus();
		dom.selectionStart = startPos + val.length;
		dom.selectionEnd = startPos + val.length;
	} else {
		dom.value += val;
		dom.focus();
	}
}
