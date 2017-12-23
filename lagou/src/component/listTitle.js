import React, {
	Component
} from 'react';
import {
	browserHistory,
	Link
} from 'react-router';
import Cookie from '../static/cookie';

class ListTitle extends Component {
	constructor() {
		super();
	}
	render() {
		var phone = Cookie.Cookie("phone");
		let {
			type,
			address,
			money,
			compony
		} = this.props.search;
		if (phone) {
			return (
				<div style={{borderBottom: "1px solid #999"}}>
						<p style={{lineHeight:"43px",fontSize:"15px",color: "#555",padding:"0 15px",height:"43px",display:"flex",justifyContent:'space-between'}}>
						<span>{type}/{address}/{money}/{compony}</span>
						<Link style={{marginTop:"6px",padding:"0 20px",display:"block",height:"30px",background:"#f5f5f0",lineHeight:"30px",fontSize:15,color:"green",borderRadius:"15px"}} to={{pathname:"/edit",query:this.props.search}}>编辑</Link>
					</p>
				</div>
			)
		} else {
			return (
				<div style={{borderBottom: "1px solid #999"}}>
					<p style={{lineHeight:"43px",padding:"0 15px",height:"43px",display:"flex",justifyContent:'space-between'}}>
						<span>10秒钟定制职位</span>
						<Link style={{marginTop:"6px",padding:"0 20px",display:"block",height:"30px",background:"#f5f5f0",lineHeight:"30px",fontSize:15,color:"green",borderRadius:"15px"}} to={{pathname:"/login"}}>去登录</Link>
					</p>
				</div>
			)
		}

	}
}
export default ListTitle;