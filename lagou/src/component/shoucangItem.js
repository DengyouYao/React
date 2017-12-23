import React, {
	Component
} from 'react';
import './companyItem.css';
class CollectItem extends Component {
	constructor() {
		super();
		this.handleJob = this.handleJob.bind(this);
	}
	render() {
		let {
			datas
		} = this.props;
		var style = {
			position: "absolute",
			top: "5px",
			right: "20px",
			width: "20px",
			height: "20px",
			margin: "5px auto 18px auto",
			background: "url(https://static.lagou.com/images/mobile/asset/common/img/icon.png) no-repeat -150px -8px",
			backgroundSize: "250px 250px"
		}
		return (
			<li className="companyItem"  data-companyId={datas.companyId} data-positionId={datas.positionId} onClick={this.handleJob}>
				<img src={datas.companyLogo}/>
				<div className="middle">
					<h2>{datas.companyName}</h2>
					<p><span>{datas.positionName}[ {datas.city} ]</span></p>
					<p style={{fontSize:"12px",color:"#888",marginTop:"5px"}}>{datas.createTime}<span style={{float:"right",fontSize:"16px",color:"#00b38a"}}>{datas.salary}</span></p>
					<div style={style}></div>
				</div>
			</li>
		)
	}
	handleJob(e) {
		var ID = {
			positionId: e.currentTarget.getAttribute("data-positionId"),
			companyId: e.currentTarget.getAttribute("data-companyId")
		}
		this.props.onDetail(ID);
	}
}
export default CollectItem;