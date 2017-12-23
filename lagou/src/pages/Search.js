import React, {
	Component
} from 'react';
import {
	browserHistory
} from 'react-router';
import CityList from '../static/CityList';
import CompanyList from '../component/companyList';
import MoreLoad from '../component/moreLoad';
import SearchItem from '../component/searchItem';
import $ from 'jquery';
import './search.css';
import listData from '../json/listmore.json';
class Search extends Component {
	constructor() {
		super();
		this.state = {
			city: "全国",
			inputer: "",
			searchlist: [],
			list: []
		}
		this.handleChoice = this.handleChoice.bind(this);
		this.handleInputer = this.handleInputer.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleLoad = this.handleLoad.bind(this);
		this.handleDel = this.handleDel.bind(this);
		this.handleChoiceCity = this.handleChoiceCity.bind(this);
	}
	render() {
		var that = this;
		let searchItem = this.state.searchlist.map(function(item, index) {
			return <SearchItem datas={item} key={index} load={that.handleLoad} delete={that.handleDel}/>
		});
		return (
			<div className="search-info">
				<div className="header">
					<div className="btn-city">
						<span className="city" onClick={this.handleChoice}>{this.state.city}</span>
						<span className="cityicon"></span>
					</div>
					<div className="rinput">
						<input className="inputer" value={this.state.inputer} onChange={this.handleInputer} type="text" placeholder="搜索职位或公司" />
						<span className="search" onClick={this.handleSearch}><em className="searchicon"></em></span>
					</div>
				</div>
				<ul className="history">
					{searchItem}
				</ul>
				<div className="cityList">
					<CityList onChoice={this.handleChoiceCity}/>
				</div>
				<div className="dataList" style={{marginBottom:"50px",display:"none"}}>
					<div className="custominfo" style={{display: "block"}}>将搜索地区和关键词设为定制条件</div>
					<CompanyList listData={this.state.list}/>
					<MoreLoad/>
				</div>
			</div>
		)
	}
	componentWillMount() {
		if (!window.localStorage) {
			alert("浏览器不支持localStorage");
			return false;
		} else {
			var storage = window.localStorage;
			var length = storage.length;
			var searchlist = [];
			var num = 0;
			for (var key in storage) {
				if (num < length) {
					var item = JSON.parse(storage.getItem(key));
					if (item.hasOwnProperty("name")) {
						searchlist.push(key);
					}
				}
				num++;
			}
			this.setState({
				searchlist
			});
		}
	}
	componentDidMount() {
		let list = listData.content.data.page.result;
		$(".history").show();
		this.setState({
			list
		});
		$(".fdialog-rcon").on("click", ".cities-item", function() {
			$(".city").text($(this).attr("data-item"));
			$(".cityList").hide();
			$(".header").show();
		});
		$(".search").on("click", function() {
			if ($(".inputer").val().trim()) {
				$(".dataList").show();
				$(".history").hide();
			}
		});
	}
	handleInputer(e) {
		this.setState({
			inputer: e.target.value.trim()
		})
	}
	handleSearch() {
		if (!window.localStorage) {
			alert("浏览器不支持localStorage");
			return false;
		} else {
			var storage = window.localStorage;
			var searchlist = {
				name: this.state.inputer,
				data: this.state.list
			}
			storage.setItem(this.state.inputer, JSON.stringify(searchlist));
		}
	}
	handleChoice() {
		$(".cityList").show();
		$(".header").hide();
		$(".dataList").hide();
		$(".history").hide();
	}
	handleLoad(value) {
		this.setState({
			inputer: value
		});
		var storage = window.localStorage;
		var list = JSON.parse(storage.getItem(value)).data;
		this.setState({
			list
		});
		$(".dataList").show();
		$(".history").hide();
	}
	handleDel(value) {
		var arrary = this.state.searchlist.filter(function(item, index) {
			return item != value;
		});
		this.setState({
			searchlist: arrary
		});
		var storage = window.localStorage;
		storage.removeItem(value);
	}
	handleChoiceCity(value) {
		this.setState({
			city: value
		});
		$(".cityList").hide();
		$(".header").show();
		$(".history").show();
	}
}
export default Search;