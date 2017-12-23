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
import EditItem from '../component/editItem';
class Edit extends Component {
	constructor() {
		super();
		this.state = {
			type: "请点击选择",
			address: "请点击选择",
			money: "请点击选择",
			compony: "请点击选择"
		}
		this.handleType = this.handleType.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}
	render() {
		var style = {
			height: "45px",
			lineHeight: "45px",
			color: "#fff",
			backgroundColor: "#00b38a",
			fontSize: "16px",
			textAlign: "center",
			position: "fixed",
			bottom: 0,
			left: 0,
			width: "100%"
		}
		return (
			<div>
				<Header title="设置定制信息" name='edit'/>
				<ul className="custom-info" style={{padding:"20px"}}>
					<EditItem title="职位匹配" name="type" onChioce={this.handleType} value={this.state.type}/>
					<EditItem title="工作地点" name="address" onChioce={this.handleType} value={this.state.address}/>
					<EditItem title="期望薪水" name="money" onChioce={this.handleType} value={this.state.money}/>
					<EditItem title="公司规模" name="company" onChioce={this.handleType} value={this.state.compony}/>
				</ul>
				<div className="search" style={style} onClick={this.handleSearch}>开始搜索</div>			
			</div>
		)
	}
	componentWillMount() {
		var datas = this.props.location.query;
		// console.log(datas.length());
		if (JSON.stringify(datas) == "{}") {
			return;
		}
		this.setState({
			type: this.props.location.query.type,
			address: this.props.location.query.address,
			money: this.props.location.query.money,
			compony: this.props.location.query.compony
		})

	}
	handleType(value) {
		if (value == "type") {
			browserHistory.push({
				pathname: "/edittype",
				query: {
					type: this.state.type,
					address: this.state.address,
					money: this.state.money,
					compony: this.state.compony
				}
			})
		} else if (value == "address") {
			browserHistory.push({
				pathname: "/editaddress",
				query: {
					type: this.state.type,
					address: this.state.address,
					money: this.state.money,
					compony: this.state.compony
				}
			})
		} else if (value == "money") {
			browserHistory.push({
				pathname: "/editmoney",
				query: {
					type: this.state.type,
					address: this.state.address,
					money: this.state.money,
					compony: this.state.compony
				}
			})
		} else if (value == "company") {
			browserHistory.push({
				pathname: "/editcompany",
				query: {

					type: this.state.type,
					address: this.state.address,
					money: this.state.money,
					compony: this.state.compony
				}
			})
		}
	}
	handleSearch() {
		var storage = window.localStorage;
		storage.setItem("search", JSON.stringify(this.state))
		browserHistory.push({
			pathname: "/",
		})
	}
}
export default Edit;