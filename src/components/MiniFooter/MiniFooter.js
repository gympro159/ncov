import React, { Component } from "react";
import { Link } from "react-router-dom";

class MiniFooter extends Component {
  render() {
    return (
      <div id="bottom" className="clearfix style-1 mr0 ml0">
        <div id="bottom-bar-inner" className="b-container">
          <div className="bottom-bar-inner-wrap">
            <div className="bottom-bar-content">
              <div id="copyright">© 2020 Trang thông tin về dịch Covid19</div>
              {/* //copyright */}
            </div>
            {/* /.bottom-bar-content */}
            <div className="bottom-bar-menu">
              <ul className="bottom-nav">
                <li className="menu-item">
                  <Link to="/admin/manage-overview">Thế giới</Link>
                </li>
                <li className="menu-item">
                  <Link to="/admin/manage-patients">Việt Nam</Link>
                </li>
                <li className="menu-item">
                  <Link to="/admin/manage-declarers">Người khai báo</Link>
                </li>
              </ul>
            </div>
            {/* /.bottom-bar-menu */}
          </div>
        </div>
      </div>
    );
  }
}

export default MiniFooter;
