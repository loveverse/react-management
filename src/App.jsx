import { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

export default class App extends Component {
  render() {
    return (
      // <div>
      //   <Button type="primary" onClick={this.handleClick}>Primary Button</Button>
      // </div>

      <HashRouter>
        {/* 只匹配其中一个 */}
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </HashRouter>
    )
  }
  // handleClick = () => {
  //   message.success('This is a success message');
  // }
}
