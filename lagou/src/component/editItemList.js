import React, {
	Component
} from 'react';
class EditItemList extends Component {
	constructor() {
		super();
		this.handleChoice = this.handleChoice.bind(this);
	}
	render() {
		var item = {
			height: "44px",
			lineHeight: "44px",
			color: "#666",
			fontSize: "15px",
			borderBottom: "1px solid #e8e8e8",
			padding: "0 15px 0 10px",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		}
		return (
			<li className="item" data-word={this.props.list} style={item} onClick={this.handleChoice}>{this.props.list}</li>
		)
	}
	handleChoice(e) {
		var value = e.target.getAttribute("data-word");
		this.props.onChoice(value);
	}
}
export default EditItemList;