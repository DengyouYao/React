import React, {
	Component
} from 'react';
import ToudiListItem from './ToudiListItem';
import ToudiResult from '../json/toudiResult.json';
class ToudiListNo extends Component {
	constructor() {
		super();
		this.state = {
			data: ""
		}
	}
	render() {
		let list = this.state.data.map(function(item, index) {
			return <ToudiListItem datas={item} key={index} />
		});
		return (
			<ul style={{marginTop:"20px"}}>
				{list}
			</ul>
		)
	}
	componentWillMount() {
		var data = ToudiResult.result.filter(function(item, index) {
			return item.state.code == 0;
		})
		this.setState({
			data
		})
	}
}
export default ToudiListNo;