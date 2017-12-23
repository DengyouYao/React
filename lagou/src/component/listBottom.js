import React, {
	Component
} from 'react';
import {
	browserHistory,
	Link
} from 'react-router';
class ListBottom extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div style={{marginBottom:"50px"}}>
					<div id="copyright" style={{textAlign: "center", fontSize: "12px",marginTop: "30px", paddingBottom: "40px",color: "#333"}}>
					<p>©2015 lagou.com, all right reserved </p>
					<div className="copyright-item" style={{height: "32px",lineHeight: "32px"}}>
						<span className="phone">移动版&nbsp;·&nbsp;</span>
						<span className="computer active">电脑版&nbsp;·&nbsp;</span>
						<a href="#">回顶部</a>
					</div>
				</div>
				
			</div>
		)
	}
}
export default ListBottom;