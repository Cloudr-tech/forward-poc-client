import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Files from '../Files';
import Users from '../Users';
import Upload from '../Upload';
import Sidebar from '../Sidebar';
import store from '../../config/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Sidebar />
          <Files />
          <div className='UsersContainer'>
            <Users />
            <Upload />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
