import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class BannerNews extends Component {
  render() {
    return (
      <div className="banner-news full-width">
        <div className="text-title-dcb b-container">
          <div className="featured-title-inner-wrap">
            <div className="featured-title-heading-wrap">
              <h1 className="featured-title-heading ">TIN TỨC </h1>
            </div>
            <div id="breadcrumbs">
              <div className="breadcrumbs-inner">
                <div className="breadcrumb-trail">
                  <Link
                    to="/"
                    title="Contruction2"
                    rel="home"
                    className="trail-begin"
                  >
                    Trang Chủ
                  </Link>
                  <span className="sep">/</span>
                  <span className="trail-end">Tin tức ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
