import React, { Component } from "react";
import "./Statistic.scss"

export default class Statistic extends Component {
  render() {
    var { local, patients, countries } = this.props;
    var name = "",
      nhiem = 0,
      dieuTri = 0,
      khoi = 0,
      tuVong = 0;
    if(local){
        name = "Việt Nam";
        nhiem = patients.length;
        patients.forEach(patient => {
            if(patient.status === "Khỏi") khoi++;
            else if(patient.status === "Đang điều trị") dieuTri++;
            else tuVong++
        })
    } else {
        name = "Thế giới";
        countries.forEach(country=> {
            nhiem += country.nhiem;
            dieuTri += (country.nhiem - country.binhPhuc - country.tuVong);
            khoi += country.binhPhuc;
            tuVong += country.tuVong;
        })
    }
    return (
      <div className="box-tk five-col bg-white row mr-10 ml-10">
        <div className="col-2">
          <div className="btn btn-danger">{name}</div>
        </div>
        <div className="col-2 text-center text-danger mt-10">
          <div className="text-up text-uppercase">Số ca nhiễm</div>
          <div className="text-up ">{new Intl.NumberFormat("en-US").format(nhiem)}</div>
        </div>
        <div className="col-2 text-center text-warning mt-10">
          <div className="text-up text-uppercase">Đang điều trị</div>
          <div className="text-up ">{new Intl.NumberFormat("en-US").format(dieuTri)}</div>
        </div>
        <div className="col-2 text-center text-success mt-10">
          <div className="text-up text-uppercase">Đã khỏi</div>
          <div className="text-up ">{new Intl.NumberFormat("en-US").format(khoi)}</div>
        </div>
        <div className="col-2 text-center text-light mt-10">
          <div className="text-up text-uppercase">Tử vong</div>
          <div className="text-up ">{new Intl.NumberFormat("en-US").format(tuVong)}</div>
        </div>
      </div>
    );
  }
}
