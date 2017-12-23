import React, {
	Component
} from 'react';
import {
	browserHistory
} from 'react-router';
import Header from '../component/header';
import CollectItem from '../component/shoucangItem';

class ShouCang extends Component {
	constructor() {
		super();
		this.state = {
			list: []
		}
		this.handleDetail = this.handleDetail.bind(this);
	}
	render() {
		var list = this.state.list.map((item, index) => {
			return <CollectItem datas={item} key={index} onDetail={this.handleDetail} />
		})
		return (
			<div>
				<Header title="我的收藏"/>
				<ul>
					{list}
				</ul>
				
			</div>
		)
	}
	componentWillMount() {
		var storage = window.localStorage;
		var list = JSON.parse(storage.getItem("collect"));
		this.setState({
			list
		});
	}
	handleDetail(value) {
		browserHistory.push({
			pathname: '/jobsdetail',
			query: value
		});
		var companyDetail = this.state.list.filter((item, index) => {
			return (item.companyId == value.companyId && item.positionId == value.positionId);
		});
		var storage = window.localStorage;
		storage.setItem("companyDetail", JSON.stringify(companyDetail));
	}
}
export default ShouCang;