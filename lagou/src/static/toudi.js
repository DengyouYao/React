import React, {
	Component
} from 'react';
import {
	Link,
	IndexLink
} from 'react-router';
import Header from '../component/header';
import './component.css';
class TouDi extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="toudi">
				<Header title="投递记录"/>
				<ul className="nav1">
		          <li>
		            <IndexLink to={{pathname:"/toudi"}} activeClassName="linkActive">全部</IndexLink>
		          </li>
		          <li>
		            <Link to={{pathname:"/toudi/toudilistvisit"}} activeClassName="linkActive">邀请面试</Link>
		          </li>
		          <li>
		            <Link to={{pathname:"/toudi/toudilistno"}} activeClassName="linkActive">不合适</Link>
		          </li>
		        </ul>
				<div>{this.props.children}</div>
			</div>
		)
	}
}
export default TouDi;