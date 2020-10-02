import React, { Component } from "react";
import showMenus from "./../common/MenuLink";

const menus = [
  {
    name: "Quản lý Thông tin Thế giới",
    to: "/admin/manage-overview",
    exact: false,
    account: false,
  },
  {
    name: "Quản lý thông tin Việt Nam",
    to: "/admin/manage-patients",
    exact: false,
    account: false,
  },
  {
    name: "Quản lý người khai báo y tế",
    to: "/admin/manage-declarers",
    exact: false,
    account: false,
  },
  {
    name: `Hi, ${(localStorage.getItem("user")!=null)?JSON.parse(localStorage.getItem('user')).fullName: ""}`,
    to: "/admin/change-password",
    exact: false,
    account: true,
  },
];

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleScroll: false
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll=()=>{
    if (window.pageYOffset > 0) {
        if(!this.state.className){
          this.setState({ styleScroll: true });   
        }
    }else{
        if(this.state.styleScroll){
          this.setState({ styleScroll: false });
        }
    }
   
  }

  render() {
    return <>{showMenus(menus, this.state.styleScroll)}</>;
  }
}

export default Menu;
