import React, { Component } from 'react'
import Menu from "./../../components/Menu/Menu";
import Footer from './../../components/Footer/Footer'
import BannerDCB from './BannerDCB'
import MainContent from './MainContent';

import './DieuCanBiet.scss';

export default class DieuCanBiet extends Component {
  render() {
    return (
      <div id="page" className="clearfix">
        <div id="site-header-wrap">
          <Menu/>
        </div>
          <BannerDCB/>
          <MainContent/>
        <Footer/>
    </div>
    )
  }
}
