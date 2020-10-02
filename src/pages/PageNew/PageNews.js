import React, { Component }from "react";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Banner from "./Banner";
import MainContent from "./MainContent";
import "./BaoNews.scss"

export default class PageNews extends Component{
  render() {
    return (
      <div id="page" className="clearfix">
        <div id="site-header-wrap">
          <Menu />
        </div>
        <Banner />
        <MainContent />
        <Footer />
      </div>
    );
  }
}
