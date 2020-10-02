import React, { Component } from "react";
import "./ProvincesTable.scss";

export default class ProvincesTable extends Component {
  setDataTable = (dataTable, patients) => {
    patients.forEach((patient) => {
      let checked = false;
      for (let row of dataTable) {
        if (row.place === patient.place) {
          checked = true;
          row.nhiem++;
          if (patient.status === "Đang điều trị") row.dieuTri++;
          else if (patient.status === "Khỏi") row.khoi++;
          else row.tuVong++;
          break;
        }
      }
      if (!checked) {
        let dieuTri = 0,
          khoi = 0,
          tuVong = 0;
        if (patient.status === "Đang điều trị") dieuTri = 1;
        else if (patient.status === "Khỏi") khoi = 1;
        else tuVong = 1;
        dataTable.push({
          place: patient.place,
          nhiem: 1,
          dieuTri,
          khoi,
          tuVong,
        });
      }
    });
    return dataTable;
  };

  render() {
    var { patients } = this.props;
    var dataTable = [];
    if (patients.length > 0) {
      this.setDataTable(dataTable, patients);
    }
    return (
      <div className="data-province-table mt-20">
        <table className="b-table table-hover text-center">
          <thead>
            <tr>
              <th>Tỉnh, Thành phố</th>
              <th>Số ca nhiễm</th>
              <th>Đang điều trị</th>
              <th>Đã khỏi</th>
              <th>Tử vong</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.place}</td>
                  <td>{row.nhiem}</td>
                  <td>{row.dieuTri}</td>
                  <td>{row.khoi}</td>
                  <td>{row.tuVong}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
