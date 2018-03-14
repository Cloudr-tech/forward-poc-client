import React, { Component } from 'react';
import './Sidebar.css';
import 'font-awesome/css/font-awesome.min.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="SidebarContainer">
        <div className='SidebarHeader'>
          <i className='fa fa-cloud SideBarIcon'></i>
          <h1 className="SidebarTitle">CloudR</h1>
          <h4 className='SidebarSlogan'>Soyez votre propre hébergeur!</h4>
          <hr />
          <div className='SidebarDescription'>
          CloudR est un service permettant de louer à des particuliers et/ou à des professionnels des ressources informatique.<br/><br/>Ces ressources seront mises à disposition par ces derniers.
          </div>
          <div className='SidebarSocialIcon'>
            <p>Suivez nous sur nos réseaux sociaux!</p>
            <i className='fa fa-facebook SocialIcon'/>
            <i className='fa fa-twitter SocialIcon'/>
            <i className='fa fa-github SocialIcon'/>
            <i className='fa fa-linkedin SocialIcon'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

