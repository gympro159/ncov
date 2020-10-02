import React, { Component } from "react";
import changeAlias from "../../constants/common";
import "./CountriesTable.scss";

export default class CountriesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtFilterSelected: "all",
      txtFilterInput: "",
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
    var { world, admin, handleModalUpdate } = this.props;
    var { txtFilterSelected, txtFilterInput } = this.state;
    return (
      <>
        <div className="form-group row ml-2 mr-0">
          <div className="col-xs-2">
            <br />
            <select
              className="form-control height-select-filter"
              name="txtFilterSelected"
              value={txtFilterSelected}
              onChange={this.onChange}
            >
              <option value="all" disabled hidden>
                Chọn khu vực
              </option>
              <option value="all">Tất cả</option>
              <option value="AS">Asia</option>
              <option value="EU">Europe</option>
              <option value="NA">North America</option>
              <option value="SA">South America</option>
              <option value="AU">Australia</option>
              <option value="AF">Africa</option>
            </select>
          </div>

          <div className="col-xs-3 ml-2">
            <br />
            <input
              type="text"
              className="form-control"
              name="txtFilterInput"
              placeholder="Vị trí"
              value={txtFilterInput}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="data-countries-table mt-10">
          <table className="b-table table-hover text-center">
            <thead>
              <tr>
                <th>Vị trí</th>
                <th>Số ca xác nhận nhiễm</th>
                <th>Số ca nhiễm trên 1 triệu người</th>
                <th>Số ca đã bình phục</th>
                <th>Số ca tử vong</th>
                <th>Khu vực</th>
              </tr>
            </thead>
            <tbody>
              {world.map((country, index) => {
                return (
                  (txtFilterSelected === "all"
                    ? true
                    : txtFilterSelected === country.region.idRegion) &&
                  (txtFilterInput.trim() === ""
                    ? true
                    : changeAlias(country.nation).includes(
                        changeAlias(txtFilterInput)
                      )) && (
                    <tr
                      key={index}
                      className={admin?"tr-cursor":""}
                      onClick={admin && (()=> handleModalUpdate(country))}
                    >
                      <td>{country.nation}</td>
                      <td>{country.nhiem}</td>
                      <td>{country.matDoNhiem.toFixed(2)}</td>
                      <td>{country.binhPhuc}</td>
                      <td>{country.tuVong}</td>
                      <td>{country.region.nameRegion}</td>
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
