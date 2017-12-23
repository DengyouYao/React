import React, {
	Component
} from 'react';
import {
	browserHistory,
	IndexRoute
} from 'react-router';
class StartPlus extends Component {
	constructor() {
		super();
		this.handleStatus = this.handleStatus.bind(this);
	}
	render() {
		return (
			<div>
		        <div className="oplus">
		            <div className="plusbtn">
		                <h3>已开启</h3>
		                <div className="btn" onClick={this.handleStatus}>
		                    <em className="circle"></em>
		                    <i className="close"></i>
		                </div>
		            </div>
		            <a href="javescript:void();" className="shield">设置要屏蔽的企业 &gt;</a>
		        </div>
		        <ul className="list"><li className="item empty">暂时还没有收到邀约，你可以一边主动投简历，一边等待企业的邀约~</li></ul>
		    </div>
		)
	}
	handleStatus() {
		this.props.onStatus();
	}
}
export default StartPlus;