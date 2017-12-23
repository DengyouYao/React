import React, {
	Component
} from 'react';
import {
	browserHistory,
	Link,
	IndexLink,
	IndexRoute
} from 'react-router';
import CityList from '../static/CityList';
import Header from './header';
import EditHeader from './editHeader';

class EditAddress extends Component {
	constructor() {
		super();
		this.handelChoice = this.handelChoice.bind(this);
	}
	render() {
		return (
			<div>
				<Header title="设置定制信息"/>
				<EditHeader title="告诉我你期望的工作地点？"/>
				<CityList onChoice={this.handelChoice}/>	
			</div>
		)
	}
	componentWillMount() {
		var datas = this.props.location.query;
		this.setState({
			datas
		})
	}
	handelChoice(value) {
		browserHistory.push({
			pathname: '/edit',
			query: {
				type: this.state.datas.type,
				address: value,
				money: this.state.datas.money,
				compony: this.state.datas.compony
			}
		})
	}
}
export default EditAddress;