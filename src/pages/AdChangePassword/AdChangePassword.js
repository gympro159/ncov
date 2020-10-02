import React, { Component } from "react";
import { connect } from "react-redux";
import { actUpdateAccountRequest } from "../../actions/index";
import AdMenu from "./../../components/AdMenu/AdMenu";
import "./AdChangePassword.scss";
import MiniFooter from "../../components/MiniFooter/MiniFooter";

var hasValStyle1 = false;
var hasValStyle2 = false;
var hasValStyle3 = false;

class AdChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtOldPassword: "",
      txtNewPassword: "",
      txtNewPassword2: "",
      passWrongStyle: "display-none",
      passOldDuplicatePassNewStyle: "display-none",
      passNotDuplicateStyle: "display-none",
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = e.target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
    if (this.state.txtOldPassword !== "") hasValStyle1 = true;
    else hasValStyle1 = false;

    if (this.state.txtNewPassword !== "") hasValStyle2 = true;
    else hasValStyle2 = false;

    if (this.state.txtNewPassword2 !== "") hasValStyle3 = true;
    else hasValStyle3 = false;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    var { txtOldPassword, txtNewPassword, txtNewPassword2 } = this.state;
    var { onUpdateAccount } = this.props;
    var user = JSON.parse(localStorage.getItem("user"));
    var check = -2;
    if (txtOldPassword !== user.password) {
      check = 0;
    } else if (txtOldPassword === txtNewPassword) {
      check = -1;
    } else if (
      txtOldPassword === user.password &&
      txtNewPassword === txtNewPassword2
    ) {
      check = 1;
    }
    if (check === 1) {
      this.setState({
        passWrongStyle: "display-none",
        passOldDuplicatePassNewStyle: "display-none",
        passNotDuplicateStyle: "display-none",
      });
      if (window.confirm("Bạn chắc chắn muốn thay đổi mật khẩu?")) {
        user.password = txtNewPassword;
        onUpdateAccount(user);
        window.alert("Thay đổi mật khẩu thành công");
        window.location.reload();
      }
    } else if (check === 0) {
      this.setState({
        passWrongStyle: "",
        passOldDuplicatePassNewStyle: "display-none",
        passNotDuplicateStyle: "display-none",
      });
    } else if (check === -1) {
      this.setState({
        passWrongStyle: "display-none",
        passOldDuplicatePassNewStyle: "",
        passNotDuplicateStyle: "display-none",
      });
    } else {
      this.setState({
        passWrongStyle: "display-none",
        passOldDuplicatePassNewStyle: "display-none",
        passNotDuplicateStyle: "",
      });
    }
  };

  render() {
    var {
      txtOldPassword,
      txtNewPassword,
      txtNewPassword2,
      passWrongStyle,
      passOldDuplicatePassNewStyle,
      passNotDuplicateStyle,
    } = this.state;
    return (
      <>
        <AdMenu />
        <div className="bg-form-change-login">
          <div className="form-change-login-content">
            <form onSubmit={this.handleSubmit}>
              <span className="login100-form-title p-b-26">
                Thay đổi mật khẩu
              </span>
              <div className="wrap-input100 validate-input">
                <input
                  className={`input100 ${hasValStyle1 ? "has-val" : ""}`}
                  type="password"
                  name="txtOldPassword"
                  value={txtOldPassword}
                  onChange={this.onChange}
                  required
                />
                <span
                  className="focus-input100"
                  data-placeholder="Mật khẩu cũ"
                ></span>
              </div>

              <div className="wrap-input100 validate-input">
                <input
                  className={`input100 ${hasValStyle2 ? "has-val" : ""}`}
                  type="password"
                  name="txtNewPassword"
                  value={txtNewPassword}
                  onChange={this.onChange}
                  required
                />
                <span
                  className="focus-input100"
                  data-placeholder="Mật khẩu mới"
                ></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  className={`input100 ${hasValStyle3 ? "has-val" : ""}`}
                  type="password"
                  name="txtNewPassword2"
                  value={txtNewPassword2}
                  onChange={this.onChange}
                  required
                />
                <span
                  className="focus-input100"
                  data-placeholder="Nhập lại mật khẩu"
                ></span>
              </div>
              <span className={passWrongStyle} style={{ color: "red", fontSize: '13px' }}>
                Mật khẩu cũ không đúng!
              </span>
              <span className={passOldDuplicatePassNewStyle} style={{ color: "red", fontSize: '13px' }}>
                Mật khẩu mới không được trùng mật khẩu cũ!
              </span>
              <span className={passNotDuplicateStyle} style={{ color: "red", fontSize: '13px' }}>
                Mật khẩu mới không khớp!
              </span>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <button className="login100-form-btn">Đổi mật khẩu</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <MiniFooter />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateAccount: (account) => {
      dispatch(actUpdateAccountRequest(account));
    },
  };
};

export default connect(null, mapDispatchToProps)(AdChangePassword);
