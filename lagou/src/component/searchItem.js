import React, {
	Component
} from 'react';
import './header.css';
import {
	browserHistory,
	IndexRoute
} from 'react-router';
class SearchItem extends Component {
	constructor() {
		super();
		this.handleDelete = this.handleDelete.bind(this);
		this.handleLoad = this.handleLoad.bind(this);
	}
	render() {
		return (
			<li className="activeable history-item" >
				<span className="text" data-name={this.props.datas} onClick={this.handleLoad}>{this.props.datas}</span>
				<div className="delcon" data-name={this.props.datas} onClick={this.handleDelete}>
					<span className="delicon" data-name={this.props.datas}></span>
				</div>
			</li>
		)
	}
	handleLoad(e) {
		var value = e.target.getAttribute("data-name")
		this.props.load(value);
	}
	handleDelete(e) {
		var value = e.target.getAttribute("data-name")
		this.props.delete(value);
	}
}
export default SearchItem;