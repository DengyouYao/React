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
import './jobsDetail.css';
import $ from 'jquery';
class JobsDetail extends Component {
	constructor() {
		super();
		this.state = {
			status: false,
			companyDetail: "",
			companyId: "",
			positionId: ""
		}
		this.handleShouCang = this.handleShouCang.bind(this);
	}
	render() {
		var value = this.state.companyDetail;
		var shoucang, classname;

		if (this.state.status) {
			classname = "icon";
			shoucang = "已收藏"
		} else {
			classname = "icon notcoll"
			shoucang = "未收藏"
		}
		return (
			<div>
				<Header title="职位详情"/>
				<div id="content">
					<div className="postitle">
						<h2 className="titletype">{value.positionName}</h2>
			            <div className="collicon activeable" onClick={this.handleShouCang}>
							<span className={classname}></span>
							<span className="text ">{shoucang}</span>
			            </div>
			        </div>
			        <div className="detail">
			            <div className="items">
			                <span className="item salary">
			                    <em className="icon"></em>
			                    <span className="text">{value.salary}</span>
			                </span>
			                <span className="item workaddress">
			                    <em className="icon"></em>
			                    <span className="text">{value.city}</span>
			                </span>
			                <span className="item jobnature">
			                    <em className="icon"></em>
			                    <span className="text">全职</span>
			                </span>
			                <span className="item workyear">
			                    <em className="icon"></em>
			                    <span className="text">1-3年</span>
			                </span>
			                <span className="item education">
			                    <em className="icon"></em>
			                    <span className="text">本科及以上</span>
			                </span>
			            </div>
			            <div className="temptation">
			                职位诱惑：绩效奖金 带薪年假 免费体检 补充医疗
			            </div>
			        </div>
			        <div className="company activeable" data-lg-tj-id="19v6" data-lg-tj-no="0030" data-lg-tj-cid="51158">
			            <img src={value.companyLogo} alt="" className="logo" />
			            <div className="desc">
			                <div className="dleft">
			                    <h2 className="titleType">
			                        {value.companyFullName}
			                    </h2>
			                    <p className="info">移动互联网/ 不需要融资/ 150-500人</p>
			                </div>
			                <span className="dright"></span>
			            </div>
			        </div>
			        <div className="positiondesc">
						<header className="header">职位描述</header>
						<div className="content">
							<p className="">岗位职责：</p>
							<p>1、负责本公司互联网金融产品的需求分析与产品规划；</p>
							<p>2、负责本公司交易收单、核心清算、运营支撑、账务会计等系统的优化与升级；<br /></p>
							<p>3、负责本公司的软件产品设计、开发和项目管理；</p>
							<p>4、负责与客户和银行沟通、协调。</p>
							<p>&nbsp;</p>
							<p>任职要求：</p>
							<p>1、重点大学本科及以上学历，计算机、信息系统、电子商务等相关专业；</p>
							<p>2、两年以上商业软件开发和管理经验；</p>
							<p>3、精通Java语言，精通Spring等开源框架，有系统架构工作经验；</p>
							<p>4、熟悉Oracle数据库服务器，熟悉Unix/Linux操作系统；</p>
							<p>5、良好的沟通能力和团队合作精神；</p>
							<p>6、具有金融行业、支付行业从业经历者优先。</p>
							<p>7、加分项：zookeeper、redis、kafka等。</p>
            			</div>
       				</div>
       				<div className="fix_btn_group">
                        <div className="deliver deliver_resume rows_bar">投递简历</div>
                    </div>
				</div>
			</div>
		)
	}
	componentWillMount() {
		var companyId = this.props.location.query.companyId;
		var positionId = this.props.location.query.positionId;
		this.setState({
			companyId,
			positionId
		});
		if (!window.localStorage) {
			alert("浏览器不支持localStorage");
			return false;
		} else {
			var storage = window.localStorage;
			var companyDetail = JSON.parse(storage.getItem("companyDetail"));
			this.setState({
				companyDetail: companyDetail[0]
			});
			var shoucangs = JSON.parse(storage.getItem("collect"));
			var status = shoucangs.filter((item, index) => {
				return (item.companyId == companyId && item.positionId == positionId);
			});
			if (status.length !== 0) {
				this.setState({
					status: true
				});
			}
		}
	}
	handleShouCang(e) {
		this.setState({
			status: !this.state.status
		});
		var storage = window.localStorage;
		var datas = storage.getItem("collect");
		datas = JSON.parse(datas);
		if (!this.state.status) {
			if (datas.length != 0) {
				datas.push(this.state.companyDetail);
				storage.setItem("collect", JSON.stringify(datas));
			} else {
				storage.setItem("collect", JSON.stringify([this.state.companyDetail]));
			}
		} else {
			var data = datas.filter((item, index) => {
				return (item.companyId != this.state.companyId && item.positionId != this.state.positionId)
			});
			storage.setItem("collect", JSON.stringify(data));
		}

	}
}
export default JobsDetail;