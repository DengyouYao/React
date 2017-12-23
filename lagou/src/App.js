import React, {
  Component
} from 'react';
import {
  browserHistory,
  IndexLink,
  Link
} from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">拉勾网</h1>
        </header>
        <div className="container">{this.props.children}</div>
        <ul className="nav">
          <li>
            <IndexLink to={{pathname:"/"}} activeClassName="linkActive">职位</IndexLink>
          </li>
          <li>
            <Link to={{pathname:"/search"}} activeClassName="linkActive">搜索</Link>
          </li>
          <li>
            <Link to={{pathname:"/user"}} activeClassName="linkActive">我的</Link>
          </li>
        </ul>
        
      </div>
    );
  }
}

export default App;