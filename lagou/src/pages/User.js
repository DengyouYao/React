import React, {
	Component
} from 'react';
import {
	browserHistory,
	IndexLink,
	Link
} from 'react-router';
import Cookie from '../static/cookie';
import './User.css';

class User extends Component {
	constructor() {
		super();
		this.state = {
			isLogin: false,
			toudiUrl: "/login",
			mianshiUrl: "/login",
			yaoyueUrl: "/login",
			shoucangUrl: "/login"
		}
		this.handleBack = this.handleBack.bind(this);
	}

	render() {

		let {
			isLogin,
			toudiUrl,
			mianshiUrl,
			yaoyueUrl,
			shoucangUrl
		} = this.state;
		if (!isLogin) {
			return (
				<div>
					<div className="title">
						<Link to={{pathname:"/login"}}>登录/注册</Link>
					</div>
					<div className="buttons">
						<Link to={{pathname:"/login"}}>投递</Link>
						<Link to={{pathname:"/login"}}>面试</Link>
						<Link to={{pathname:"/login"}}>邀约</Link>
						<Link to={{pathname:"/login"}}>收藏</Link>
					</div>	
				</div>
			)
		} else {
			return (
				<div>
					<div className="title">
						<a className="btn-jianli" href="https://www.lagou.com/center/preview.html">简历></a>
						<div className="headicon">
							<img className="headpic" src="https://static.lagou.com/images/myresume/default_headpic.png"/>
						</div>
						<p>{Cookie.Cookie("phone")}</p>
					</div>
					<div className="buttons">
						<Link to={{pathname:"/toudi"}}>投递</Link>
						<Link to={{pathname:"/mianshi"}}>面试</Link>
						<Link to={{pathname:"/yaoyue"}}>邀约</Link>
						<Link to={{pathname:"/shoucang"}}>收藏</Link>
					</div>
						<Link className="btn-back" to={{pathname:"/user"}} onClick={this.handleBack}>退出登录</Link>
						<div>{this.props.children}</div>
				</div>
			)
		}

	}
	componentWillMount() {
		var phone = Cookie.Cookie("phone");
		if (phone) {
			this.setState({
				isLogin: true,
				toudiUrl: "/toudi",
				mainshiUrl: "/mianshi",
				yaoyueUrl: "/yaoyue",
				shoucangUrl: "/shoucang"
			});
		}
	}
	handleBack() {
		Cookie.RemoveCookie("phone", "", {
			path: "/"
		});
		this.setState({
			isLogin: false
		})
	}
}
export default User;