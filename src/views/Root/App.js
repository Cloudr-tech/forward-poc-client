import React, { Component } from 'react';
import Files from '../Files';
import Users from '../Users';
import Upload from '../Upload';
import Sidebar from '../Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Files />
        <div className='UsersContainer'>
          <Users />
          <Upload />
        </div>
      </div>
    );
  }
}

export default App;
