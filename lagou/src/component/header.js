import React, {
	Component
} from 'react';
import './header.css';
import {
	browserHistory,
	IndexRoute
} from 'react-router';
class Header extends Component {
	constructor() {
		super();
		this.handleBack = this.handleBack.bind(this);
	}
	render() {
		return (
			<header id="header">{this.props.title}
				<div className="left" onClick={this.handleBack}>
					<span className="corner"></span>
				</div>
			</header>
		)
	}
	handleBack() {
		window.history.go(-1);
	}
}
export default Header;