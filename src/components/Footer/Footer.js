import React, { Component } from "react";
import { connect } from "react-redux";
import "./Footer.scss";
import logo from "../Footer/logo-footer.png";
import { actAddDeclarerRequest } from "../../actions";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtFullName: "",
      txtPhone: "",
      txtEmail: "",
      txtPlace: "",
      txtSot: false,
      txtHo: false,
      txtKhoTho: false,
      txtTiepXuc: false,
      successLabel: false,
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = e.target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    var {
      txtFullName,
      txtPhone,
      txtEmail,
      txtPlace,
      txtSot,
      txtHo,
      txtKhoTho,
      txtTiepXuc,
    } = this.state;
    var Sot = txtSot ? "Sốt trên 37 °C, " : "",
      Ho = txtHo ? "Ho, " : "",
      KhoTho = txtKhoTho ? "Khó thở, " : "",
      TiepXuc = txtTiepXuc ? "Tiếp xúc gần với người bệnh, " : "";
    var declarer = {
      fullName: txtFullName,
      phone: txtPhone,
      email: txtEmail,
      place: txtPlace,
      note: Sot + Ho + KhoTho + TiepXuc,
    };
    this.props.onAddDeclarer(declarer);
    this.setState({
      successLabel: true,
    });
  };

  render() {
    var {
      txtFullName,
      txtPhone,
      txtEmail,
      txtPlace,
      txtSot,
      txtHo,
      txtKhoTho,
      txtTiepXuc,
      successLabel,
    } = this.state;
    return (
      <>
        {/* Footer */}
        <footer id="footer">
          <div id="footer-widgets" className="b-container width-1400">
            <div className="row flex-box">
              <div className="col-4 mr-20">
                <div className="widget widget_text">
                  <div className="textwidget ">
                    <img src={logo} id="footer-logo" alt="logo" />
                  </div>
                </div>
                <div className="widget widget_information">
                  <ul className="clearfix">
                    <li className="phone">
                      <i className="fa fa-phone" />
                      <span>Gọi : +84-35-932-9898</span>
                    </li>
                    <li className="address">
                      <i className="fa fa-map-marker" />
                      <span>111 Nguyễn Huệ , Phường Phú Nhuận, TP Huế</span>
                    </li>
                    <li className="email">
                      <i className="fa fa-envelope-o" />
                      <span>contactme@gmail.com</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_socials ml-10">
                  <div className="socials clearfix">
                    <div className="icon active">
                      <Link target="_blank" to="/">
                        <i className="fa fa-twitter" />
                      </Link>
                    </div>
                    <div className="icon">
                      <Link target="_blank" to="/">
                        <i className="fa fa-facebook" />
                      </Link>
                    </div>
                    <div className="icon">
                      <Link target="_blank" to="/">
                        <i className="fa fa-linkedin" />
                      </Link>
                    </div>
                    <div className="icon">
                      <Link target="_blank" to="/">
                        <i className="fa fa-google-plus" />
                      </Link>
                    </div>
                    <div className="icon">
                      <Link target="_blank" to="/">
                        <i className="fa fa-skype" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.span_1_of_3 */}

              <div className="col-7 ">
                <div className="widget widget_links">
                  <h2 className="widget-title text-center">
                    <span>Yêu cầu hỗ trợ y tế khẩn cấp </span>
                  </h2>
                  <div className="b-form-footer">
                    <form onSubmit={this.onSubmit}>
                      <div className="b-contact-form">
                        <span className="b-form-control-wrap ">
                          <input
                            type="text"
                            name="txtFullName"
                            className="name"
                            placeholder="Tên *"
                            value={txtFullName}
                            onChange={this.onChange}
                            required
                          />
                        </span>
                        <span className="b-form-control-wrap phone">
                          <input
                            type="tel"
                            name="txtPhone"
                            placeholder="Điện thoại *"
                            value={txtPhone}
                            onChange={this.onChange}
                            required
                          />
                        </span>
                        <span className="b-form-control-wrap email">
                          <input
                            type="email"
                            name="txtEmail"
                            placeholder="E-mail *"
                            value={txtEmail}
                            onChange={this.onChange}
                            required
                          />
                        </span>
                        <span className="b-form-control-wrap email">
                          <select
                            name="txtPlace"
                            value={txtPlace}
                            onChange={this.onChange}
                            required
                          >
                            <option value="" disabled hidden>
                              Chọn Tỉnh ,Thành phố
                            </option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Đà Nẵng">Đà Nẵng</option>
                            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                            <option value="Quảng Bình">Quảng Bình</option>
                            <option value="Quảng Trị">Quảng Trị</option>
                            <option value="Quảng Nam">Quảng Nam</option>
                            <option value="Quảng Ngãi">Quảng Ngãi</option>
                          </select>
                        </span>
                      </div>

                      <div className="checkme mb-10 ">
                        <h2 className="widget-title text-center bt">
                          <span>Bạn có dấu hiệu nào dưới đây </span>
                        </h2>
                        <span>
                          <input
                            type="checkbox"
                            id="txtSot"
                            name="txtSot"
                            value={txtSot}
                            onChange={this.onChange}
                          />
                          <label
                            htmlFor="txtSot"
                            name="txtSot"
                            className="pl-10 mr-20"
                          >
                            Sốt trên 37 &deg;C
                          </label>
                        </span>
                        <span>
                          <input
                            type="checkbox"
                            id="txtHo"
                            name="txtHo"
                            value={txtHo}
                            onChange={this.onChange}
                          />
                          <label
                            htmlFor="txtHo"
                            name="txtHo"
                            className="pl-10 mr-20"
                          >
                            Ho
                          </label>
                        </span>
                        <span>
                          <input
                            type="checkbox"
                            id="txtKhoTho"
                            name="txtKhoTho"
                            value={txtKhoTho}
                            onChange={this.onChange}
                          />
                          <label
                            htmlFor="txtKhoTho"
                            name="txtKhoTho"
                            className="pl-10 mr-20"
                          >
                            Khó thở
                          </label>
                        </span>
                        <span>
                          <input
                            type="checkbox"
                            id="txtTiepXuc"
                            name="txtTiepXuc"
                            value={txtTiepXuc}
                            onChange={this.onChange}
                          />
                          <label
                            htmlFor="txtTiepXuc"
                            name="txtTiepXuc"
                            className="pl-10 mr-20"
                          >
                            Tiếp xúc gần với người bệnh
                          </label>
                        </span>
                      </div>

                      <div className="wrap-submit">
                        <input
                          type="submit"
                          value="GỬI NGAY"
                          className="btn btn-secondary"
                          id="submit"
                          name="submit"
                        />
                      </div>
                    </form>
                    <label
                      style={{ color: "#28a745" }}
                      className={`${
                        !successLabel ? "none-label mb-10" : "mb-10"
                      }`}
                    >
                      Bạn đã khai báo thông tin thành công, chúng tôi sẽ liên
                      lạc với bạn sớm nhất có thể.
                    </label>
                  </div>
                </div>
              </div>
              {/*.span_1_of_3 */}
            </div>
          </div>
          {/* footer-widgets */}
        </footer>
        {/*footer */}

        {/* Bottom */}
        <div id="bottom" className="clearfix style-1">
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
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/overview">Tổng quan</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/can-biet">Điều cần biết</Link>
                  </li>
                </ul>
              </div>
              {/* /.bottom-bar-menu */}
            </div>
          </div>
        </div>
        {/* //bottom */}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddDeclarer: (declarer) => {
      dispatch(actAddDeclarerRequest(declarer));
    },
  };
};

export default connect(null, mapDispatchToProps)(Footer);
