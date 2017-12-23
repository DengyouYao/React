import React, {
	Component
} from 'react';
import {
	browserHistory,
	Link,
	IndexLink,
	IndexRoute
} from 'react-router';
class EditType extends Component {
	constructor() {
		super();
		this.handleChoice = this.handleChoice.bind(this);
	}
	render() {
		var style = {
			display: "block",
			margin: "10px 0 20px 0",
			textAlign: "center",
			height: " 62.5px",
			lineHeight: "62.5px",
			color: "#333",
			fontSize: "15px",
			backgroundColor: "#f0f0f0",
			borderRadius: "2px",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			padding: "0 10px"
		}
		return (

			<li className="item">
	            <span style={{display:"block",color:"#ccc",fontSize:"13px"}}>
	                {this.props.title}
	            </span>
	            <a href="javascript:void(0);" className="desc" style={style} data-type={this.props.name} onClick={this.handleChoice}>{this.props.value}</a>
        	</li>
		)
	}
	handleChoice(e) {
		var value = e.target.getAttribute("data-type")
		console.log();
		this.props.onChioce(value);
	}
}
export default EditType;