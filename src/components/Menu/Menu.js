import React, { Component } from "react";
import showMenus from "./../common/MenuLink";

const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Thế giới",
    to: "/overview",
    exact: false,
  },
  {
    name: "Điều cần biết",
    to: "/can-biet",
    exact: false,
  },
  {
    name: "Tin tức",
    to: "/news",
    exact: false,
  }
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
