import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Files from '../Files';
import Users from '../Users';
import Upload from '../Upload';
import Sidebar from '../Sidebar';
import Storage from '../Storage';
import store from '../../helpers/store';
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
            <Storage />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
