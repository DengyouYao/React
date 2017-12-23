import React, {
	Component
} from 'react';
import './companyItem.css';
class CompanyItem extends Component {
	constructor() {
		super();
		this.handleJob = this.handleJob.bind(this);
	}
	render() {
		let {
			listData
		} = this.props;
		return (
			<li className="companyItem" data-companyId={listData.companyId} data-positionId={listData.positionId} onClick={this.handleJob}>
					<img src={listData.companyLogo} />
				<div className="middle">
					<h2>{listData.companyName}</h2>
					<p><span>{listData.positionName}[{listData.city}]</span><span>{listData.salary}</span></p>
					<p style={{fontSize:"12px",color:"#888",marginTop:"5px"}}>{listData.createTime}</p>
				</div>
			</li>
		)
	}
	handleJob(e) {
		/*e.preventDefault();
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();*/
		var ID = {
			positionId: e.currentTarget.getAttribute("data-positionId"),
			companyId: e.currentTarget.getAttribute("data-companyId")
		}
		this.props.onDetail(ID);
	}
}
export default CompanyItem;