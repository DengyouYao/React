import React, {
	Component
} from 'react';
import {
	browserHistory
} from 'react-router';
import Header from './header';
import EditHeader from './editHeader';
import EditItemList from './editItemList';
class EditType extends Component {
	constructor() {
		super();
		this.state = {
			datas: [],
			inputer: "",
			typeDatas: ["产品经理", "Java", "运营", "Android", "PHP", "UI", "IOS", "编辑", "BD"]
		}
		this.handelChoice = this.handelChoice.bind(this);
	}
	render() {
		var rinputer = {
			height: "50px",
			lineHeight: "50px",
			border: "1px solid #e8e8e8",
			position: "relative",
			marginRight: "60px",
			paddingRight: "45px"
		}
		var inputer = {
			display: "block",
			marginLeft: "23px",
			fontSize: "15px",
			width: "100%",
			height: "100%",
			border: "none",
			outline: "none",
			padding: 0
		}
		var button = {
			position: "absolute",
			top: 0,
			right: "-61px",
			width: "60px",
			borderLeft: "1px solid #e8e8e8",
			textAlign: "center",
			fontSize: "15px",
			color: "#c2cfcc",
			borderBottom: "1px solid #e8e8e8"
		}
		var that = this;
		var types = this.state.typeDatas.map(function(item, index) {
			return <EditItemList list={item} key={index} onChoice={that.handelChoice}/>
		})
		return (
			<div>
				<Header title="设置定制信息"/>
				<EditHeader title="想找什么工作？"/>
				<div className="rinputer" style={rinputer}>
					<input className="inputer" style={inputer} placeholder="输入你想定制的职位" />
					<span className="button" style={button}>OK</span>
				</div>
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
				type: value,
				address: this.state.datas.address,
				money: this.state.datas.money,
				compony: this.state.datas.compony
			}
		})
	}
}
export default EditType;