import React, { Component } from "react";
import "./PatientsTable.scss";

export default class PatientsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtFilter: "all",
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

  render() {
    var { patients, admin, handleModalUpdate } = this.props;
    var { txtFilter } = this.state;
    return (
      <>
        <div className="form-group row ml-2 mr-0">
          <div className="col-xs-2">
            <br />
            <select
              className="form-control height-select-filter"
              name="txtFilter"
              value={txtFilter}
              onChange={this.onChange}
            >
              <option value="all" disabled hidden>
                Tình trạng
              </option>
              <option value="all">Tất cả</option>
              <option value="Đang điều trị">Đang điều trị</option>
              <option value="Khỏi">Khỏi</option>
              <option value="Tử vong">Tử vong</option>
            </select>
          </div>
        </div>
        <div className="data-patients-table mt-10">
          <table className="b-table table-hover text-center">
            <thead>
              <tr>
                <th>Bệnh nhân</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Địa điểm</th>
                <th>Tình trạng</th>
                <th>Quốc tịch</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => {
                return (
                  (txtFilter === "all"
                    ? true
                    : txtFilter === patient.status) && (
                    <tr key={index}
                    className={admin?"tr-cursor":""}
                    onClick={admin && (() => handleModalUpdate(patient))}
                    >
                      <td>BN{index + 1}</td>
                      <td>{patient.age}</td>
                      <td>{patient.gender ? `Nam` : `Nữ`}</td>
                      <td>{patient.place}</td>
                      <td>{patient.status}</td>
                      <td>{patient.nationality}</td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
