import React, { Component } from "react";
import { connect } from "react-redux";
import AdMenu from "./../../components/AdMenu/AdMenu";
import {
  actUpdatePatientsWorldRequest,
  actFetchPatientsWorldRequest,
} from "../../actions";
import "./AdManageOverview.scss";
import Modal from "../../components/Modal/Modal";
import CountriesTable from "./../../components/CountriesTable/CountriesTable";
import MiniFooter from "../../components/MiniFooter/MiniFooter";

export class AdManageOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      idCountry: "",
      txtCountry: "",
      region: { idRegion: "", nameRegion: "" },
      txtRegion: "",
      txtNhiem: 0,
      txtMatDoNhiem: 0,
      txtBinhPhuc: 0,
      txtTuVong: 0,
      txtFilterSelected: "all",
      txtFilterInput: "",
    };
  }

  componentDidMount() {
    this.props.fetchAllCountries();
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleModalUpdate = (country) => {
    this.setState({
      idCountry: country.id,
      txtCountry: country.nation,
      region: country.region,
      txtNhiem: country.nhiem,
      txtMatDoNhiem: country.matDoNhiem,
      txtBinhPhuc: country.binhPhuc,
      txtTuVong: country.tuVong,
    });
    this.showModal();
  };

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
      idCountry,
      txtCountry,
      region,
      txtNhiem,
      txtMatDoNhiem,
      txtBinhPhuc,
      txtTuVong,
    } = this.state;
    if (
      txtNhiem !== "" &&
      txtMatDoNhiem !== "" &&
      txtBinhPhuc !== "" &&
      txtTuVong !== ""
    ) {
      if (window.confirm("Bạn chắc chắn muốn lưu thông tin?")) {
        let country = {
          id: idCountry,
          nation: txtCountry,
          nhiem: txtNhiem,
          matDoNhiem: txtMatDoNhiem,
          binhPhuc: txtBinhPhuc,
          tuVong: txtTuVong,
          region: region,
        };
        this.props.onUpdateCountry(country);
        window.alert("Lưu dữ liệu thành công!");
        window.location.reload();
      }
    } else {
      window.alert("Vui lập nhập giá trị!");
    }
  };

  render() {
    var { world } = this.props;
    var {
      show,
      txtCountry,
      region,
      txtNhiem,
      txtMatDoNhiem,
      txtBinhPhuc,
      txtTuVong,
    } = this.state;
    return (
      <>
        <AdMenu />
        <br />
        <h1 style={{ textAlign: "center" }}>Thống kê số người nhiễm COVID-19 trên thế giới</h1>
        <CountriesTable
          world={world}
          admin={true}
          handleModalUpdate={this.handleModalUpdate}
        />
        <br/><br/>
        <MiniFooter/>

        <Modal
          show={show}
          handleClose={this.hideModal}
          isEdit={true}
          onSubmit={this.onSubmit}
          isModalWorld={true}
        >
          <div className="form-group">
            <label>Vị trí</label>
            <input
              type="text"
              name="txtCountry"
              className="form-control"
              value={txtCountry}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Khu vực</label>
            <input
              type="text"
              name="txtCountry"
              className="form-control"
              value={region.nameRegion}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Số ca xác nhận nhiễm</label>
            <input
              type="number"
              name="txtNhiem"
              className="form-control"
              value={txtNhiem}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label> Số ca nhiễm trên 1 triệu người</label>
            <input
              type="number"
              name="txtMatDoNhiem"
              className="form-control"
              value={txtMatDoNhiem}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group row m-0">
            <div className="col-xs-2 w-40 mr-60">
              <label>Số ca đã bình phục</label>
              <input
                type="number"
                name="txtBinhPhuc"
                className="form-control"
                value={txtBinhPhuc}
                onChange={this.onChange}
              />
            </div>
            <div className="col-xs-2 w-40">
              <label>Số ca tử vong</label>
              <input
                type="number"
                name="txtTuVong"
                className="form-control"
                value={txtTuVong}
                onChange={this.onChange}
              />
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    world: state.patientsWorld,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllCountries: () => {
      dispatch(actFetchPatientsWorldRequest());
    },
    onUpdateCountry: (country) => {
      dispatch(actUpdatePatientsWorldRequest(country));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdManageOverview);
