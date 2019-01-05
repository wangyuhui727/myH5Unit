
//显示加载框
var Ml = {};
function showLoading(content) {
	content = content || "";
	if (Ml.dialog11) {
		return Ml.dialog11.show();
	}

	Ml.dialog11 = jqueryAlert({
		'icon':'img/loading.gif',
		'content': content,
		'closeTime': 10000,
		'animateType' : "",
	})
}
//关闭加载框
function hideLoading() {
	if (Ml.dialog11) {
		return Ml.dialog11.close();
	}
}

//消息提示框
function showToast(content) {
	var M = {};
	if (M.dialog1) {
		return M.dialog1.show();
	}

	M.dialog1 = jqueryAlert({
		'content': content,
		'closeTime': 2000,
	})
}

//确认框
function showConfirm(json, callback) {
	var title = json.title || "询问";
	var content = json.content || "";
	var surbtn = json.surbtn || "确定";
	var cancelbtn = json.cancelbtn || "取消";
	var M = {};
	if (M.dialog3) {
		return M.dialog3.show();
	}
	M.dialog3 = jqueryAlert({
		'title': title,
		'content': content,
		'modal': true,
		'width': '90%',
		'buttons': {
			'确定': function() {
				if(callback){
					callback();
				}
				M.dialog3.close();
			},
			'取消': function() {
				M.dialog3.close();
			}
		}
	})
	$(".alert-btn-p1").html(surbtn);
	$(".alert-btn-p2").html(cancelbtn);
}