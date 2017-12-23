import React, {
	Component
} from 'react';
import $ from 'jquery';

class MoreLoad extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<h2 style={{height:50,lineHeight:"50px",fontSize:'17px',background:'#fafafafa',fontWeight:100}}>加载更多</h2>
			</div>
		)
	}
}
export default MoreLoad;