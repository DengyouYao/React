import React, {
	Component
} from 'react';
import './header.css';
import {
	browserHistory,
	IndexRoute
} from 'react-router';
class ClosePlus extends Component {
	constructor() {
		super();
		this.handleStatus = this.handleStatus.bind(this);
	}
	render() {
		return (
			<div>
				<div className="plus">
					<div className="bulb"></div>
					<p>开启拉勾PLUS（邀约功能）,将自己匿名展示给职位发布者,并可以收到来自企业的主动邀请;关闭此功能你将不会被任何企业发现,但可能会错过匹配的职位。</p>
					<div className="plusbtn">
						<span>已关闭</span>
						<div className="btn" onClick={this.handleStatus}>
							<em className="circle"></em>
							<i className="close"></i>
						</div>
					</div>
				</div>
				<div className="explain">
					<div className="txt">
						<p>1.本功能暂时只对部分拉勾认证企业开放，</p>
						<p className="indent">不必担心被海量邀请骚扰。</p>
					</div>
					<div className="txt">
						<p>2.不想被某些企业搜到？</p>
						<p className="indent">你可以自由设置想屏蔽的企业。</p>
					</div>
					<div className="txt">
						<p>3.投递简历后，企业会根据你的完整简历</p>
						<p className="indent">来决定是否邀请你参加面试。</p>
					</div>
				</div>
		    </div>
		)
	}
	handleStatus() {
		this.props.onStatus();
	}
}
export default ClosePlus;