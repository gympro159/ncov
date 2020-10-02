import React from "react";
import { Link, Route } from "react-router-dom";
import "./MenuLink.scss";
import logo from "./../../assets/img/logo.png";
//import auth from './../../auth';

const MenuLink = ({ label, to, activeOnlyWhenExact, account }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "current-menu-item" : "";
        return !account ? (
          <li className={`${active} menu-item`}>
            <Link to={to} className="my-link">
              {label}
            </Link>
          </li>
        ) : (
          <li className={`${active} menu-item-has-children`}>
            <Link
              to="/"
              onClick={(e) => e.preventDefault()}
              className="my-link"
            >
              {label}
            </Link>
            <ul className="sub-menu">
              <Route
                path={to}
                exact={false}
                children={() => {
                  return (
                    <li className={`menu-item-has-children`}>
                      <Link to="/admin/change-password" className="my-link">
                        Thay đổi mật khẩu
                      </Link>
                    </li>
                  );
                }}
              />
              <Route
                path="/"
                exact={false}
                children={({ match }) => {
                  return (
                    <li className={`menu-item-has-children`}>
                      <Link
                        to="/admin"
                        className="my-link"
                        onClick={(e) => {
                          e.preventDefault();
                          if (window.confirm("Bạn có chắc muốn đăng xuất?")) {
                            localStorage.removeItem("user");
                            window.location.reload();
                          }
                        }}
                      >
                        Đăng xuất
                      </Link>
                    </li>
                  );
                }}
              />
            </ul>
          </li>
        );
      }}
    />
  );
};

export default function showMenus(menus, styleScroll) {
  if (menus.length > 0) {
    return (
      <div id="site-header-wrap" className={styleScroll ? "styleScroll" : ""}>
        <header id="site-header">
          <div id="site-header-inner" className="b-container">
            <div className="wrap-inner">
              <div id="site-logo" className="clearfix">
                <div id="site-logo-inner">
                  <Link to="/" title="Medical" rel="home" className="main-logo">
                    <img
                      src={logo}
                      alt="Medical"
                      width="167"
                      height="44"
                      data-width="167"
                      data-height="44"
                    />
                  </Link>
                </div>
              </div>
              <nav id="main-nav" className="main-nav">
                <ul className="menu">
                  {menus.map((menu, index) => {
                    return (
                      <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                        account={menu.account}
                      />
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
