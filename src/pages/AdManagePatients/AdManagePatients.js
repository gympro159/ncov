import React, { Component } from "react";
import AdMenu from "./../../components/AdMenu/AdMenu";
import MiniFooter from "./../../components/MiniFooter/MiniFooter";
import { connect } from "react-redux";
import {
  actFetchPatientsRequest,
  actAddPatientRequest,
  actUpdatePatientRequest,
  actDeletePatientRequest,
} from "../../actions";
import Modal from "../../components/Modal/Modal";
import "./AdManagePatients.scss";
import PatientsTable from "../../components/PatientsTable/PatientsTable";

class AdManagePatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isEdit: false,
      idPatient: "",
      txtAge: "",
      txtGender: true,
      txtPlace: "",
      txtStatus: "Đang điều trị",
      txtNationality: "",
    };
  }
  componentDidMount() {
    this.props.fetchAllPatients();
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleModalAdd = () => {
    this.setState({
      isEdit: false,
      txtAge: "",
      txtGender: true,
      txtPlace: "",
      txtStatus: "Đang điều trị",
      txtNationality: "",
    });
    this.showModal();
  };

  handleModalUpdate = (patient) => {
    this.setState({
      isEdit: true,
      idPatient: patient.id,
      txtAge: parseInt(patient.age),
      txtGender: patient.gender,
      txtPlace: patient.place,
      txtStatus: patient.status,
      txtNationality: patient.nationality,
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
      isEdit,
      idPatient,
      txtAge,
      txtGender,
      txtPlace,
      txtStatus,
      txtNationality,
    } = this.state;
    if (txtAge !== "" && txtPlace !== "" && txtNationality !== "") {
      if (window.confirm("Bạn chắc chắn muốn lưu thông tin?")) {
        if (isEdit) {
          let patient = {
            id: idPatient,
            age: txtAge,
            gender: txtGender,
            place: txtPlace,
            status: txtStatus,
            nationality: txtNationality,
          };
          this.props.onUpdatePatient(patient);
        } else {
          let patient = {
            age: txtAge,
            gender: txtGender,
            place: txtPlace,
            status: txtStatus,
            nationality: txtNationality,
          };
          this.props.onAddPatient(patient);
        }

        window.alert("Lưu dữ liệu thành công!");
        window.location.reload();
      }
    } else {
      window.alert("Vui lập nhập giá trị!");
    }
  };

  onDelete = () => {
    if (window.confirm("Bạn chắc chắn muốn xóa?")) {
      this.props.onDeletePatient(this.state.idPatient);
      window.alert("Xóa dữ liệu thành công!");
      window.location.reload();
    }
  };

  render() {
    var { patients } = this.props;
    var {
      show,
      isEdit,
      txtAge,
      txtGender,
      txtPlace,
      txtStatus,
      txtNationality,
    } = this.state;
    return (
      <>
        <AdMenu />
        <br />
        <h1 style={{ textAlign: "center" }}>
          Danh sách người nhiễm COVID-19 ở Việt Nam
        </h1>
        <PatientsTable
          admin={true}
          patients={patients}
          handleModalUpdate={this.handleModalUpdate}
        />
        <br />
        <br />
        <MiniFooter />

        <Modal
          show={show}
          handleClose={this.hideModal}
          isEdit={isEdit}
          onSubmit={this.onSubmit}
          onDelete={this.onDelete}
          isModalWorld={false}
        >
          <div className="form-group row m-0">
            <div className="col-xs-2">
              <label>Tuổi</label>
              <input
                type="number"
                name="txtAge"
                className="form-control"
                placeholder=""
                value={txtAge}
                onChange={this.onChange}
              />
            </div>
            <div className="col-xs-2 ml-70">
              <label>Giới tính </label>
              <select
                className="form-control height-select-filter"
                name="txtGender"
                value={txtGender}
                onChange={this.onChange}
              >
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Địa điểm</label>
            <input
              type="text"
              name="txtPlace"
              className="form-control"
              placeholder=""
              value={txtPlace}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Tình trạng</label>
            <select
              className="form-control"
              name="txtStatus"
              value={txtStatus}
              onChange={this.onChange}
            >
              <option value="Đang điều trị">Đang điều trị</option>
              <option value="Khỏi">Khỏi</option>
              <option value="Tử vong">Tử vong</option>
            </select>
          </div>
          <div className="form-group">
            <label>Quốc tịch</label>
            <input
              type="text"
              name="txtNationality"
              className="form-control"
              placeholder=""
              value={txtNationality}
              onChange={this.onChange}
            />
          </div>
        </Modal>
        <button
          className="btn btn-add"
          type="button"
          onClick={this.handleModalAdd}
        >
          +
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    patients: state.patientsVN,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllPatients: () => {
      dispatch(actFetchPatientsRequest());
    },
    onAddPatient: (patient) => {
      dispatch(actAddPatientRequest(patient));
    },
    onUpdatePatient: (patient) => {
      dispatch(actUpdatePatientRequest(patient));
    },
    onDeletePatient: (id) => {
      dispatch(actDeletePatientRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdManagePatients);
