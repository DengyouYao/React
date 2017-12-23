var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/ydylago", {
		useMongooseClient: true
	}).then(function(db) {
		console.log("数据库连接成功！");
	})
	//处理post请求的JSON格式
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var User = require('./module/user');
app.post("/api/login", function(req, res) {
	let {
		phone,
		pwd
	} = req.body;
	User.find({
		phone
	}, function(err, doc) {
		if (err) {
			console.log("错误");
			return;
		}
		if (doc.length != 1) {
			res.json({
				code: 1,
				msg: "用户名不存在"
			});
			return;
		}
		if (doc[0].pwd != pwd) {
			res.json({
				code: 1,
				msg: "密码错误！"
			});
			return;
		}
		res.json({
			code: 0,
			msg: "登录成功"
		});
	});

});
app.post("/api/register", function(req, res) {
	let {
		phone,
		pwd
	} = req.body;
	var user = new User(req.body);
	user.save(function(err, doc) {
		if (err) {
			console.log("错误");
			return;
		}
		res.json({
			code: 0,
			msg: "注册成功"
		});
	})
});
app.listen(8899, function() {
	console.log("服务器启动成功！");
});