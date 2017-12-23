import React from 'react';
import ReactDOM from 'react-dom';

import {
	Router,
	Route,
	hashHistory,
	browserHistory,
	IndexRoute
} from 'react-router';
import './index.css';

import App from './App';
import User from './pages/User';
import List from './pages/List';
import Search from './pages/Search';
import Login from './static/Login';
import Register from './static/Register';
import TouDi from './static/toudi';
import MianShi from './static/mianshi';
import YaoYue from './static/yaoyue';
import ToudiListAll from './component/ToudiList';
import ToudiListVisit from './component/ToudiListVisit';
import ToudiListNo from './component/ToudiListNo';
import ShouCang from './static/shoucang';
import Edit from './static/Edit';
import EditType from './component/editType';
import EditAddress from './component/editAddress';
import EditMoney from './component/editMoney';
import EditCompany from './component/editCompany';
import DidMianshi from './component/didMianshi';
import WillMianshi from './component/willMianshi';
import JobsDetail from './static/jobsDetail';

import CityList from './static/CityList';

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={List}></IndexRoute>
			<Route path="user" component={User}>
								
			</Route>
			<Route path="search" component={Search}>
				<Route path="citylist" component={CityList} />
			</Route>
		</Route>
		<Route path="/login" component={Login}></Route>
		<Route path="/register" component={Register}></Route>
		<Route path="toudi" component={TouDi}>
			<IndexRoute component={ToudiListAll}></IndexRoute>
			<Route path="toudilistvisit" component={ToudiListVisit}></Route>
			<Route path="toudilistno" component={ToudiListNo}></Route>
		</Route>
		<Route path="/mianshi" component={MianShi}>
			<IndexRoute component={WillMianshi}></IndexRoute>
			<Route path="didmianshi" component={DidMianshi}></Route>
		</Route>
		<Route path="/yaoyue" component={YaoYue}></Route>
		<Route path="/shoucang" component={ShouCang}></Route>	
		<Route path="/edit" component={Edit}></Route>	
		<Route path="/edittype" component={EditType}></Route>	
		<Route path="/editaddress" component={EditAddress}></Route>	
		<Route path="/editmoney" component={EditMoney}></Route>	
		<Route path="/editcompany" component={EditCompany}></Route>
		<Route path="/jobsdetail" component={JobsDetail}></Route>
	</Router>), document.getElementById('root'));
registerServiceWorker();