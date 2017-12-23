import React, {
	Component
} from 'react';
import './yaoyue.css';
import Header from '../component/header';
import StartPlus from '../component/startPlus';
import ClosePlus from '../component/closePlus';
class YaoYue extends Component {
	constructor() {
		super();
		this.state = {
			isState: false
		}
		this.handleStatus = this.handleStatus.bind(this);
	}
	render() {
		var status;
		if (this.state.isState) {
			status = <StartPlus onStatus={this.handleStatus}/>
		} else {
			status = <ClosePlus onStatus={this.handleStatus} />
		}
		return (
			<div>
				<Header title="拉勾网"/>
				<div id="content">
					{status}
				</div>
			</div>
		)
	}
	handleStatus() {
		this.setState({
			isState: !this.state.isState
		})
	}
}
export default YaoYue;