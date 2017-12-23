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

class EditMoney extends Component {
	constructor() {
		super();
		this.state = {
			datas: [],
			inputer: "",
			typeDatas: ["没有要求", "2K以下", "2K-5K", "5K-10K", "10K-15K", "15K-25K", "25K-50K", "50K以上"]
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
				<EditHeader title="你值得拥有更好的生活、告诉我你期望的薪水"/>	
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
				money: value,
				compony: this.state.datas.compony
			}
		})
	}
}
export default EditMoney;