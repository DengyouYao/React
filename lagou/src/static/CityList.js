import React, {
	Component
} from 'react';
import {
	hasHistory
} from 'react-router';
import './cityList.css';
import $ from 'jquery';
import CityItem from './cityItem';
import Cities from '../json/cities.json';
class CityList extends Component {
	constructor() {
		super();
		this.state = {
			cities: ""
		}
	}
	render() {
		var that = this;
		var cities = this.state.cities.map(function(item, index) {
			return <CityItem data={item} key={index} onChoice={that.props.onChoice}/>
		});
		return (
			<div>
				{cities}
			</div>
		)
	}
	componentWillMount() {
		this.setState({
			cities: Cities
		})
	}
}
export default CityList;