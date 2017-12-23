import React, {
	Component
} from 'react';
import {
	browserHistory,
	IndexRoute
} from 'react-router';
class DidMianshi extends Component {
	constructor() {
		super();
		this.handleStatus = this.handleStatus.bind(this);
		this.handlejiali = this.handlejiali.bind(this);
	}
	render() {
		return (
			<div className="miancontent">
				暂时没有已面试的记录，去<a onClick={this.handlejiali}>投简历</a>吧
		    </div>
		)
	}
	handleStatus() {
		this.props.onStatus();
	}
	handlejiali() {
		browserHistory.push({
			pathname: "/"
		})
	}
}
export default DidMianshi;