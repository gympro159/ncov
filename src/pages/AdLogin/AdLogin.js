import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  actFetchAccountsRequest,
  actUpdateAccountRequest,
} from "../../actions/index";
import "./AdLogin.scss";

var hasValStyle1 = false;
var hasValStyle2 = false;

class AdLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
    };
  }

  componentDidMount() {
    this.props.fetchAllAccounts();
  }

  onChange = (e) => {
    var target = e.target;
    var name = e.target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    if (this.state.txtUsername !== "") hasValStyle1 = true;
    else hasValStyle1 = false;

    if (this.state.txtPassword !== "") hasValStyle2 = true;
    else hasValStyle2 = false;
  };

  onLogin = async (e) => {
    e.preventDefault();
    var { txtUsername, txtPassword } = this.state;
    var { accounts } = this.props;
    var check = false;
    var user = {};
    for (let account of accounts) {
      if (
        txtUsername === account.username &&
        txtPassword === account.password
      ) {
        user = account;
        check = true;
        break;
      }
    }
    if (check) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: user.id,
          username: user.username,
          password: user.password,
          fullName: user.fullName,
        })
      );
      window.location.reload();
    } else {
      window.alert("Thông tin đăng nhập không đúng");
    }
  };

  render() {
    var { txtUsername, txtPassword } = this.state;
    var loggedInUser = localStorage.getItem("user");
    if (loggedInUser !== null) {
      var { location } = this.props;
      return (
        <Redirect
          to={{
            pathname: "/admin/manage-patients",
            state: {
              from: location,
            },
          }}
        />
      );
    }
    return (
      <>
        <div className="bg-form-login">
          <div className="form-login-content">
            <form onSubmit={this.onLogin}>
              <span className="login100-form-title p-b-26">Welcome</span>
              <span className="login100-form-title p-b-48">
                <i className="fas fa-ambulance" size="9px"></i>
              </span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is: a@b.c"
              >
                <input
                  className={`input100 ${hasValStyle1 ? "has-val" : ""}`}
                  type="text"
                  name="txtUsername"
                  value={txtUsername}
                  onChange={this.onChange}
                />
                <span
                  className="focus-input100"
                  data-placeholder="Tài khoản"
                ></span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  className={`input100 ${hasValStyle2 ? "has-val" : ""}`}
                  type="password"
                  name="txtPassword"
                  value={txtPassword}
                  onChange={this.onChange}
                />
                <span
                  className="focus-input100"
                  data-placeholder="Mật khẩu"
                ></span>
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <button className="login100-form-btn">Đăng nhập</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllAccounts: () => {
      dispatch(actFetchAccountsRequest());
    },
    onUpdateAccount: () => {
      dispatch(actUpdateAccountRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdLogin);
