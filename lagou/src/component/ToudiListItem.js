import React, {
	Component
} from 'react';
import './toudi.css';
class ToudiListItem extends Component {
	constructor() {
		super();
	}
	render() {
		let {
			datas
		} = this.props;
		return (
			<li className="toudiItem" >
				<h2>{datas.positionName} ({datas.salary})</h2>
				<p>{datas.companyName}[{datas.city}]</p>
				<p style={{fontSize:"12px",color:"#888",marginTop:"5px",fontWeight:"100",lineHeight:"12px"}}>{datas.createTime}<span style={{float:"right",color:"#000",fontSize:"14px"}}>【{datas.state.msg}】</span></p>
			</li>
		)
	}
}
export default ToudiListItem;