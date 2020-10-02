import React, { Component } from "react";
import Menu from "./../../components/Menu/Menu";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <Menu />
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          Không tìm thấy trang!
        </h1>
      </>
    );
  }
}
