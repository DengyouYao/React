import React, {
	Component
} from 'react';
import {
	browserHistory,
	IndexLink,
	Link
} from 'react-router';
import axios from 'axios';
import $ from 'jquery';
import './Login.css';
import Cookie from './cookie';
class Login extends Component {
	constructor() {
		super();
		this.state = {
			phone: "",
			pwd: ""
		}
		this.handleLogin = this.handleLogin.bind(this);
		this.handleUser = this.handleUser.bind(this);
		this.handlePwd = this.handlePwd.bind(this);
	}
	render() {
		return (
			<div className="login">
				<div className="input">
					<div className="loginlist">
						<input type="text" ref="username" value={this.state.phone} name="" id="phone" onChange={this.handleUser} placeholder="已验证手机/邮箱"/>
					</div>
					<div className="loginlist">
						<input type="password" ref="username" value={this.state.pwd} name="" id="password" onChange={this.handlePwd} placeholder="密码"/>
					</div>					
				</div>
				<button type="submit" className="btn-login" onClick={this.handleLogin}>登录</button>
				<div className="btn-regist">
					<span>还没有账号？</span>
					<Link to={{pathname:'/register'}}>注册</Link>
				</div> 
			</div>
		)
	}
	handleLogin() {
		var phone = this.state.phone;
		var pwd = this.state.pwd;
		if (!phone || !pwd) {
			alert("请输入用户名和密码");
			return;
		}
		axios.post("http://localhost:8899/api/login", {
			phone,
			pwd
		}).then(function(res) {
			alert(res.data.msg);
			if (res.data.code == 0) {
				Cookie.Cookie("phone", phone, {
					path: "/"
				});
				browserHistory.push({
					pathname: "/user"
				})
			}
		});
	}
	handleUser(e) {
		this.setState({
			phone: e.target.value
		})
	}
	handlePwd(e) {
		this.setState({
			pwd: e.target.value
		})
	}
}
export default Login;