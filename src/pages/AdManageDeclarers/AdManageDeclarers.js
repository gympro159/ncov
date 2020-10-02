import React, { Component } from "react";
import { connect } from "react-redux";
import AdMenu from "./../../components/AdMenu/AdMenu";
import MiniFooter from "./../../components/MiniFooter/MiniFooter";
import changeAlias from "../../constants/common";
import {
  actDeleteDeclarerRequest,
  actFetchDeclarersRequest,
} from "../../actions";

class AdManageDeclarers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtFilter: "",
    };
  }

  componentDidMount() {
    this.props.fetchAllDeclarers();
  }

  onChange = (e) => {
    var target = e.target;
    var name = e.target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleDelete = (id) => {
    if (window.confirm("Xác nhận muốn xóa người này?")) {
      this.props.onDeleteDeclarer(id);
      window.alert("Xóa thành công!");
    }
  };

  render() {
    var { declarers } = this.props;
    var { txtFilter } = this.state;
    return (
      <>
        <AdMenu />
        <br />
        <h1 style={{ textAlign: "center" }}>Danh sách người khai báo y tế</h1>
        <div className="form-group row ml-2 mr-0">
          <div className="col-xs-2">
            <br />
            <input
              type="text"
              className="form-control"
              name="txtFilter"
              placeholder="Tìm kiếm"
              value={txtFilter}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="data-countries-table mt-10">
          <table className="b-table table-hover text-center">
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Điện thoại</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Biểu hiện</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {declarers.map((declarer, index) => {
                return (
                  (txtFilter.trim() === ""
                    ? true
                    : changeAlias(declarer.fullName).includes(
                        changeAlias(txtFilter)
                      ) ||
                      changeAlias(declarer.phone).includes(
                        changeAlias(txtFilter)
                      ) ||
                      changeAlias(declarer.email).includes(
                        changeAlias(txtFilter)
                      ) ||
                      changeAlias(declarer.place).includes(
                        changeAlias(txtFilter)
                      ) ||
                      changeAlias(declarer.note).includes(
                        changeAlias(txtFilter)
                      )) && (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{declarer.fullName}</td>
                      <td>{declarer.phone}</td>
                      <td>{declarer.email}</td>
                      <td>{declarer.place}</td>
                      <td>{declarer.note}</td>
                      <td>
                        <span
                          className="tr-cursor"
                          style={{ color: "#ff0000" }}
                          onClick={() => this.handleDelete(declarer.id)}
                        >
                          X
                        </span>
                      </td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
        </div>
        <br />
        <MiniFooter />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    declarers: state.declarers,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllDeclarers: () => {
      dispatch(actFetchDeclarersRequest());
    },
    onDeleteDeclarer: (id) => {
      dispatch(actDeleteDeclarerRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdManageDeclarers);
