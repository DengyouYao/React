import React, {
	Component
} from 'react';
import {
	browserHistory,
	IndexLink,
	Link
} from 'react-router';
import axios from 'axios';
import './Login.css';
class Register extends Component {
	constructor() {
		super();
		this.state = {
			image: {
				src: "",
				sid: ""
			},
			checkcode: "",
			phone: "",
			pwd: "",
			msg: ""
		}
		this.handleCheckCode = this.handleCheckCode.bind(this);
		this.handleVerify = this.handleVerify.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleRegist = this.handleRegist.bind(this);
	}
	render() {
		return (
			<div className="login">
				<div className="input">
					<div style ={{marginTop:"10px",borderRadius:"5px"}}>
						<input type="text" name="phone" value={this.state.phone} onChange={this.handleInput} id="phone" placeholder="手机号"/>
					</div>
					<div style ={{margin:"10px 0",borderRadius:"5px"}} id="vcodeWrap">
						<input type="text" name="valid" value={this.state.checkcode} onChange={this.handleInput} style ={{marginBottom:"13px"}} placeholder="证明你不是机器人"/>
						<img width="113" height="42" id="vcodeImg" src={this.state.image.src} data-sid={this.state.image.sid}/>
						<a onClick={this.handleCheckCode}>看不清楚，<em>换一张</em></a>
					</div>
					<div style ={{marginTop:"10px",borderRadius:"5px"}}>
						<input type="text" name="msg" value={this.state.msg} onChange={this.handleInput} id="" placeholder="短信验证码"/>
					</div>
					<div style ={{marginTop:"10px",borderRadius:"5px"}}>
						<input type="password" name="pwd" value={this.state.pwd} onChange={this.handleInput} id="password" placeholder="设置6-16为密码"/>
					</div>
				</div>
				<button type="submit" className="btn-login btn btn-primary btn-block" onClick={this.handleRegist}>注册</button>
				<div className="btn-regist">
					<span>已有账号？</span>
					<Link to={{pathname:'/login'}}>登录</Link>
					<span>点击注册，即代表你同意《拉勾网用户协议》</span>
				</div> 
			</div>
		)
	}
	componentWillMount() {
		this.handleCheckCode();
	}
	handleCheckCode() {
		axios.get("http://route.showapi.com/932-2?showapi_appid=48144&showapi_sign=cd43274bd0f7415b86531138076115f8", {}).then((res) => {
			this.setState({
				image: {
					src: res.data.showapi_res_body.image,
					sid: res.data.showapi_res_body.sid
				}
			})
		});
	}
	handleVerify() {
		var code = this.state.checkcode;
		var sid = this.state.image.sid;
		var status = true;
		axios.get("http://route.showapi.com/932-1?showapi_appid=48144&showapi_sign=cd43274bd0f7415b86531138076115f8&checkcode=" + code + "&sid=" + sid, {}).then((res) => {
			status = res.data.showapi_res_body.valid;
			return status;
		});


	}
	handleInput(e) {
		var name = e.target.getAttribute("name");
		if (name == "valid") {
			this.setState({
				checkcode: e.target.value
			})
		} else if (name == "phone") {
			this.setState({
				phone: e.target.value
			})
		} else if (name == "msg") {
			this.setState({
				msg: e.target.value
			})
		} else if (name == "pwd") {
			this.setState({
				pwd: e.target.value
			})
		}
	}
	handleRegist() {
		var code = this.state.checkcode;
		var sid = this.state.image.sid;
		axios.get("http://route.showapi.com/932-1?showapi_appid=48144&showapi_sign=cd43274bd0f7415b86531138076115f8&checkcode=" + code + "&sid=" + sid, {}).then((res) => {
			var status = res.data.showapi_res_body.valid;
			if (!status) {
				alert("验证码输入错误！");
				this.handleCheckCode();
				this.setState({
					checkcode: ""
				})
				return;
			} else {
				axios.post("http://localhost:8899/api/register", {
					phone: this.state.phone,
					pwd: this.state.pwd
				}).then((res) => {
					if (res.data.code == 0) {
						alert(res.data.msg);
						browserHistory.push({
							pathname: "/login"
						});
						return;
					} else {
						alert("注册失败");
					}
				})
			}
		});
	}
}
export default Register;