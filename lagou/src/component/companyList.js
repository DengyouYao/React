import React, {
	Component
} from 'react';
import {
	browserHistory
} from 'react-router';
import CompanyItem from './companyItem.js';
class CompanyList extends Component {
	constructor() {
		super();
		this.handleJob = this.handleJob.bind(this);
	}
	render() {
		var that = this;
		var list = this.props.listData.map(function(item, index) {
			return <CompanyItem listData={item} key={index} onDetail={that.handleJob}/>
		})
		return (
			<ul>
				{list}
			</ul>
		)
	}
	handleJob(value) {
		browserHistory.push({
			pathname: '/jobsdetail',
			query: value
		});
		var companyDetail = this.props.listData.filter(function(item, index) {
			return (item.companyId == value.companyId && item.positionId == value.positionId);
		});
		var storage = window.localStorage;
		storage.setItem("companyDetail", JSON.stringify(companyDetail));
	}
}
export default CompanyList;