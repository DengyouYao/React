const Cookie = function(key, value, options) {
	// writing
	if (typeof value !== "undefined") { // 有传递 value 则保存cookie
		options = options || {};
		// 构建 cookie 字符串
		var _cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value);
		// 判断是否有可选参数的设置
		if (options.expires) { // 有设置失效时间
			var date = new Date();
			date.setDate(date.getDate() + options.expires);
			_cookie += ";expires=" + date.toUTCString();
		}
		if (options.path) // 有设置路径
			_cookie += ";path=" + options.path;
		if (options.domain) // 有设置域
			_cookie += ";domain=" + options.domain;
		if (options.secure) // 有设置链接条件
			_cookie += ";secure";

		// 保存
		return document.cookie = _cookie;
	}

	// reading
	// 获取所有的 cookie
	var cookies = document.cookie.split("; ")
		// 遍历每条cookie，判断是否当前要找的 cookie 内容
	for (var i = 0, len = cookies.length; i < len; i++) {
		// 将当前遍历到的 key=value 内容以 = 分割
		var parts = cookies[i].split("=");
		// 数组中第一个元素为 cookie 名
		var name = decodeURIComponent(parts.shift());
		// 判断当前cookie名是否为要查找的cookie名称
		if (name === key)
			return decodeURIComponent(parts.join("=")); // 返回 cookie 值
	}
	// 如果不存在查找的 cookie
	return undefined;
}

// 删除cookie
const RemoveCookie = function(key, options) {
	options = options || {};
	options.expires = -1;
	Cookie(key, "", options);
}

export default {
	Cookie,
	RemoveCookie
}