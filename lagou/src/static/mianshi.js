import React, {
	Component
} from 'react';
import {
	Link,
	IndexLink
} from 'react-router';
import './mianshi.css';
import Header from '../component/header'
class MianShi extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div style={{height:"100%"}}>
				<Header title="我的面试"/>
				<ul className="mianshilist">
					<li><Link to="/mianshi/didmianshi" activeClassName="linkActive">已面试</Link></li>
					<li><IndexLink to="/mianshi" activeClassName="linkActive">将面试</IndexLink></li>					
				</ul>
				<div>{this.props.children}</div>
			</div>
		)
	}
}
export default MianShi;