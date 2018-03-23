import React, { Component } from 'react';
import './Sidebar.css';
import ReactVivus from 'react-vivus';
import logo from '../../assets/logo.svg';
import 'font-awesome/css/font-awesome.min.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="SidebarContainer">
        <div className='SidebarHeader'>
          <div className='SideBarLogo'>
            <ReactVivus
              id="foo"
              option={{
                file: logo,
                animTimingFunction: 'EASE',
                pathTimingFunction: 'EASE_OUT_BOUNCE',
                type: 'sync',
                duration: 200,
              }}
              callback={(myVivus) => {
                if (myVivus.getStatus() === 'end') {
                  setTimeout(() => {
                    myVivus.play(-1);
                  }, 5000);
                } else {
                  myVivus.play(1);
                }
              }}
            />
          </div>
          <h1 className="SidebarTitle">CloudR</h1>
          <h4 className='SidebarSlogan'>Rentabilisez vos ressources informatiques !</h4>
          <hr />
          <div className='SidebarDescription'>
          CloudR est un service permettant de louer à des particuliers et/ou à des professionnels des ressources informatiques.<br/><br/>Ces ressources seront mises à disposition par ces derniers.
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
