import React, {
	Component
} from 'react';
import {
	browserHistory,
	Link,
	IndexLink,
	IndexRoute
} from 'react-router';
import Header from '../component/header';
class EditHeader extends Component {
	constructor() {
		super();
	}
	render() {
		var info = {
			background: "url(https://static.lagou.com/images/mobile/asset/common/img/back-info.jpg) repeat",
			backgroundSize: "320px 125px",
			height: "125px",
			color: "#00b38a",
			fontSize: "19px",
			textAlign: "center",
			borderBottom: "1px solid #e8e8e8"
		};
		var text = {
			display: "inline-block",
			position: "relative",
			height: "25px",
			top: "50px"
		}
		var left = {
			left: "-20px",
			top: "-2px",
			background: "url(https://static.lagou.com/images/mobile/asset/common/img/icon.png) no-repeat -102.5px -4px",
			backgroundSize: "250px 250px",
			display: "inline-block",
			width: "13px",
			height: "10.5px",
			position: "absolute"
		}
		var right = {
			right: "-14px",
			top: "15px",
			background: "url(https://static.lagou.com/images/mobile/asset/common/img/icon.png) no-repeat -119.5px -4px",
			backgroundSize: "250px 250px",
			display: "inline-block",
			width: "13px",
			height: "10.5px",
			position: "absolute"
		}
		return (
			<div className="info" style={info}>
	            <span className="text" style={text}>
	                <em className="left" style={left}></em>
	                    {this.props.title}
	                <em className="right" style={right}></em>
	            </span>
	        </div>
		)
	}
}
export default EditHeader;