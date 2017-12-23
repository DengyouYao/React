import React, {
	Component
} from 'react';
import {
	browserHistory,
	Link,
	IndexLink,
	IndexRoute
} from 'react-router';
import Header from './header';
import EditHeader from './editHeader';
import EditItemList from './editItemList';

class EditCompany extends Component {
	constructor() {
		super();
		this.state = {
			datas: [],
			inputer: "",
			typeDatas: ["没有要求", "初创型", "成长型", "成熟型", "上市公司"]
		}
		this.handelChoice = this.handelChoice.bind(this);
	}
	render() {
		var that = this;
		var types = this.state.typeDatas.map(function(item, index) {
			return <EditItemList list={item} key={index} onChoice={that.handelChoice}/>
		})
		return (
			<div>
				<Header title="设置定制信息"/>
				<EditHeader title="对公司的规模可有要求？"/>
				<ul style={{marginLeft:"15px"}}>
					{types}
				</ul>			
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
				address: this.state.datas.address,
				money: this.state.datas.money,
				compony: value
			}
		})
	}
}
export default EditCompany;