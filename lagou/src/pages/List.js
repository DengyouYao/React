import React, {
	Component
} from 'react';
import CompanyList from '../component/companyList';
import ListTitle from '../component/listTitle';
import ListBottom from '../component/listBottom';
import MoreLoad from '../component/moreLoad';
import cookie from '../static/cookie';
import axios from 'axios';
import $ from 'jquery';
import listData from '../json/listmore.json';

class List extends Component {
	constructor() {
		super();
		this.state = {
			search: {},
			list: []
		}
	}
	render() {
		var username = cookie.Cookie("username");
		return (
			<div>
				<ListTitle search={this.state.search}/>
				<CompanyList listData={this.state.list}/>
				<MoreLoad/>
				<ListBottom />
			</div>
		)
	}
	componentWillMount() {
		var storage = window.localStorage;
		let list = listData.content.data.page.result;
		var search = JSON.parse(storage.getItem("search"));
		this.setState({
			search,
			list
		});
	}
}
export default List;