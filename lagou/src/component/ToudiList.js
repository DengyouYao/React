import React, {
	Component
} from 'react';
import ToudiListItem from './ToudiListItem';
import ToudiResult from '../json/toudiResult.json';
class ToudiListAll extends Component {
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
		this.setState({
			data: ToudiResult.result
		})
	}
}
export default ToudiListAll;