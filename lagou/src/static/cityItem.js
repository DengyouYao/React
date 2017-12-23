import React, {
	Component
} from 'react';
import {
	hasHistory
} from 'react-router';
import './cityList.css';
import $ from 'jquery';
class CityItemtr extends Component {
	constructor() {
		super();
		this.handleChoice = this.handleChoice.bind(this);
	}
	render() {
		return (
			<li className="activeable cities-item" style={{listStyle:"none",width:"33.3%",float:"left"}} data-item={this.props.datas}  onClick={this.handleChoice}>{this.props.datas}</li>
		)
	}
	handleChoice(e) {
		var value = e.target.getAttribute("data-item")
		this.props.onChoice(value);
	}
}
class CityItem extends Component {
	constructor() {
		super();
		this.state = {
			itemtr: ""
		}
	}
	render() {
		var that = this;
		let {
			data
		} = this.props;
		var list = data.cityList.map(function(item, index) {
			return <CityItemtr datas={item} key={index} onChoice={that.props.onChoice}/>
		})
		return (
			<div className="cities-list">
				<div className="cities-header">{data.nameStr}</div>
				<ul className="cities-list-item" style={{overflow:"hidden"}}>
					{list}
				</ul>
			</div>
		)
	}
}
export default CityItem;